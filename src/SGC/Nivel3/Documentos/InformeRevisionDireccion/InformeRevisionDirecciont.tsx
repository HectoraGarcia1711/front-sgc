import { Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import Tabla from "../../Componentes/Tabla";
import axios from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import ModalInformeRevisionDireccion from "./Componentes/ModalInformeRevisionDireccion";
import { useCrud } from "../../../../libs/useCrud";
type Props = {};

export type EncabezadoListado = {
  idInformeRevisionDireccion: number;
  coDocumento: string;
  noRevision: string;
  fechaEmicion: string;
  fechaRevision: string;
};

const queryEncabezado = (): Promise<EncabezadoListado[]> =>
  axios.get("/api/informeRevisionDireccion").then((response) => {
    console.log("Respuesta de la API:", response.data);
    return response.data;
  });

const InformeRevisionDirecciont = (props: Props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["encabezado"],
    queryFn: queryEncabezado,
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

  const dataNueva = data.map((item) => ({
    ...item,
    id: item.idInformeRevisionDireccion,
  }));

  return (
    //este contenedor es para que se quede enmedio considerando todas las coordenadas
    <Flex
      minHeight="calc(100vh - 64px)" // Ajusta '64px' a la altura de tu NavBar
      alignItems="center"
      justifyContent="center"
      p={4}
      flexDirection="column"
    >
      <ModalInformeRevisionDireccion />

      {/**este contenedor es para que la tabla tenga el borde */}
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
          Informe De Revision Por La Dirección
        </Heading>

        <Tabla data={dataNueva} />
      </Flex>
    </Flex>
  );
};

export default InformeRevisionDirecciont;
