import { Button } from "@chakra-ui/react";
import FormEntradasrevisionDireccion from "./FormEntradasrevisionDireccion";
import TablaFromentradasRevisionDireccion from "./TablaFromentradasRevisionDireccion";

type Props = {};

const FormConjunto = (props: Props) => {
  return (
    <>
      <Button onClick={() => <FormEntradasrevisionDireccion />}>
        Registrar Nuevo
      </Button>

      <TablaFromentradasRevisionDireccion />
    </>
  );
};

export default FormConjunto;
