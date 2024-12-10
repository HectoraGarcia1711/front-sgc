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

import { FormDataTablaProAnuCapa } from "../../Type";
import { FaEdit } from "react-icons/fa";

type Props = {
  data: FormDataTablaProAnuCapa[];
  nombreForm: string;
};

const TablaProAnuCapa = ({ data }: Props) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              {/** <Th>ID</Th>*/}
              <Th>TITULO DEL CURSO</Th>
              <Th>PERSONAL/DEPARTAMENTO OBJETIVO</Th>
              <Th>TIPO</Th>
              <Th>CAPACITADOR</Th>
              <Th>DURACIÓN</Th>
              <Th>ESTATUS</Th>
              <Th>FECHA</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.titulo}>
                {/** <Td>{item.id}</Td>*/}
                <Td>{item.titulo}</Td>
                <Td>{item.perDepartamento}</Td>
                <Td>{item.tipo}</Td>
                <Td>{item.capacitador}</Td>
                <Td>{item.duracion}</Td>
                <Td>{item.estatus}</Td>
                <Td>{item.fecha}</Td>
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

export default TablaProAnuCapa;
