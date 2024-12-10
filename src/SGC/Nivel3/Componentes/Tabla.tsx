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

import { Encabezado } from "./Typos";
import { FaEdit } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import BottonEliminar from "../../../ComponentesGlobales/BottonEliminar";

type Props = {
  data: Encabezado[];
  nombreForm: string;
  onDelete: (id: string) => Promise<void>;
  onDownloadPDF: (id: string) => void; // Prop para descargar PDF
  onEdit?: (id: string) => void; // Prop opcional para abrir el modal de edición
};

const Tabla = ({ data, onDelete, onDownloadPDF, onEdit }: Props) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              <Th>Código de Documento</Th>
              <Th>Número de Revisión</Th>
              <Th>Fecha de Emisión</Th>
              <Th>Fecha de Revisión</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.id}>
                <Td>{item.coDocumento}</Td>
                <Td>{item.noRevision}</Td>
                <Td>{item.fechaEmicion}</Td>
                <Td>{item.fechaRevision}</Td>
                <Td>
                  {/* Verifica si `onEdit` está definido antes de renderizar el botón */}
                  {onEdit && (
                    <Button
                      colorScheme="gray"
                      m={"5px"}
                      onClick={() => onEdit(item.id)}
                    >
                      <FaEdit />
                    </Button>
                  )}
                  <Button
                    colorScheme="gray"
                    m={"5px"}
                    onClick={() => onDownloadPDF(item.id)} // Llama a onDownloadPDF con el id
                  >
                    <FaFilePdf />
                  </Button>
                  <BottonEliminar id={item.id} onDelete={onDelete} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Tabla;
