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
  FormDataEncabezadoMinutaReunion,
  FormDataDatosMinutaReunion,
  FormDataParticipantesMinutaReunion,
  FormDataPuntosTratarMinutaReunion,
  FormDataReAcuerdosMinutaReunion,
  FormDataSeguiAcMinutaReunion,
} from "./Types";
import { useCrud } from "../../../../libs/useCrud";
import axios from "../../../../libs/axios";
import {
  FormEncabezadoMinutaReunion,
  FormDatosMinutaReunion,
  //FormAndTableParticipantes,
  FormAndTablePuntosTratar,
  FormAndTableResultados,
  FormAndTableSeguimiento,
  FormAndtableParticipantes,
} from "./Formularios";

//esta es la peticion a la api, ya que es la unica que se utiliza la usaremos en esta parte para
//no crear un nuevo archivo
//pero esto puede cambiar algun dia
export const createEncabezadoMinutaReunion = async (
  data: FormDataEncabezadoMinutaReunion
): Promise<FormDataEncabezadoMinutaReunion> => {
  const response = await axios.post("/api/minutaReunion", data);
  return response.data;
};

const ModalMinutaReunion = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(16.6666);

  const queryClient = useQueryClient(); // Accede al cliente de `react-query`

  // Estados para cada sección del formulario
  const [encabezadoData, setEncabezadoData] =
    useState<FormDataEncabezadoMinutaReunion | null>(null);
  const [tablaDataMinutaDatos, setTablaDataMinutaDatos] = useState<
    FormDataDatosMinutaReunion[]
  >([]);
  const [participantes, setParticipantes] = useState<
    FormDataParticipantesMinutaReunion[]
  >([]);
  const [puntosTratar, setPuntosTratar] = useState<
    FormDataPuntosTratarMinutaReunion[]
  >([]);
  const [resulAcuer, setResulAcuer] = useState<
    FormDataReAcuerdosMinutaReunion[]
  >([]);
  const [seguimiento, setSeguimiento] = useState<
    FormDataSeguiAcMinutaReunion[]
  >([]);

  const resetStates = () => {
    setEncabezadoData(null);
    setTablaDataMinutaDatos([]);
    setParticipantes([]);
    setPuntosTratar([]);
    setResulAcuer([]);
    setSeguimiento([]);
    setStep(1);
    setProgress(16.6666);
  };

  // Tipo para los datos finales que enviarás a la API
  type FinalData = FormDataEncabezadoMinutaReunion & {
    minuReunDatos: FormDataDatosMinutaReunion[];
    minuReunParticipantes: FormDataParticipantesMinutaReunion[];
    minuReunPuntosTratar: FormDataPuntosTratarMinutaReunion[];
    minuReunResultadosAcuerdos: FormDataReAcuerdosMinutaReunion[];
    minutaReunionSeguimientos: FormDataSeguiAcMinutaReunion[];
  };

  // Utilizamos el custom hook
  const { createItem } = useCrud<FormDataEncabezadoMinutaReunion>({
    queryKey: ["encabezadoMinutaReunion"], // Puedes ajustar el key según necesites
    getAll: async () => [], // No necesitamos esta función por ahora
    createItem: createEncabezadoMinutaReunion, // Pasamos la función de creación
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
        minuReunDatos: tablaDataMinutaDatos,
        minuReunParticipantes: participantes,
        minuReunPuntosTratar: puntosTratar,
        minuReunResultadosAcuerdos: resulAcuer,
        minutaReunionSeguimientos: seguimiento,
      };

      try {
        const nuevoEncabezado = await createItem(finalData);
        console.log("guardado en la base de datos: ", nuevoEncabezado);

        // Invalida la caché y resetea los estados después de guardar
        await queryClient.invalidateQueries({
          queryKey: ["MinutaReunion"],
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

              {/* Mostrar el componente correcto según el paso */}
              {step === 1 ? (
                <FormEncabezadoMinutaReunion
                  setEncabezadoData={setEncabezadoData}
                />
              ) : step === 2 ? (
                <FormDatosMinutaReunion
                  setDataDatos={setTablaDataMinutaDatos}
                />
              ) : step === 3 ? (
                <FormAndtableParticipantes setTabla={setParticipantes} />
              ) : step === 4 ? (
                <FormAndTablePuntosTratar setPuntos={setPuntosTratar} />
              ) : step === 5 ? (
                <FormAndTableResultados setResultados={setResulAcuer} />
              ) : (
                <FormAndTableSeguimiento setSeguimiento={setSeguimiento} />
              )}

              <ButtonGroup mt="5%" w="100%">
                <Flex w="100%" justifyContent="space-between">
                  <Button
                    w="7rem"
                    onClick={() => {
                      if (step < 6) {
                        setStep(step + 1);
                        setProgress(progress + 16.6666);
                      }
                    }}
                    colorScheme="teal"
                    variant="outline"
                    isDisabled={step === 6}
                  >
                    Siguiente
                  </Button>

                  {step === 6 && (
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
export default ModalMinutaReunion;
