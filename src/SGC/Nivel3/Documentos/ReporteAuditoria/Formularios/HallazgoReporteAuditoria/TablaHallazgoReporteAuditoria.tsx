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
  import { FormDataHallazgoReporteAuditoria } from "../../Types";
  
  type Props = {
    data: FormDataHallazgoReporteAuditoria[];
  };
  
  const TablaHallazgoReporteAuditoria: React.FC<Props> = ({ data }) => {
    return (
      <Box width="100%" maxWidth="1100px" overflowX="auto">
        <TableContainer>
          <Table variant="simple" size={"md"}>
            <Thead>
              <Tr>
                {/** <Th>ID</Th>*/}
                <Th>Nombre del Participante</Th>
                <Th>Puesto</Th>
                <Th>Firma</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => (
                <Tr key={item.clausulaNorma}>
                  {/** <Td>{item.id}</Td>*/}
                  <Td>{item.clausulaNorma}</Td>
                  <Td>{item.tipoHallazgo}</Td>
                  <Td>{item.comentario}</Td>
  
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
  
  export default TablaHallazgoReporteAuditoria;