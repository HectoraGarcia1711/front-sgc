import { Heading } from "@chakra-ui/react";
import InputForm from "../../../../../../ComponentesGlobales/InputForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  entradas: z.string().min(1, "El Codigo es Obligatorio"),
  directrices: z.string().min(1, "El Numero de Revision es Obligatorio"),
});

type FormDataEncabezado = z.infer<typeof schema>;

const FormEntradasrevisionDireccion = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataEncabezado>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormDataEncabezado> = (data) => {
    //se muestra la data del formulario en este caso seria llamar al custom hook para
    //que envie la data ala base de datos
    console.log(data);
  };

  return (
    //<form onSubmit={handleSubmit(onSubmit)}>
    <>
      <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
        Información de entrada
      </Heading>

      <InputForm
        name="Entradas"
        control={control}
        label="Entradas de la revisión por la dirección"
        error={errors.entradas}
        type="string"
      />

      <InputForm
        name="Directrices"
        control={control}
        label="Directrices"
        error={errors.directrices}
        type="string"
      />

      {/* Campo "fechaEmision" */}
    </>
    //</form>
  );
};

export default FormEntradasrevisionDireccion;
