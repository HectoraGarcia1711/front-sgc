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
import { RiDeleteBin5Line } from "react-icons/ri";

import { FormDataColaboradoresConstanciaInduccion } from "../../Type";
import { FaEdit } from "react-icons/fa";

type Props = {
  data: FormDataColaboradoresConstanciaInduccion[];
  nombreForm: string;
};

const TablaColaboradoresConsIn = ({ data }: Props) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              {/** <Th>ID</Th>*/}
              <Th>NOMBRE</Th>
              <Th>PUESTO</Th>
              <Th>FIRMA</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.nombre}>
                {/** <Td>{item.id}</Td>*/}
                <Td>{item.nombre}</Td>
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

export default TablaColaboradoresConsIn;
