import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FaEdit, FaFilePdf } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
//import {Tipo} from "../Typos/TipoTablaInfoEntrada"

export type tablaInfoEntrada = {
  idInformeRevisionDireccionEntrada: number;
  entrada: string;
  directrices: string;
};

type Props = {
  data?: tablaInfoEntrada[];
};

const TablaFromentradasRevisionDireccion = ({ data }: Props) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple" size={"md"}>
          <Thead>
            <Tr>
              {/** <Th>ID</Th>*/}
              <Th>Código de Documento</Th>
              <Th>Número de Revisión</Th>
              <Th>Fecha de Emisión</Th>
              <Th>Fecha de Revisión</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((item) => (
              <Tr key={item.idInformeRevisionDireccionEntrada}>
                {/** <Td>{item.id}</Td>*/}
                <Td>{item.entrada}</Td>
                <Td>{item.directrices}</Td>
                <Td>
                  <Button colorScheme="gray" m={"5px"}>
                    <FaEdit />
                  </Button>
                  <Button colorScheme="gray" m={"5px"}>
                    <FaFilePdf />
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
    </>
  );
};

export default TablaFromentradasRevisionDireccion;
