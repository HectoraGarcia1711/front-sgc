import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading } from "@chakra-ui/react";
import InputForm from "../../../../../../ComponentesGlobales/InputForm";
import {
FormDataDatosMejoraContinua,
schemaDatosMejoraContinua
} from "../../Types";

type FormularioProps = {
  setData: React.Dispatch<React.SetStateAction<FormDataDatosMejoraContinua | null>>;

};

export const FormDatosMejoraContinua: React.FC<FormularioProps> = ({ setData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataDatosMejoraContinua>({
    resolver: zodResolver(schemaDatosMejoraContinua),
  });

  const onSubmit: SubmitHandler<FormDataDatosMejoraContinua> = (data) => {
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
          name="alcance"
          control={control}
          label="Alcance"
          error={errors.alcance}
        />
        <InputForm
          name="numeroControl"
          control={control}
          label="No. Control"
          error={errors.numeroControl}
        />

        <InputForm
          name="objetivo"
          control={control}
          label="Objetivo"
          error={errors.objetivo}
        />

        <InputForm
          name="origenMejora"
          control={control}
          label="Origen de la mejora"
          error={errors.origenMejora}
        />

        <InputForm
          name="descripcionAccion"
          control={control}
          label="Descripcion de  la accion"
          error={errors.descripcionAccion}
        />

        <InputForm
          name="descriocion"
          control={control}
          label="Descripcion"
          error={errors.descriocion}
        />

        <InputForm
          name="cuantificacion"
          control={control}
          label="Cuantificación de mejora"
          error={errors.cuantificacion}
        />

        <InputForm
          name="periodo"
          control={control}
          label="Periodo"
          error={errors.periodo}
        />
        <InputForm
          name="tiempoInicial"
          control={control}
          label="Tiempo Inicial"
          error={errors.tiempoInicial}
        />

        <InputForm
          name="tiempoFinal"
          control={control}
          label="Tiempo Final"
          error={errors.tiempoFinal}
        />

        <InputForm
          name="resultado"
          control={control}
          label="Resultado"
          error={errors.resultado}
        />
        <Button type="submit"> Enviar</Button>
        {/* Campo "fechaEmision" */}
      </>
    </form>
  );
};

