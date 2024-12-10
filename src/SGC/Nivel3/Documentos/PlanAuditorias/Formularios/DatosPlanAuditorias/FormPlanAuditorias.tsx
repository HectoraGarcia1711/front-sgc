import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading } from "@chakra-ui/react";
import InputForm from "../../../../../../ComponentesGlobales/InputForm";
import {
  FormDataDatosPlanAuditoria,
  schemaDatosPlanAuditoria,
} from "../../Types";

type FormularioProps = {
  setData: React.Dispatch<React.SetStateAction<FormDataDatosPlanAuditoria[]>>;
};

export const FormPlanAuditorias: React.FC<FormularioProps> = ({ setData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataDatosPlanAuditoria>({
    resolver: zodResolver(schemaDatosPlanAuditoria),
  });

  const onSubmit: SubmitHandler<FormDataDatosPlanAuditoria> = (data) => {
    setData((prev) => [...prev, data]);
    console.log(data); // Añade un nuevo objeto al array
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
          Datos
        </Heading>

        <InputForm
          name="objetivoAuditoria"
          control={control}
          label="Objetivo de la Auditoria"
          error={errors.objetivoAuditoria}
          type="string"
        />
        <InputForm
          name="alcanceAuditoria"
          control={control}
          label="Alcance de la Auditoria"
          error={errors.alcanceAuditoria}
          type="string"
        />

        <InputForm
          name="criteriosAuditorias"
          control={control}
          label="Criterios de Auditorias"
          error={errors.criteriosAuditorias}
          type="string"
        />

        <InputForm
          name="fechaElaboracion"
          control={control}
          label="Fecha de Elaboración"
          error={errors.fechaElaboracion}
          type="date"
        />

        <InputForm
          name="noAuditoria"
          control={control}
          label="No. de Auditoria"
          error={errors.noAuditoria}
          type="string"
        />

        <InputForm
          name="fechaInicio"
          control={control}
          label="Fecha de Inicio"
          error={errors.fechaInicio}
          type="date"
        />

        <InputForm
          name="fechaTermino"
          control={control}
          label="Fecha de Término"
          error={errors.fechaTermino}
          type="date"
        />

        <Button type="submit"> Enviar</Button>
        {/* Campo "fechaEmision" */}
      </>
    </form>
  );
};

//export default Formularioencabezado;
