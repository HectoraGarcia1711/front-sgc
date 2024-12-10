import React, { useState } from "react";
import { Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import Tabla from "../../Componentes/Tabla";
import axios from "../../../../libs/axios";
import { FormDataEncabezadoBSC } from "./Types";
import { useCrud } from "../../../../libs/useCrud";
import { ModalBalanceScoreCrad } from "./ModalBalanceScoreCrad";
import AccordionModal from "./AccordionModal";

const queryEncabezado = async (): Promise<FormDataEncabezadoBSC[]> =>
  (await axios.get("/api/balanceScoreCard")).data;

const deleteEncabezado = async (id: string): Promise<void> =>
  await axios.delete(`/api/balanceScoreCard/${id}`);

const onDownloadPDF = async (id: string) => {
  try {
    const response = await axios.get(
      `/api/balanceScoreCard/reporte/pdf/${id}`,
      {
        responseType: "blob",
      }
    );
    const url = window.URL.createObjectURL(response.data);
    window.open(url, "_blank");
  } catch (error) {
    console.error("Error al abrir el PDF:", error);
  }
};

const BalanceScoreCard = () => {
  const {
    items: data,
    isLoading,
    error,
    deleteItem,
  } = useCrud<FormDataEncabezadoBSC>({
    queryKey: ["BalanceScoreCard"],
    getAll: queryEncabezado,
    createItem: () =>
      Promise.resolve({
        coDocumento: "",
        noRevision: "",
        fechaEmicion: "",
        fechaRevision: "",
      }), // Utiliza la función real para crear registros
    updateItem: () =>
      Promise.resolve({
        coDocumento: "",
        noRevision: "",
        fechaEmicion: "",
        fechaRevision: "",
        idControlDocumentosExternos: undefined,
        area: "",
        seccion: "",
        fecha: "",
      }), // Valor ficticio
    deleteItem: deleteEncabezado,
  });

  const [selectedId, setSelectedId] = useState<string | null>(null); // Guarda el ID del registro seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (id: string) => {
    setSelectedId(id); // Guarda el ID seleccionado
    setIsModalOpen(true); // Abre el modal
  };

  if (isLoading) {
    return (
      <Flex alignItems="center" justifyContent="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex alignItems="center" justifyContent="center" height="100vh">
        <Text color="red.500">Error al cargar los datos.</Text>
      </Flex>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Flex alignItems="center" justifyContent="center" height="100vh">
        <Text>No hay datos disponibles.</Text>
      </Flex>
    );
  }

  const dataNueva = data.map((item) => ({
    ...item,
    id: String(item.idBalanceScoreCard),
  }));

  return (
    <Flex
      minHeight="calc(100vh - 64px)"
      alignItems="center"
      justifyContent="center"
      p={4}
      flexDirection="column"
    >
      <ModalBalanceScoreCrad />

      <Flex
        alignItems="center"
        justifyContent="center"
        p={4}
        flexDirection="column"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="black"
        borderRadius="md"
        boxShadow="md"
        maxWidth="1100px"
        width="100%"
        margin="0 auto"
        mt={8}
      >
        <Heading
          as="h1"
          size="lg"
          mb={4}
          bg="black"
          color="white"
          p={2}
          width="100%"
          textAlign="center"
          borderTopLeftRadius="md"
          borderTopRightRadius="md"
        >
          BALANCE SCORE CARD
        </Heading>

        <Tabla
          nombreForm="hola"
          data={dataNueva}
          onDelete={deleteItem}
          onEdit={handleEditClick} // Pasa el ID al hacer clic en editar
          onDownloadPDF={onDownloadPDF}
        />
      </Flex>

      {/* Modal con el acordeón */}
      {selectedId && ( // Solo abre el modal si hay un ID seleccionado
        <AccordionModal
          isOpen={isModalOpen}
          id={selectedId} // Pasa el ID seleccionado
          onClose={() => {
            setIsModalOpen(false);
            setSelectedId(null); // Limpia el ID seleccionado al cerrar
          }}
        />
      )}
    </Flex>
  );
};

export default BalanceScoreCard;
