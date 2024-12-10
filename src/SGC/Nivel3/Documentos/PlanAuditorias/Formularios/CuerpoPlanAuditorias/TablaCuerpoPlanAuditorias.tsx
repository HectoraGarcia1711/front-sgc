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
import { FormDataCuerpoPlanAuditoria } from "../../Types";

type Props = {
  data: FormDataCuerpoPlanAuditoria[];
};

const TablaCuerpoPlanAuditorias: React.FC<Props> = ({ data }) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              {/** <Th>ID</Th>*/}
              <Th>Inicio</Th>
              <Th>Término</Th>
              <Th>Proceso a auditar</Th>
              <Th>Requisito de la norma</Th>
              <Th>ContraparteAuditada</Th>
              <Th>Auditor</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.auditor}>
                {/** <Td>{item.id}</Td>*/}
                <Td>{item.inicio}</Td>
                <Td>{item.termino}</Td>
                <Td>{item.procesoAuditar}</Td>
                <Td>{item.requisitosNorma}</Td>
                <Td>{item.contraparteAuditada}</Td>
                <Td>{item.auditor}</Td>

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

export default TablaCuerpoPlanAuditorias;
