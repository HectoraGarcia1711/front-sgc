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
import { FormDataPartesInteresadasBSC } from "../../Types";

type Props = {
  data: FormDataPartesInteresadasBSC[];
  onEdit: (record: FormDataPartesInteresadasBSC) => void;
  onDelete: (nombre: string) => void;
};

const TablaPartesInBSC: React.FC<Props> = ({ data, onEdit, onDelete }) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th>Interes</Th>
              <Th>Influencia</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.tempId}>
                <Td>{item.nombre}</Td>
                <Td>{item.interes}</Td>
                <Td>{item.influencia}</Td>
                <Td>
                  <Button
                    colorScheme="gray"
                    m={"5px"}
                    onClick={() => onEdit(item)}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    colorScheme="gray"
                    m={"5px"}
                    onClick={() => onDelete(item.nombre)}
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

export default TablaPartesInBSC;
