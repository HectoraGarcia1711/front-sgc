import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading } from "@chakra-ui/react";
import InputForm from "../../../../../ComponentesGlobales/InputForm";
import { FormDataDatosGeDNC, schemaDatosGeDNC } from "../Type";

type FormularioProps = {
  setData: React.Dispatch<React.SetStateAction<FormDataDatosGeDNC | null>>;
};

export const FormDatosGeDNC: React.FC<FormularioProps> = ({ setData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataDatosGeDNC>({
    resolver: zodResolver(schemaDatosGeDNC),
  });

  const onSubmit: SubmitHandler<FormDataDatosGeDNC> = (data) => {
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
          name="antiguedadEmpresa"
          control={control}
          label="ANTIGÜEDAD EN LA EMPRESA"
          error={errors.antiguedadEmpresa}
          type="String"
        />

        <InputForm
          name="antiguedadPuesto"
          control={control}
          label="ANTIGÜEDAD EN EL PUESTO"
          error={errors.antiguedadPuesto}
        />
        <InputForm
          name="escolaridad"
          control={control}
          label="ESCOLARIDAD"
          error={errors.escolaridad}
        />

        <Button type="submit"> Enviar</Button>
        {/* Campo "fechaEmision" */}
      </>
    </form>
  );
};

//export default Formularioencabezado;
