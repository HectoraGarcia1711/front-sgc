import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading } from "@chakra-ui/react";
import InputForm from "../../../../../ComponentesGlobales/InputForm";
import {
  FormDataDatosListaAsistencia,
  schemaDatosListaAsistencia,
} from "../Types";

type FormularioProps = {
  setData: React.Dispatch<React.SetStateAction<FormDataDatosListaAsistencia | null>>;

};

export const FormDatosListaAsistencia: React.FC<FormularioProps> = ({ setData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataDatosListaAsistencia>({
    resolver: zodResolver(schemaDatosListaAsistencia),
  });

  const onSubmit: SubmitHandler<FormDataDatosListaAsistencia> = (data) => {
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
          name="departamentoCoordinador"
          control={control}
          label="Departamento Coordinador"
          error={errors.departamentoCoordinador}
        />
        <InputForm
          name="responable"
          control={control}
          label="Responable"
          error={errors.responable}
          type="string"
        />

        <InputForm
          name="titulo"
          control={control}
          label="Titulo"
          error={errors.titulo}
          type="String"
        />

        <InputForm
          name="fecha"
          control={control}
          label="Fecha"
          error={errors.fecha}
          type="date"
        />

        <Button type="submit"> Enviar</Button>
        {/* Campo "fechaEmision" */}
      </>
    </form>
  );
};


//export default Formularioencabezado;

