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
import { useQueryClient } from "@tanstack/react-query";
import {
  FormDataEncabezadoConstanciaInduccion,
  FormDataInfoConstanciaInduccion,
  FormDataColaboradorConstanciaInduccion,
  FormDataColaboradoresConstanciaInduccion,
} from "./Type";
import { useCrud } from "../../../../libs/useCrud";
import axios from "../../../../libs/axios";
import {
  FormAndTableColaboradoresConsIn,
  FormColaboradorConsIn,
  FormEncabezadoConsIn,
  TablaAndFormInfoConsIn,
} from "./FormulariosConsIn";
//esta es la peticion a la api, ya que es la unica que se utiliza la usaremos en esta parte para
//no crear un nuevo archivo
//pero esto puede cambiar algun dia
export const createEncabezadoConsInduccion = async (
  data: FormDataEncabezadoConstanciaInduccion
): Promise<FormDataEncabezadoConstanciaInduccion> => {
  const response = await axios.post("/api/constanciaInduccion", data);
  return response.data;
};

const ModalConstanciaInduccion = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);

  const queryClient = useQueryClient(); // Accede al cliente de `react-query`

  // Estados para cada sección del formulario
  const [encabezadoData, setEncabezadoData] =
    useState<FormDataEncabezadoConstanciaInduccion | null>(null);

  const [infoConsIn, setInfoConsIn] = useState<
    FormDataInfoConstanciaInduccion[]
  >([]);
  const [colaboradorConsInduc, setColaboradorConsInduc] =
    useState<FormDataColaboradorConstanciaInduccion | null>(null);
  const [colaboradoresConsIn, setColaboradoresConsIn] = useState<
    FormDataColaboradoresConstanciaInduccion[]
  >([]);

  const resetStates = () => {
    setEncabezadoData(null);
    setInfoConsIn([]);
    setColaboradorConsInduc(null);
    setColaboradoresConsIn([]);
    setStep(1);
    setProgress(25);
  };

  // Tipo para los datos finales que enviarás a la API
  type FinalData = FormDataEncabezadoConstanciaInduccion & {
    informacionConsIndus: FormDataInfoConstanciaInduccion[];
    colaboradorConsInduc: FormDataColaboradorConstanciaInduccion;
    colaboradoresConsIndus: FormDataColaboradoresConstanciaInduccion[];
  };

  // Utilizamos el custom hook
  const { createItem } = useCrud<FormDataEncabezadoConstanciaInduccion>({
    queryKey: ["encabezadoConstanciaInduccion"], // Puedes ajustar el key según necesites
    getAll: async () => [], // No necesitamos esta función por ahora
    createItem: createEncabezadoConsInduccion, // Pasamos la función de creación
    updateItem: async () => {
      throw new Error("No implementado");
    },
    deleteItem: async () => {
      throw new Error("No implementado");
    },
  });

  // Manejo del envío
  const handleSend = async () => {
    if (encabezadoData && colaboradorConsInduc) {
      // Verificar que datosListaAsistencia no sea null
      const finalData: FinalData = {
        ...encabezadoData,
        informacionConsIndus: infoConsIn,
        colaboradorConsInduc, // Pasar el objeto directamente
        colaboradoresConsIndus: colaboradoresConsIn,
      };

      try {
        const nuevoEncabezado = await createItem(finalData);
        console.log("guardado en la base de datos: ", nuevoEncabezado);

        // Invalida la caché y resetea los estados después de guardar
        await queryClient.invalidateQueries({
          queryKey: ["ConstanciaInduccion"],
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
          <ModalHeader>Crear Nuevo Registro</ModalHeader>
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

              {/* Mostrar el componente correcto según el paso 
                
                <FormEncabezado setEncabezadoData={setEncabezadoData} />
  
  
                <FormAndTablaListaVerificacion
                    setTabla={setTablaDataListaVerificacion}
                  />
  
                */}
              {step === 1 ? (
                <FormEncabezadoConsIn setEncabezadoData={setEncabezadoData} />
              ) : step === 2 ? (
                <TablaAndFormInfoConsIn setTabla={setInfoConsIn} />
              ) : step === 3 ? (
                <FormColaboradorConsIn setData={setColaboradorConsInduc} />
              ) : (
                <FormAndTableColaboradoresConsIn
                  setTabla={setColaboradoresConsIn}
                />
              )}

              <ButtonGroup mt="5%" w="100%">
                <Flex w="100%" justifyContent="space-between">
                  <Button
                    w="7rem"
                    onClick={() => {
                      if (step < 4) {
                        setStep(step + 1);
                        setProgress(progress + 25);
                      }
                    }}
                    colorScheme="teal"
                    variant="outline"
                    isDisabled={step === 4}
                  >
                    Siguiente
                  </Button>

                  {step === 4 && (
                    <Button
                      w="7rem"
                      colorScheme="red"
                      variant="solid"
                      type="submit"
                      onClick={() => {
                        handleSend(); // Cierra el modal después de enviar
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
export default ModalConstanciaInduccion;
