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

import { FormDataTablaLisVerificacion } from "../../Types";
import { FaEdit } from "react-icons/fa";

type Props = {
  data: FormDataTablaLisVerificacion[];
  nombreForm: string;
};

const TablaListaVerificacion = ({ data }: Props) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              {/** <Th>ID</Th>*/}
              <Th>No.</Th>
              <Th>CONTEXTO DE LA ORGANIZACIÓN</Th>
              <Th>MARCADOR</Th>
              <Th>EVIDENCIAS / HALLAZGOS</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.numero}>
                {/** <Td>{item.id}</Td>*/}
                <Td>{item.numero}</Td>
                <Td>{item.contextoOrganizacion}</Td>
                <Td>{item.marcador}</Td>
                <Td>{item.evidenciasAllasgos}</Td>
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

export default TablaListaVerificacion;
