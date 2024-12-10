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
    FormDataEncabezadoSolicitudPersonal,
FormDataDatosSolicitudPersonal
  } from "./Types";
  import { useCrud } from "../../../../libs/useCrud";
  import axios from "../../../../libs/axios";
import { FormDatosSolicitudPersonal, EncabezadoSolicitudPersonal } from "./Formularios";

  //esta es la peticion a la api, ya que es la unica que se utiliza la usaremos en esta parte para
  //no crear un nuevo archivo
  //pero esto puede cambiar algun dia
  export const createEncabezadoListaAsistencia = async (
    data: FormDataEncabezadoSolicitudPersonal
  ): Promise<FormDataEncabezadoSolicitudPersonal> => {
    const response = await axios.post("/api/solicitudPersonal", data);
    return response.data;
  };
  
  const ModalSolicitudPersonal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(50);
  
    const queryClient = useQueryClient(); // Accede al cliente de `react-query`
  
    // Estados para cada sección del formulario
    const [encabezadoData, setEncabezadoData] =
      useState<FormDataEncabezadoSolicitudPersonal | null>(null);
    const [datosSolicitudPersonal, setDatosSolicitudPersonal] = useState<
      FormDataDatosSolicitudPersonal | null
    >(null);
    const resetStates = () => {
      setEncabezadoData(null);
      setDatosSolicitudPersonal(null);
      setStep(1);
      setProgress(50);
    };
  
    // Tipo para los datos finales que enviarás a la API
    type FinalData = FormDataEncabezadoSolicitudPersonal & {
      datosSolicitudPersonal: FormDataDatosSolicitudPersonal;

    };
  
    // Utilizamos el custom hook
    const { createItem } = useCrud<FormDataEncabezadoSolicitudPersonal>({
      queryKey: ["encabezadoSolicitudPersonal"], // Puedes ajustar el key según necesites
      getAll: async () => [], // No necesitamos esta función por ahora
      createItem: createEncabezadoListaAsistencia, // Pasamos la función de creación
      updateItem: async () => {
        throw new Error("No implementado");
      },
      deleteItem: async () => {
        throw new Error("No implementado");
      },
    });
  
    // Manejo del envío
    const handleSend = async () => {
        if (encabezadoData && datosSolicitudPersonal) { // Verificar que datosListaAsistencia no sea null
            const finalData: FinalData = {
              ...encabezadoData,
              datosSolicitudPersonal, // Pasar el objeto directamente
            };

        try {
          const nuevoEncabezado = await createItem(finalData);
          console.log("guardado en la base de datos: ", nuevoEncabezado);
  
          // Invalida la caché y resetea los estados después de guardar
          await queryClient.invalidateQueries({
            queryKey: ["SolicitudPersonal"],
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
                  <EncabezadoSolicitudPersonal
                    setEncabezadoData={setEncabezadoData}
                  />
                ) : (
                  <FormDatosSolicitudPersonal
                     setData={setDatosSolicitudPersonal}
                  />
                )}
  
                <ButtonGroup mt="5%" w="100%">
                  <Flex w="100%" justifyContent="space-between">
                    <Button
                      w="7rem"
                      onClick={() => {
                        if (step < 2) {
                          setStep(step + 1);
                          setProgress(progress + 50);
                        }
                      }}
                      colorScheme="teal"
                      variant="outline"
                      isDisabled={step === 2}
                    >
                      Siguiente
                    </Button>
  
                    {step === 2 && (
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
  export default ModalSolicitudPersonal;