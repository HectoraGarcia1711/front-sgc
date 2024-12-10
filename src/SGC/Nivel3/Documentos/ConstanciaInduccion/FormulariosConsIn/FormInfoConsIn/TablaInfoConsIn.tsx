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

import { FormDataInfoConstanciaInduccion } from "../../Type";
import { FaEdit } from "react-icons/fa";

type Props = {
  data: FormDataInfoConstanciaInduccion[];
  nombreForm: string;
};

const TablaInfoConsIn = ({ data }: Props) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              {/** <Th>ID</Th>*/}
              <Th>INFORMACIÓN</Th>
              <Th>RESPUESTA</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.info}>
                {/** <Td>{item.id}</Td>*/}
                <Td>{item.info}</Td>
                <Td>{item.respuesta}</Td>
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

export default TablaInfoConsIn;
