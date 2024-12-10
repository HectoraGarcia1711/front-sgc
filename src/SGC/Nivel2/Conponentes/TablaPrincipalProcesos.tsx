import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { FaEdit } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { GrDocumentOutlook } from "react-icons/gr";
import BottonEliminar from "../../../ComponentesGlobales/BottonEliminar";

type Encabezado = {
  id: string;
  fechaElaboracion: string;
  fechaEdicion: string;
  noRevision: string;
  coDocumento: string;
  nombreProceso: string;
  coPie: string;
};

type Props = {
  data: Encabezado[];
  onDelete: (id: string) => Promise<void>;
  onViewDetails: (id: string) => void; // Nueva prop para ver detalles
};

const TablaPrincipalProcesos = ({ data, onDelete, onViewDetails }: Props) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              <Th>Código de Documento</Th>
              <Th>Número de Revisión</Th>
              <Th>Fecha de Edición</Th>
              <Th>Fecha de Elaboración</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.id}>
                <Td>{item.coDocumento}</Td>
                <Td>{item.noRevision}</Td>
                <Td>{item.fechaEdicion}</Td>
                <Td>{item.fechaElaboracion}</Td>
                <Td>
                  <Button colorScheme="gray" m={"5px"}>
                    <FaEdit />
                  </Button>
                  <Button>
                    <FaFilePdf />
                  </Button>
                  <BottonEliminar id={item.id} onDelete={onDelete} />
                  <Button onClick={() => onViewDetails(item.id)}>
                    <GrDocumentOutlook />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TablaPrincipalProcesos;

/*
import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { FaEdit } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { GrDocumentOutlook } from "react-icons/gr";
import BottonEliminar from "../../../ComponentesGlobales/BottonEliminar";

type Encabezado = {
  id: string;
  fechaElaboracion: string;
  fechaEdicion: string;
  noRevision: string;
  coDocumento: string;
  nombreProceso: string;
  coPie: string;
};

type Props = {
  data: Encabezado[];
  nombreForm: string;
  onDelete: (id: string) => Promise<void>;
};

const TablaPrincipalProcesos = ({ data, onDelete }: Props) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>

              <Th>Código de Documento</Th>
              <Th>Número de Revisión</Th>
              <Th>Fecha de Edicion</Th>
              <Th>Fecha de Elaboración</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.id}>
                // <Td>{item.id}</Td>
                <Td>{item.coDocumento}</Td>
                <Td>{item.noRevision}</Td>
                <Td>{item.fechaEdicion}</Td>
                <Td>{item.fechaElaboracion}</Td>
                <Td>
                  <Button colorScheme="gray" m={"5px"}>
                    <FaEdit />
                  </Button>
                  <Button>
                    <FaFilePdf />
                  </Button>
                  <BottonEliminar id={item.id} onDelete={onDelete} />
                  <Button>
                    <GrDocumentOutlook />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TablaPrincipalProcesos;
*/
