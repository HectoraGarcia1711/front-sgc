import { VStack, Link, StackDivider, Heading, Text } from "@chakra-ui/react";

interface Objetivo {
  objetivo: string;
}

type Props = {
  selectedObjetivo: Objetivo;
  setSelectedObjetivo: (objetivo: Objetivo) => void;
  objetivosList: Objetivo[]; // Recibe los objetivos como prop
};

const selectedProps = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
};

const BarraBSC: React.FC<Props> = ({
  selectedObjetivo,
  setSelectedObjetivo,
  objetivosList,
}) => {
  return (
    <>
      <Heading color={"blue.400"} fontSize={25} fontWeight={"bold"} mb={4}>
        INDICADOR
      </Heading>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {objetivosList.map((item, index) => (
          <Link
            onClick={() => setSelectedObjetivo(item)}
            key={index}
            px={2}
            py={1}
            borderRadius={5}
            _hover={{ textDecoration: "none" }}
            color="blue.500"
            {...(selectedObjetivo.objetivo === item.objetivo && selectedProps)}
          >
            {item.objetivo}
          </Link>
        ))}
      </VStack>
    </>
  );
};

export default BarraBSC;
