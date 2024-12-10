import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading } from "@chakra-ui/react";
import InputForm from "../../../../../ComponentesGlobales/InputForm";
import { FormDataDatosMinutaReunion, schemaDatosMinutaReunion } from "../Types";

type FormularioEncabezadoProps = {
  setDataDatos: React.Dispatch<
    React.SetStateAction<FormDataDatosMinutaReunion[]>
  >;
};

export const FormDatosMinutaReunion: React.FC<FormularioEncabezadoProps> = ({
  setDataDatos,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataDatosMinutaReunion>({
    resolver: zodResolver(schemaDatosMinutaReunion),
  });

  const onSubmit: SubmitHandler<FormDataDatosMinutaReunion> = (data) => {
    //se muestra la data del formulario en este caso seria llamar al custom hook para
    //que envie la data ala base de datos
    try {
      setDataDatos((prev) => (prev ? [...prev, data] : [data])); // Agrega el nuevo registro al arreglo existente
      console.log("Datos creados:", data);
    } catch (error) {
      console.error("Error al crear el encabezado:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
          Datos
        </Heading>

        <InputForm
          name="fecha"
          control={control}
          label="Fecha"
          error={errors.fecha}
          type="date"
        />
        <InputForm
          name="departamento"
          control={control}
          label="Departamento"
          error={errors.departamento}
        />
        <InputForm
          name="asuntoATratar"
          control={control}
          label="Asunto A Tratar"
          error={errors.asuntoATratar}
        />

        <Button type="submit"> Enviar</Button>
        {/* Campo "fechaEmision" */}
      </>
    </form>
  );
};

//export default Formularioencabezado;
