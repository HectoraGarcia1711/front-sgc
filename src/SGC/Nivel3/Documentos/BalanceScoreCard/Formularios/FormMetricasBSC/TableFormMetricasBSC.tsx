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
import { RiDeleteBin5Line } from "react-icons/ri";
import { FormDataMetricasBSC } from "../../Types";

type Props = {
  data: FormDataMetricasBSC[];
  onEdit: (record: FormDataMetricasBSC) => void;
  onDelete: (tempId: string) => void;
};

const TableFormMetricasBSC: React.FC<Props> = ({ data, onEdit, onDelete }) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              <Th>Objetivo</Th>
              <Th>Meta</Th>
              <Th>Frecuencia</Th>
              <Th>Responsable</Th>
              <Th>Estado Actual</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.tempId}>
                <Td>{item.objetivo}</Td>
                <Td>{item.meta}</Td>
                <Td>{item.frecuencia}</Td>
                <Td>{item.responsable}</Td>
                <Td>{item.estadoActual}</Td>
                <Td>
                  <Button
                    colorScheme="gray"
                    m={"5px"}
                    onClick={() => onEdit(item)}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    colorScheme="red"
                    m={"5px"}
                    onClick={() => onDelete(item.tempId!)}
                  >
                    <RiDeleteBin5Line />
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

export default TableFormMetricasBSC;
