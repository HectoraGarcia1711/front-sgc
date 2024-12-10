import { Flex, Spinner, Text, Heading } from "@chakra-ui/react";
import axios from "../../../../libs/axios";
import { useCrud } from "../../../../libs/useCrud";
import Tabla from "../../Componentes/Tabla";
import FormModalDistribucionDocumentos from "./FormModalDistribucionDocumentos";
import { FormDataEncabezado } from "./Types";
import { createEncabezadoDisDocu } from "./Apis/ApiencabezadoDistribucionDocumento";

const queryEncabezado = async (): Promise<FormDataEncabezado[]> =>
  (await axios.get("/api/listadoDistribucionDocumentos")).data;

const deleteEncabezado = async (id: string): Promise<void> =>
  await axios.delete(`/api/listadoDistribucionDocumentos/${id}`);

const onDownloadPDF = async (id: string) => {
  try {
    const response = await axios.get(
      `/api/listadoDistribucionDocumentos/reporte/pdf/${id}`,
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

const ListadoDistribucionDocumentos = () => {
  const {
    items: data,
    isLoading,
    error,
    deleteItem,
  } = useCrud<FormDataEncabezado>({
    queryKey: ["encabezadoLisDisDoc"],
    getAll: queryEncabezado,
    //createItem: () => Promise.resolve({}), // Dejar vacío si no se usa en este componente
    //updateItem: () => Promise.resolve({}), // Dejar vacío si no se usa en este componente
    createItem: createEncabezadoDisDocu, // Utiliza la función real para crear registros
    updateItem: () =>
      Promise.resolve({
        coDocumento: "",
        noRevision: "",
        fechaEmicion: "",
        fechaRevision: "",
        idListadoDistribucionDocumentos: undefined,
      }), // Valor ficticio
    deleteItem: deleteEncabezado,
  });

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

  // Asigna `id` usando `idListadoDistribucionDocumentos` y lo convierte a string
  const dataNueva = data.map((item) => ({
    ...item,
    id: String(item.idListadoDistribucionDocumentos),
  }));

  return (
    <Flex
      minHeight="calc(100vh - 64px)"
      alignItems="center"
      justifyContent="center"
      p={4}
      flexDirection="column"
    >
      <FormModalDistribucionDocumentos />

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
          Listado De Distribución De Documentos
        </Heading>

        <Tabla
          nombreForm="hola"
          data={dataNueva}
          onDelete={deleteItem}
          onDownloadPDF={onDownloadPDF} // Pasar onDownloadPDF a Tabla
        />
      </Flex>
    </Flex>
  );
};

export default ListadoDistribucionDocumentos;
