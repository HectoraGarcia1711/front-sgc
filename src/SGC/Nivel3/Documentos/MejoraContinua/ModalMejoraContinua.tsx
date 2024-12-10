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
import { useCrud } from "../../../../libs/useCrud";
import axios from "../../../../libs/axios";
import { FomrAndTableMejoraContinua, FormAndTableMejoraContinua, 
  FormDatosMejoraContinua, FormEncabezadoMejoraContinua, 
  FormEvaluacionMejoraContinua } from "./Formularios";
import { FormDataEncabezadoMejoraContinua, FormDataDatosMejoraContinua,
  FormDataTablaMejoraContinua, FormDataEvaluacionEficienciaMejoraContinua,
  FormDataIntegrantesMejoraContinua
 } from "./Types";
//esta es la peticion a la api, ya que es la unica que se utiliza la usaremos en esta parte para
//no crear un nuevo archivo
//pero esto puede cambiar algun dia


export const createEncabezadoMejoraContinua = async (
  data: FormDataEncabezadoMejoraContinua
): Promise<FormDataEncabezadoMejoraContinua> => {
  const response = await axios.post("/api/mejoraContinua", data);
  return response.data;
};

export const ModalMejoraContinua = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(20);

  const queryClient = useQueryClient(); // Accede al cliente de `react-query`

  // Estados para cada sección del formulario
  const [encabezadoData, setEncabezadoData] =
    useState<FormDataEncabezadoMejoraContinua | null>(null);
  const [datosMejoraContinua, setDatosMejoraContinua] = useState<FormDataDatosMejoraContinua | null>(null);
  const [tablaMejoraContinua, setTablaMejoraContinua] = useState<FormDataTablaMejoraContinua[]>([]);
  const [evaluacionEficienciaMejoraContinua, setEvaluacionEficienciaMejoraContinua] = useState<FormDataEvaluacionEficienciaMejoraContinua | null>(null);
  const [integrantesMejoraContinua, setIntegrantesMejoraContinua] = useState<FormDataIntegrantesMejoraContinua[]>([]);

  const resetStates = () => {
    setEncabezadoData(null);
    setDatosMejoraContinua(null);
    setTablaMejoraContinua([]);
    setEvaluacionEficienciaMejoraContinua(null);
    setIntegrantesMejoraContinua([]);
    //aqui van los set para reiniciarlos
    setStep(1);
    setProgress(20);
  };

  // Tipo para los datos finales que enviarás a la API
  type FinalData = FormDataEncabezadoMejoraContinua & {
    datosMejoraContinua: FormDataDatosMejoraContinua,
    tablaMejoraContinuaList: FormDataTablaMejoraContinua[],
    evaluacionEficienciaMejoraContinua: FormDataEvaluacionEficienciaMejoraContinua,
    integrantesMejoraContinuaList: FormDataIntegrantesMejoraContinua[],
    //datosPlanAuditoriaList: FormDataDatosPlanAuditoria[];
  };

  // Utilizamos el custom hook
  const { createItem } = useCrud<FormDataEncabezadoMejoraContinua>({
    queryKey: ["encabezadoMejoraContinua"], // Puedes ajustar el key según necesites
    getAll: async () => [], // No necesitamos esta función por ahora
    createItem: createEncabezadoMejoraContinua, // Pasamos la función de creación
    updateItem: async () => {
      throw new Error("No implementado");
    },
    deleteItem: async () => {
      throw new Error("No implementado");
    },
  });

  // Manejo del envío
  const handleSend = async () => {
    if (encabezadoData && datosMejoraContinua && evaluacionEficienciaMejoraContinua) {
      const finalData: FinalData = {
        ...encabezadoData,
        datosMejoraContinua,
        tablaMejoraContinuaList: tablaMejoraContinua,
        evaluacionEficienciaMejoraContinua,
        integrantesMejoraContinuaList:integrantesMejoraContinua,
        //datosPlanAuditoriaList: datosPlanAuditoria,
      };

      try {
        const nuevoEncabezado = await createItem(finalData);
        console.log("guardado en la base de datos: ", nuevoEncabezado);

        // Invalida la caché y resetea los estados después de guardar
        await queryClient.invalidateQueries({
          queryKey: ["MejoraContinua"],
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
                <FormEncabezadoMejoraContinua
                  setEncabezadoData={setEncabezadoData}
                />
              ) : step === 2 ? (
                <FormDatosMejoraContinua setData={setDatosMejoraContinua}/>
              ) : step === 3 ? (
                <FomrAndTableMejoraContinua setTablaDisDoc={setTablaMejoraContinua}/>
              ) : step === 4 ? (
                <FormEvaluacionMejoraContinua setData={setEvaluacionEficienciaMejoraContinua}/>
              ) : (
                <FormAndTableMejoraContinua setTablaDisDoc={setIntegrantesMejoraContinua}/>
              )}

              <ButtonGroup mt="5%" w="100%">
                <Flex w="100%" justifyContent="space-between">
                  <Button
                    w="7rem"
                    onClick={() => {
                      if (step < 5) {
                        setStep(step + 1);
                        setProgress(progress + 20);
                      }
                    }}
                    colorScheme="teal"
                    variant="outline"
                    isDisabled={step === 5}
                  >
                    Siguiente
                  </Button>

                  {step === 5 && (
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
