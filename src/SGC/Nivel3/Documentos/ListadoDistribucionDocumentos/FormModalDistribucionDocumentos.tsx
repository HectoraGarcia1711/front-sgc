import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Progress,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FormularioEncabezado,
  FormularioDescripcionDocumentos,
  FormTablaAndFormDistribucionDocTabla,
} from "./Fomularios/";

import {
  FormDataDescripcionDocumentos,
  FormDataDistribucionDocTablaData,
  FormDataEncabezado,
} from "./Types";
import { useCrud } from "../../../../libs/useCrud";
import { createEncabezadoDisDocu } from "./Apis/ApiencabezadoDistribucionDocumento";
import { useQueryClient } from "@tanstack/react-query";

const FormModalDistribucionDocumentos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33333);

  const queryClient = useQueryClient(); // Accede al cliente de `react-query`

  // Estados para cada sección del formulario
  const [encabezadoData, setEncabezadoData] =
    useState<FormDataEncabezado | null>(null);
  const [descripcionDocs, setDescripcionDocs] = useState<
    FormDataDescripcionDocumentos[]
  >([]);
  const [tablaDisDoc, setTablaDisDoc] = useState<
    FormDataDistribucionDocTablaData[]
  >([]);

  const resetStates = () => {
    setEncabezadoData(null);
    setDescripcionDocs([]);
    setTablaDisDoc([]);
    setStep(1);
    setProgress(33.33333);
  };

  // Tipo para los datos finales que enviarás a la API
  type FinalData = FormDataEncabezado & {
    lddDescricionDocumentos: FormDataDescripcionDocumentos[];
    lddDocTablas: FormDataDistribucionDocTablaData[];
  };

  // Utilizamos el custom hook
  const { createItem } = useCrud<FormDataEncabezado>({
    queryKey: ["encabezados"], // Puedes ajustar el key según necesites
    getAll: async () => [], // No necesitamos esta función por ahora
    createItem: createEncabezadoDisDocu, // Pasamos la función de creación
    updateItem: async () => {
      throw new Error("No implementado");
    },
    deleteItem: async () => {
      throw new Error("No implementado");
    },
  });

  // Manejo del envío
  const handleSend = async () => {
    if (encabezadoData) {
      const finalData: FinalData = {
        ...encabezadoData,
        lddDescricionDocumentos: descripcionDocs,
        lddDocTablas: tablaDisDoc,
      };

      try {
        const nuevoEncabezado = await createItem(finalData);
        console.log("guardado en la base de datos: ", nuevoEncabezado);

        // Invalida la caché y resetea los estados después de guardar
        await queryClient.invalidateQueries({
          queryKey: ["encabezadoLisDisDoc"],
        });
        resetStates(); // Resetea todos los estados a su valor inicial
        onClose(); // Cierra el modal
        toast({
          title: "Datos enviados.",
          description: "Tu formulario ha sido enviado con éxito.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.error("Error al guardar en la base de datos:", error);
      }
    } else {
      console.error("Encabezado incompleto");
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Registrar Nuevo</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box
              borderWidth="1px"
              rounded="lg"
              shadow="1px 1px 3px rgba(0,0,0,0.3)"
              maxWidth={800}
              p={6}
              m="10px auto"
            >
              <Progress
                hasStripe
                value={progress}
                mb="5%"
                mx="5%"
                isAnimated
              ></Progress>

              {/* Mostrar el componente correcto según el paso */}
              {step === 1 ? (
                <FormularioEncabezado setEncabezadoData={setEncabezadoData} />
              ) : step === 2 ? (
                <FormularioDescripcionDocumentos
                  setDescripcionDocs={setDescripcionDocs}
                />
              ) : (
                <FormTablaAndFormDistribucionDocTabla
                  setTablaDisDoc={setTablaDisDoc}
                />
              )}

              <ButtonGroup mt="5%" w="100%">
                <Flex w="100%" justifyContent="space-between">
                  <Button
                    w="7rem"
                    onClick={() => {
                      if (step < 3) {
                        setStep(step + 1);
                        setProgress(progress + 33.33333);
                      }
                    }}
                    colorScheme="teal"
                    variant="outline"
                    isDisabled={step === 3}
                  >
                    Siguiente
                  </Button>

                  {step === 3 && (
                    <Button
                      w="7rem"
                      colorScheme="red"
                      variant="solid"
                      type="submit"
                      onClick={() => {
                        handleSend(); // Cierra el modal después de enviar
                        toast({
                          title: "Datos enviados.",
                          description:
                            "Tu formulario ha sido enviado con éxito.",
                          status: "success",
                          duration: 3000,
                          isClosable: true,
                        });
                      }}
                    >
                      Enviar
                    </Button>
                  )}
                </Flex>
              </ButtonGroup>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormModalDistribucionDocumentos;
