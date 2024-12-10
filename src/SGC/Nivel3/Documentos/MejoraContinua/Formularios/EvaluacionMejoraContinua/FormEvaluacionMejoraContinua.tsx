import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading } from "@chakra-ui/react";
import InputForm from "../../../../../../ComponentesGlobales/InputForm";
import {
FormDataEvaluacionEficienciaMejoraContinua,
schemaEvaluacionEficienciaMejoraContinua
} from "../../Types";

type FormularioProps = {
  setData: React.Dispatch<React.SetStateAction<FormDataEvaluacionEficienciaMejoraContinua | null>>;

};

export const FormEvaluacionMejoraContinua: React.FC<FormularioProps> = ({ setData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataEvaluacionEficienciaMejoraContinua>({
    resolver: zodResolver(schemaEvaluacionEficienciaMejoraContinua),
  });

  const onSubmit: SubmitHandler<FormDataEvaluacionEficienciaMejoraContinua> = (data) => {
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
          name="preguntaSeCumAccPro"
          control={control}
          label="Se  cumplieron las acciones propuestas"
          error={errors.preguntaSeCumAccPro}
        />
        <InputForm
          name="observacion1"
          control={control}
          label="OBSERVACIONES"
          error={errors.observacion1}
        />

        <InputForm
          name="preguntaAunHayAccPen"
          control={control}
          label="Aun hay acciones pendientes de realizar"
          error={errors.preguntaAunHayAccPen}
        />

        <InputForm
          name="observacion2"
          control={control}
          label="OBSERVACIONES"
          error={errors.observacion2}
        />

        <InputForm
          name="preguntaSeReAc"
          control={control}
          label="¿ Se requiere actualizar o modificar algun documento del SGC  para estandarizar y asegurar la mejora implementada?"
          error={errors.preguntaSeReAc}
        />

        <Button type="submit"> Enviar</Button>
        {/* Campo "fechaEmision" */}
      </>
    </form>
  );
};

