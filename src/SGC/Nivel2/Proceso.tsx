import { Flex, Heading, Spinner, Text, Button, Box } from "@chakra-ui/react";
import axios from "../../libs/axios";
import { FormDataEncabezadoProceso } from "./Types";
import { useCrud } from "../../libs/useCrud";
import TablaPrincipalProcesos from "./Conponentes/TablaPrincipalProcesos";
import React, { useState } from "react";

import Multistep from "./Conponentes/Formencabezado";
import DrawerOverlayReutilizable from "../../ComponentesGlobales/DrawerOverlayReutilizable";
import { Ejemplo1 } from "../../ComponentesGlobales/Ejemplo1";

// Función para obtener datos paginados
const queryEncabezadoPage = async (
  page: number,
  size: number = 5
): Promise<{
  content: FormDataEncabezadoProceso[];
  totalPages: number;
  totalElements: number;
}> => {
  const response = await axios.get(
    `/enproceso/entity?pageNumber=${page}&pageSize=${size}`
  );
  return response.data;
};

// Función para eliminar un encabezado
const deleteEncabezado = async (id: string): Promise<void> => {
  await axios.delete(`/enproceso/${id}`);
};

const Proceso = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [pageSize] = React.useState(5);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedProcess, setSelectedProcess] = useState<any | null>(null);

  const {
    paginatedItems: data,
    totalPages,
    isLoading,
    error,
    deleteItem,
    setPaginatedParams,
  } = useCrud<FormDataEncabezadoProceso>({
    queryKey: ["Proceso"],
    getPaginated: queryEncabezadoPage,
    createItem: () =>
      Promise.resolve({
        fechaElaboracion: "",
        fechaEdicion: "",
        noRevision: "",
        coDocumento: "",
        nombreProceso: "",
        coPie: "",
      }),
    updateItem: () =>
      Promise.resolve({
        fechaElaboracion: "",
        fechaEdicion: "",
        noRevision: "",
        coDocumento: "",
        nombreProceso: "",
        coPie: "",
      }),
    deleteItem: deleteEncabezado,
  });

  React.useEffect(() => {
    //console.log("Actualizando parámetros de paginación en Proceso");
    setPaginatedParams(currentPage, pageSize);
  }, [currentPage, pageSize]); // Corroborar que afecte correctamente por cambios.
  if (isLoading) {
    //console.log("Cargando datos...");
    return (
      <Flex alignItems="center" justifyContent="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) {
    //console.error("Error al cargar los datos:", error);
    return (
      <Flex alignItems="center" justifyContent="center" height="100vh">
        <Text color="red.500">Error al cargar los datos.</Text>
      </Flex>
    );
  }

  //console.log("Datos cargados:", data);

  if (!data || data.length === 0) {
    return (
      <Flex alignItems="center" justifyContent="center" height="100vh">
        <Text>No hay datos disponibles.</Text>
      </Flex>
    );
  }

  const handleViewDetails = async (id: string) => {
    try {
      const response = await axios.get(`/enproceso/${id}`);
      setSelectedProcess(response.data);
      setDrawerOpen(true);
    } catch (error) {
      console.error("Error fetching process details:", error);
    }
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedProcess(null);
  };

  const handlePageChange = (newPage: number) => {
    //console.log("Intentando cambiar a la página:", newPage);
    if (totalPages && newPage >= 0 && newPage < totalPages) {
      //  console.log(
      //    "Cambio de página permitido, estableciendo nueva página:",
      //    newPage
      //  );
      setCurrentPage(newPage);
    } else {
      // console.log("Cambio de página no permitido");
    }
  };
  const dataMapped = data.map((item) => ({
    id: String(item.idEnProceso), // Adaptando al id esperado en TablaPrincipalProcesos
    fechaElaboracion: item.fechaElaboracion,
    fechaEdicion: item.fechaEdicion,
    noRevision: item.noRevision,
    coDocumento: item.coDocumento,
    nombreProceso: item.nombreProceso,
    coPie: item.coPie,
  }));

  //console.log("Datos mapeados para TablaPrincipalProcesos:", dataMapped);

  return (
    <Flex
      minHeight="calc(100vh - 64px)"
      alignItems="center"
      justifyContent="center"
      p={4}
      flexDirection="column"
    >
      <Ejemplo1
        drawerTitle="Guardar Proceso"
        buttonText="Crear Nuevo Proceso"
        drawerBody={
          <>
            <Multistep />
          </>
        }
        size="xl"
      />
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
        Procesos
      </Heading>
      <TablaPrincipalProcesos
        onViewDetails={handleViewDetails}
        data={dataMapped}
        onDelete={deleteItem}
      />
      {selectedProcess && (
        <DrawerOverlayReutilizable
          drawerTitle={`Proceso: ${selectedProcess.nombreProceso}`}
          drawerBody={
            <Box>
              <Text>
                <b>Código:</b> {selectedProcess.coDocumento}
              </Text>
              <Text>
                <b>Fecha Elaboración:</b> {selectedProcess.fechaElaboracion}
              </Text>
              <Text>
                <b>Objetivo:</b> {selectedProcess.objetivoProceso.contenido}
              </Text>
              {/* Renderiza más campos según sea necesario */}
            </Box>
          }
          isOpen={isDrawerOpen}
          onClose={handleCloseDrawer}
          size="xl"
        />
      )}

      <Flex justifyContent="space-between" mt={4}>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          isDisabled={currentPage === 0 || totalPages === undefined}
        >
          Anterior
        </Button>
        <Text>
          Página {currentPage + 1} de {totalPages ?? "-"}
        </Text>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          isDisabled={
            totalPages === undefined || currentPage + 1 >= (totalPages ?? 1)
          }
        >
          Siguiente
        </Button>
      </Flex>
    </Flex>
  );
};

