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
import { FormDataPreguntas1DNC } from "../../../Type";

type Props = {
  data: FormDataPreguntas1DNC[];
};

const Tablapreguntas1DNC: React.FC<Props> = ({ data }) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              {/** <Th>ID</Th>*/}
              <Th>
                ¿Qué CONOCIMIENTOS necesitas para HACER mejor tu trabajo? (Lo
                que deberías conocer)
              </Th>
              <Th>
                ¿Por qué consideras que requieres APRENDER esos conocimientos?
              </Th>
              <Th>
                ¿En qué mejorarías tu DESEMPEÑO al capacitarte en dichos
                conocimientos?
              </Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.contenido1}>
                {/** <Td>{item.id}</Td>*/}
                <Td>{item.contenido1}</Td>
                <Td>{item.contenido2}</Td>
                <Td>{item.contenido3}</Td>

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

export default Tablapreguntas1DNC;
