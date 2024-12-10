import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading } from "@chakra-ui/react";
import InputForm from "../../../../../../ComponentesGlobales/InputForm";
import {
FormDataInfoReporteAuditoria,
schemaInfoReporteAuditoria
} from "../../Types";

type FormularioProps = {
  setData: React.Dispatch<React.SetStateAction<FormDataInfoReporteAuditoria | null>>;
};

export const FormInfoReporteAuditoria: React.FC<FormularioProps> = ({ setData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataInfoReporteAuditoria>({
    resolver: zodResolver(schemaInfoReporteAuditoria),
  });

  const onSubmit: SubmitHandler<FormDataInfoReporteAuditoria> = (data) => {
    setData(data);
    console.log(data); // Añade un nuevo objeto al array
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
          Datos
        </Heading>

        <InputForm
          name="procesoAuditado"
          control={control}
          label="Proceso Auditado"
          error={errors.procesoAuditado}
          type="string"
        />
        <InputForm
          name="responSGC"
          control={control}
          label="Responsable de SGC"
          error={errors.responSGC}
          type="string"
        />

        <InputForm
          name="fecha"
          control={control}
          label="Fecha"
          error={errors.fecha}
          type="date"
        />

        <InputForm
          name="noAuditoria"
          control={control}
          label="No. Auditoria"
          error={errors.noAuditoria}
          type="string"
        />

        <InputForm
          name="calificacion"
          control={control}
          label="Calificación"
          error={errors.calificacion}
          type="string"
        />

        <Button type="submit"> Enviar</Button>
        {/* Campo "fechaEmision" */}
      </>
    </form>
  );
};