import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading } from "@chakra-ui/react";
import InputForm from "../../../../../ComponentesGlobales/InputForm";
import { FormDataDatosJeInDNC, schemaDatosJeInDNC } from "../Type";

type FormularioProps = {
  setData: React.Dispatch<React.SetStateAction<FormDataDatosJeInDNC | null>>;
};

export const FormDatosJeInDNC: React.FC<FormularioProps> = ({ setData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataDatosJeInDNC>({
    resolver: zodResolver(schemaDatosJeInDNC),
  });

  const onSubmit: SubmitHandler<FormDataDatosJeInDNC> = (data) => {
    setData(data); // Guarda el objeto completo
    console.log("Datos enviados:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
          Datos
        </Heading>

        <InputForm
          name="nombre"
          control={control}
          label="NOMBRE"
          error={errors.nombre}
        />
        <InputForm
          name="puesto"
          control={control}
          label="PUESTO"
          error={errors.puesto}
          type="string"
        />

        <InputForm
          name="area"
          control={control}
          label="ÁREA"
          error={errors.area}
          type="String"
        />

        <InputForm
          name="fecha"
          control={control}
          label="FECHA"
          error={errors.fecha}
          type="Date"
        />

        <Button type="submit"> Enviar</Button>
        {/* Campo "fechaEmision" */}
      </>
    </form>
  );
};

//export default Formularioencabezado;
