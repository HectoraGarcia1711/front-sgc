import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Spinner,
  Text,
} from "@chakra-ui/react";
import axios from "../../../../libs/axios";
import {
  ApiResponseBSC,
  FormDataPartesInteresadasBSC,
  schemaResponseBSC,
  FormDataMetricasBSC,
  FormDataEncabezadoBSC,
  FormDataPrespectivaBSC,
} from "./Types";
import {
  FormAndTableMetricas,
  FormAndTablePartesInBSC,
  FormAndTablePrespectivaBSC,
  FormEncabezadoBSC,
} from "./Formularios";

type AccordionModalProps = {
  isOpen: boolean;
  id: string;
  onClose: () => void;
};

const AccordionModal: React.FC<AccordionModalProps> = ({
  isOpen,
  id,
  onClose,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [encabezado, setEncabezado] = useState<FormDataEncabezadoBSC | null>(
    null
  );
  const [prespectiva, setPrespectiva] = useState<FormDataPrespectivaBSC[]>([]);
  const [partesInteresadas, setPartesInteresadas] = useState<
    FormDataPartesInteresadasBSC[]
  >([]);
  const [metricas, setMetricas] = useState<FormDataMetricasBSC[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<ApiResponseBSC>(
          `/api/balanceScoreCard/${id}`
        );
        const parsedData = schemaResponseBSC.parse(response.data);

        console.log("Datos completos:", parsedData);
        console.log(
          "Partes interesadas de la primera perspectiva:",
          parsedData.balanceSCPrespectivas[0]?.partesInteresadas
        );

        console.log(
          "Metricas de la primera perspectiva:",
          parsedData.balanceSCPrespectivas[0]?.metricasBSCList
        );

        // Asigna los datos necesarios a los estados
        setPrespectiva(parsedData.balanceSCPrespectivas);

        setPartesInteresadas(
          parsedData.balanceSCPrespectivas.flatMap(
            (p) => p.partesInteresadas || []
          )
        );

        setMetricas(
          parsedData.balanceSCPrespectivas.flatMap(
            (m) => m.metricasBSCList || []
          )
        );
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocurrió un error desconocido.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id && isOpen) {
      fetchData();
    }
  }, [id, isOpen]);

  const handleSave = async (updatedPartes: FormDataPartesInteresadasBSC[]) => {
    try {
      const response = await axios.put(
        `/api/partesInteresadas${id}`,
        updatedPartes
      );
      setPartesInteresadas(response.data.partesInteresadas || updatedPartes);
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };

  const handleSaveM = async (updatedPartes: FormDataMetricasBSC[]) => {
    try {
      const response = await axios.put(
        `/api/partesInteresadas${id}`,
        updatedPartes
      );
      setPartesInteresadas(response.data.partesInteresadas || updatedPartes);
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setPartesInteresadas([]);
      setError(null);
    }
  }, [isOpen]);

  if (loading) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Registro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Spinner size="xl" />
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }

  if (error) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Registro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="red.500">{error}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar Registro</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Partes Interesadas
                </Box>
              </AccordionButton>
              <AccordionPanel pb={4}></AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Partes Interesadas
                </Box>
              </AccordionButton>
              <AccordionPanel pb={4}>
                <FormAndTablePartesInBSC
                  setTablaDisDoc={handleSave}
                  initialData={partesInteresadas}
                />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Metricas
                </Box>
              </AccordionButton>
              <AccordionPanel pb={4}>
                <FormAndTableMetricas
                  setTablaDisDoc={handleSaveM}
                  initialData={metricas}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AccordionModal;
