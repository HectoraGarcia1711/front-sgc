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
  import { FormDataTablaMejoraContinua } from "../../Types";
  
  type Props = {
    data: FormDataTablaMejoraContinua[];
  };
  
  const TableTablaMejoraContinua : React.FC<Props> = ({ data }) => {
    return (
      <Box width="100%" maxWidth="1100px" overflowX="auto">
        <TableContainer>
          <Table variant="simple" size={"md"}>
            <Thead>
              <Tr>
                {/** <Th>ID</Th>*/}
                <Th>¿ Qué se va hacer ?</Th>
                <Th>Meta esperada</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => (
                <Tr key={item.queSeVaHacer}>
                  {/** <Td>{item.id}</Td>*/}
                  <Td>{item.queSeVaHacer}</Td>
                  <Td>{item.metaEsperada}</Td>
  
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
  
  export default TableTablaMejoraContinua;