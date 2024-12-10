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
import { FormDataTablaSeAcMeCoPre } from "../../Types";
import { FaEdit } from "react-icons/fa";
type Props = {
  data: FormDataTablaSeAcMeCoPre[];
};

const TablaSeAcMeCoPre: React.FC<Props> = ({ data }: Props) => {
  return (
    <Box width="100%" maxWidth="1100px" overflowX="auto">
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              {/** <Th>ID</Th>*/}
              <Th>Hallazgo</Th>
              <Th>Evidencias Observadas</Th>
              <Th>Responsable del Area e Implantacion</Th>
              <Th>Fecha de Inicio</Th>
              <Th>Fecha de Termino</Th>
              <Th>
                Revisión /Valoración de la efectividad de las acciones
                implenentadas
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.avance}>
                {/** <Td>{item.id}</Td>*/}
                <Td>{item.hallazgo}</Td>
                <Td>{item.evidenciasObservadas}</Td>
                <Td>{item.responsableAreaImplantacion}</Td>
                <Td>{item.fechaInicio}</Td>
                <Td>{item.fechaTermino}</Td>
                <Td>{item.revisionValoracion}</Td>
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

export default TablaSeAcMeCoPre;