export default Proceso;

/*

import { Flex, Heading, Spinner, Text, Button } from "@chakra-ui/react";
import axios from "../../libs/axios";
import { FormDataEncabezadoProceso } from "./Types";
import { useCrud } from "../../libs/useCrud";
import TablaPrincipalProcesos from "./Conponentes/TablaPrincipalProcesos";
import React from "react";
import { ModalProceso } from "./Conponentes/ModalProceso";
import { DrawerOverlayReutilizable } from "../../ComponentesGlobales";
import Multistep from "./Conponentes/Formencabezado";

// Función para obtener datos paginados
const queryEncabezadoPage = async (
  page: number,
  size: number = 5
): Promise<{
  content: FormDataEncabezadoProceso[];
  totalPages: number;
  totalElements: number;
}> => {
  const response = await axios.get(
    `/enproceso/entity?pageNumber=${page}&pageSize=${size}`
  );
  return response.data;
};

// Función para eliminar un encabezado
const deleteEncabezado = async (id: string): Promise<void> => {
  await axios.delete(`/enproceso/${id}`);
};

const Proceso = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [pageSize] = React.useState(5);

  const {
    paginatedItems: data,
    totalPages,
    isLoading,
    error,
    deleteItem,
    setPaginatedParams,
  } = useCrud<FormDataEncabezadoProceso>({
    queryKey: ["Proceso"],
    getPaginated: queryEncabezadoPage,
    createItem: () =>
      Promise.resolve({
        fechaElaboracion: "",
        fechaEdicion: "",
        noRevision: "",
        coDocumento: "",
        nombreProceso: "",
        coPie: "",
      }),
    updateItem: () =>
      Promise.resolve({
        fechaElaboracion: "",
        fechaEdicion: "",
        noRevision: "",
        coDocumento: "",
        nombreProceso: "",
        coPie: "",
      }),
    deleteItem: deleteEncabezado,
  });

  React.useEffect(() => {
    //console.log("Actualizando parámetros de paginación en Proceso");
    setPaginatedParams(currentPage, pageSize);
  }, [currentPage, pageSize]); // Corroborar que afecte correctamente por cambios.
  if (isLoading) {
    //console.log("Cargando datos...");
    return (
      <Flex alignItems="center" justifyContent="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) {
    //console.error("Error al cargar los datos:", error);
    return (
      <Flex alignItems="center" justifyContent="center" height="100vh">
        <Text color="red.500">Error al cargar los datos.</Text>
      </Flex>
    );
  }

  //console.log("Datos cargados:", data);

  if (!data || data.length === 0) {
    return (
      <Flex alignItems="center" justifyContent="center" height="100vh">
        <Text>No hay datos disponibles.</Text>
      </Flex>
    );
  }

  const handlePageChange = (newPage: number) => {
    //console.log("Intentando cambiar a la página:", newPage);
    if (totalPages && newPage >= 0 && newPage < totalPages) {
      //  console.log(
      //    "Cambio de página permitido, estableciendo nueva página:",
      //    newPage
      //  );
      setCurrentPage(newPage);
    } else {
      // console.log("Cambio de página no permitido");
    }
  };
  const dataMapped = data.map((item) => ({
    id: String(item.idEnProceso), // Adaptando al id esperado en TablaPrincipalProcesos
    fechaElaboracion: item.fechaElaboracion,
    fechaEdicion: item.fechaEdicion,
    noRevision: item.noRevision,
    coDocumento: item.coDocumento,
    nombreProceso: item.nombreProceso,
    coPie: item.coPie,
  }));

  //console.log("Datos mapeados para TablaPrincipalProcesos:", dataMapped);

  return (
    <Flex
      minHeight="calc(100vh - 64px)"
      alignItems="center"
      justifyContent="center"
      p={4}
      flexDirection="column"
    >
      <DrawerOverlayReutilizable
        drawerTitle="Guardar Proceso"
        buttonText="Crear Nuevo Proceso"
        drawerBody={
          <>
            <Multistep />
          </>
        }
        size="xl"
      />
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
        Procesos
      </Heading>
      <TablaPrincipalProcesos
        nombreForm={"tabla"}
        data={dataMapped}
        onDelete={deleteItem}
      />
      <Flex justifyContent="space-between" mt={4}>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          isDisabled={currentPage === 0 || totalPages === undefined}
        >
          Anterior
        </Button>
        <Text>
          Página {currentPage + 1} de {totalPages ?? "-"}
        </Text>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          isDisabled={
            totalPages === undefined || currentPage + 1 >= (totalPages ?? 1)
          }
        >
          Siguiente
        </Button>
      </Flex>
    </Flex>
  );
};

export default Proceso;
*/
