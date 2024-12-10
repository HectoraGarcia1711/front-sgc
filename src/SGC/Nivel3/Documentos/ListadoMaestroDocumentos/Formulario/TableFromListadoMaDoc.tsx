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

import {
  FormDataProcesosLisMaDoc,
  FormDataFormatosLisMaDoc,
  FormDataAnexosLisMaDoc,
} from "../Typos";
import { FaEdit } from "react-icons/fa";
type Props = {
  data:
    | FormDataProcesosLisMaDoc[]
    | FormDataFormatosLisMaDoc[]
    | FormDataAnexosLisMaDoc[];
};

const TablaFromListadoMaDoc: React.FC<Props> = ({ data }: Props) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              {/** <Th>ID</Th>*/}
              <Th>Nombre del Documento</Th>
              <Th>Departamento</Th>
              <Th>Responsable</Th>
              <Th>No. Revision</Th>
              <Th>Elaborado</Th>
              <Th>Revisado</Th>
              <Th>Modificado</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.codigo}>
                {/** <Td>{item.id}</Td>*/}
                <Td>{item.nombredocumento}</Td>
                <Td>{item.departamento}</Td>
                <Td>{item.responsable}</Td>
                <Td>{item.noRevision}</Td>
                <Td>{item.elaborado}</Td>
                <Td>{item.revisado}</Td>
                <Td>{item.modificado}</Td>
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

export default TablaFromListadoMaDoc;
