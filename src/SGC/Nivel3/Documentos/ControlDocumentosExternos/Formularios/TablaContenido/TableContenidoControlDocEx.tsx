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
import { FormDataTablaConDocEx } from "../../Types";
import { FaEdit } from "react-icons/fa";
type Props = {
  data: FormDataTablaConDocEx[];
};

const TableContenidoControlDocEx: React.FC<Props> = ({ data }: Props) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              {/** <Th>ID</Th>*/}
              <Th>No.</Th>
              <Th>EXTERNO</Th>
              <Th>CÓDIGO</Th>
              <Th>NOMBRE DEL DOCUMENTO</Th>
              <Th>REVISIÓN </Th>
              <Th>FECHA DE EMISIÓN</Th>
              <Th>FECHA DE REVISIÓN</Th>
              <Th>FECHA DE ULTIMO CAMBIO</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.numero}>
                {/** <Td>{item.id}</Td>*/}
                <Td>{item.numero}</Td>
                <Td>{item.externo}</Td>
                <Td>{item.codigo}</Td>
                <Td>{item.nombreDocumento}</Td>
                <Td>{item.revision}</Td>
                <Td>{item.fechaEmocion}</Td>
                <Td>{item.fechaRevision}</Td>
                <Td>{item.fechaUltimoCambio}</Td>
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

export default TableContenidoControlDocEx;
