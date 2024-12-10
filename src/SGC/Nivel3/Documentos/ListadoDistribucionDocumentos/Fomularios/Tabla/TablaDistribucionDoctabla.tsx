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
import { FormDataDistribucionDocTablaData } from "../../Types";

type Props = {
  data: FormDataDistribucionDocTablaData[];
};

const TablaDistribucionDoctabla: React.FC<Props> = ({ data }) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              {/** <Th>ID</Th>*/}
              <Th>Nombre del Receptor</Th>
              <Th>Puesto</Th>
              <Th>Firma</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.firma}>
                {/** <Td>{item.id}</Td>*/}
                <Td>{item.nombreReceptor}</Td>
                <Td>{item.puesto}</Td>
                <Td>{item.firma}</Td>

                <Td>
                  <Button colorScheme="gray" m={"5px"}>
                    <FaEdit />
                  </Button>
                  <Button colorScheme="gray" m={"5px"}>
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

export default TablaDistribucionDoctabla;
