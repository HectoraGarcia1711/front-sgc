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
import { FormDataModificacionesConDocEx } from "../../Types";
import { FaEdit } from "react-icons/fa";
type Props = {
  data: FormDataModificacionesConDocEx[];
};

const TableModificacionesControlDocEx: React.FC<Props> = ({ data }: Props) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              {/** <Th>ID</Th>*/}
              <Th>Fecha de cambio</Th>
              <Th>Ed/Rev</Th>
              <Th>Cambios realizados a la versión anterior</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.edRev}>
                {/** <Td>{item.id}</Td>*/}
                <Td>{item.fechaCambio}</Td>
                <Td>{item.edRev}</Td>
                <Td>{item.cambiosRealizadosVerAn}</Td>
                <Td>
                  <Button colorScheme="gray" m={"5px"}>
                    <FaEdit />
                  </Button>
                  <Button>eliminar</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableModificacionesControlDocEx;
