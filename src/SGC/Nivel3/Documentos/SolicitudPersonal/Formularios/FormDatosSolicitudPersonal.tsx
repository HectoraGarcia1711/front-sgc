import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading, Select } from "@chakra-ui/react";
import InputForm from "../../../../../ComponentesGlobales/InputForm";
import {
FormDataDatosSolicitudPersonal,
schemaDatosSolicitudPersonal
} from "../Types";

type FormularioProps = {
  setData: React.Dispatch<React.SetStateAction<FormDataDatosSolicitudPersonal | null>>;

};

export const FormDatosSolicitudPersonal: React.FC<FormularioProps> = ({ setData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataDatosSolicitudPersonal>({
    resolver: zodResolver(schemaDatosSolicitudPersonal),
  });

  const onSubmit: SubmitHandler<FormDataDatosSolicitudPersonal> = (data) => {
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
          label="NOMBRE DEL SOLICITANTE "
          error={errors.nombre}
        />
        <InputForm
          name="cargo"
          control={control}
          label="Cargo"
          error={errors.cargo}
          type="string"
        />

        <InputForm
          name="areaActual"
          control={control}
          label="Area Actual"
          error={errors.areaActual}
          type="String"
        />

        <InputForm
          name="fechaSolicitud"
          control={control}
          label="Fecha De Solicitud"
          error={errors.fechaSolicitud}
          type="date"
        />

        <InputForm
          name="puestoSolicitado"
          control={control}
          label="Puesto Solicitado"
          error={errors.puestoSolicitado}
          type="String"
        />

        <InputForm
          name="areaNueva"
          control={control}
          label="Area Solicitada "
          error={errors.areaNueva}
          type="String"
        />
        <InputForm
          name="numeroVacantes"
          control={control}
          label="Numero de Vacantes"
          error={errors.numeroVacantes}
          type="String"
        />

        <InputForm
          name="fechaPrevista"
          control={control}
          label="FECHA PREVISTA DE INICIO DE LABORES"
          error={errors.fechaPrevista}
          type="date"
        />

<InputForm
          name="motivotipoContrato"
          control={control}
          label="MOTIVO DE LA SOLICITUD Y TIPO DE CONTRATO"
          error={errors.motivotipoContrato}
        />


        {/**
         <Select mt={4} mb={4} placeholder='MOTIVO DE LA SOLICITUD Y TIPO DE CONTRATO'>
  <option value='option1'>Vacante abierta</option>
  <option value='option2'>Por expansión</option>
  <option value='option3'>Incapacidad</option>
</Select>
         *  */   
        }

        <InputForm
          name="estatus"
          control={control}
          label="ESTATUS DEL  PUESTO"
          error={errors.estatus}
        />
        <InputForm
          name="especifique"
          control={control}
          label="Especifique:"
          error={errors.especifique}
        />
        <Button type="submit"> Enviar</Button>
        {/* Campo "fechaEmision" */}
      </>
    </form>
  );
};


//export default Formularioencabezado;