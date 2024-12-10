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

type datos1 = {
  info: string;
};
type Props = {
  data: datos1[];
  nombreColum: string;
};
const TablaGeneralPuntosMinutaReunion: React.FC<Props> = ({
  data,
  nombreColum,
}: Props) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              {/** <Th>ID</Th>*/}
              <Th>{nombreColum}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.info}>
                {/** <Td>{item.id}</Td>*/}
                <Td>{item.info}</Td>
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

export default TablaGeneralPuntosMinutaReunion;
