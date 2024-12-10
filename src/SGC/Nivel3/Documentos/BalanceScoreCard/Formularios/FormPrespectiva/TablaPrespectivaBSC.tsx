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
import { FormDataPrespectivaBSC } from "../../Types";

type Props = {
  data: FormDataPrespectivaBSC[];
  onEdit: (record: FormDataPrespectivaBSC) => void; // Nueva prop para editar
  onDelete: (tempId: string) => void; // Nueva prop para eliminar
};

const TablaPrespectivaBSC: React.FC<Props> = ({ data, onEdit, onDelete }) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              <Th>Prespectiva</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.tempId || item.contenido}>
                <Td>{item.contenido}</Td>
                <Td>
                  <Button
                    colorScheme="gray"
                    m={"5px"}
                    onClick={() => onEdit(item)} // Llama a la función para editar
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    colorScheme="gray"
                    m={"5px"}
                    onClick={() => onDelete(item.tempId!)} // Llama a la función para eliminar
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

export default TablaPrespectivaBSC;
