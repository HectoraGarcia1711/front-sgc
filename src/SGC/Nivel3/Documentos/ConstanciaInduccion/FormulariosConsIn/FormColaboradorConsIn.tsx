import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading } from "@chakra-ui/react";
import InputForm from "../../../../../ComponentesGlobales/InputForm";
import {
  FormDataColaboradorConstanciaInduccion,
  schemaColaboradorConstanciaInduccion,
} from "../Type";

type FormularioProps = {
  setData: React.Dispatch<
    React.SetStateAction<FormDataColaboradorConstanciaInduccion | null>
  >;
};

export const FormColaboradorConsIn: React.FC<FormularioProps> = ({
  setData,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataColaboradorConstanciaInduccion>({
    resolver: zodResolver(schemaColaboradorConstanciaInduccion),
  });

  const onSubmit: SubmitHandler<FormDataColaboradorConstanciaInduccion> = (
    data
  ) => {
    setData(data); // Guarda el objeto completo
    console.log("Datos enviados:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
          Colaborador
        </Heading>

        <InputForm
          name="nombre"
          control={control}
          label="Nombre"
          error={errors.nombre}
        />
        <InputForm
          name="firma"
          control={control}
          label="Firma"
          error={errors.firma}
          type="string"
        />

        <Button type="submit"> Enviar</Button>
        {/* Campo "fechaEmision" */}
      </>
    </form>
  );
};

//export default Formularioencabezado;
