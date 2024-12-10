import { Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import Tabla from "../../Componentes/Tabla";
import axios from "../../../../libs/axios";
import { FormDataEncabezadoSolicitudPersonal } from "./Types";
import { useCrud } from "../../../../libs/useCrud";
import ModalSolicitudPersonal, { createEncabezadoListaAsistencia } from "./ModalSolicitudPersonal";

const queryEncabezado = async (): Promise<
  FormDataEncabezadoSolicitudPersonal[]
> => (await axios.get("/api/solicitudPersonal")).data;

const deleteEncabezado = async (id: string): Promise<void> =>
  await axios.delete(`/api/solicitudPersonal/${id}`);

const onDownloadPDF = async (id: string) => {
  try {
    const response = await axios.get(`/api/solicitudPersonal/reporte/pdf/${id}`, {
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(response.data);
    window.open(url, "_blank");
  } catch (error) {
    console.error("Error al abrir el PDF:", error);
  }
};

const SolicitudPersonal = () => {
  const {
    items: data,
    isLoading,
    error,
    deleteItem,
  } = useCrud<FormDataEncabezadoSolicitudPersonal>({
    queryKey: ["SolicitudPersonal"],
    getAll: queryEncabezado,
    //createItem: () => Promise.resolve({}), // Dejar vacío si no se usa en este componente
    //updateItem: () => Promise.resolve({}), // Dejar vacío si no se usa en este componente
    createItem: createEncabezadoListaAsistencia, // Utiliza la función real para crear registros
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
    id: String(item.idSolicitudPersonal),
  }));

  return (
    <Flex
      minHeight="calc(100vh - 64px)"
      alignItems="center"
      justifyContent="center"
      p={4}
      flexDirection="column"
    >
      <ModalSolicitudPersonal />

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
          LISTA DE ASISTENCIA
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

export default SolicitudPersonal;