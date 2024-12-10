import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
type Props = {
  nameDocument: string;
  ruta: string;
  img?: string;
};

const TarjetaDocumento = ({ nameDocument, ruta, img }: Props) => {
  const navigate = useNavigate();
  return (
    <Card maxW="sm" mt={"20px"} ml={"20px"} mr={"20px"}>
      <CardBody>
        <Image
          src={img}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{nameDocument}</Heading>
          {/* 
          posiblemente se ocupe despues
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          */}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            colorScheme="blue"
            onClick={() => navigate(`/home/Formatos/${ruta}`)}
          >
            Abrir
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default TarjetaDocumento;
