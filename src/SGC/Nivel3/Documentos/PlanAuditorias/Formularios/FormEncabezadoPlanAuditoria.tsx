import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading } from "@chakra-ui/react";
import InputForm from "../../../../../ComponentesGlobales/InputForm";
import {
  FormDataEncabezadoPlanAuditoria,
  schemaEncabezadoPlanAuditoria,
} from "../Types";

type FormularioEncabezadoProps = {
  setEncabezadoData: React.Dispatch<
    React.SetStateAction<FormDataEncabezadoPlanAuditoria | null>
  >;
};

export const FormEncabezadoPlanAuditoria: React.FC<
  FormularioEncabezadoProps
> = ({ setEncabezadoData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataEncabezadoPlanAuditoria>({
    resolver: zodResolver(schemaEncabezadoPlanAuditoria),
  });

  const onSubmit: SubmitHandler<FormDataEncabezadoPlanAuditoria> = (data) => {
    //se muestra la data del formulario en este caso seria llamar al custom hook para
    //que envie la data ala base de datos
    try {
      // Llamamos a createItem para enviar la data a la base de datos
      //const nuevoEncabezado = await createItem(data);
      setEncabezadoData(data);
      console.log("Encabezado creado:", data);
      // Aquí puedes agregar lógica adicional, como mostrar una notificación o redirigir
    } catch (error) {
      console.error("Error al crear el encabezado:", error);
      // Manejo de errores (mostrar mensaje al usuario, etc.)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
          Encabezado
        </Heading>

        <InputForm
          name="coDocumento"
          control={control}
          label="Codigo del Documento"
          error={errors.coDocumento}
        />
        <InputForm
          name="noRevision"
          control={control}
          label="Numero de Revisión"
          error={errors.noRevision}
          type="string"
        />

        <InputForm
          name="fechaEmicion"
          control={control}
          label="Fecha de emision"
          error={errors.fechaEmicion}
          type="date"
        />

        <InputForm
          name="fechaRevision"
          control={control}
          label="Fecha de Revision"
          error={errors.fechaRevision}
          type="date"
        />

        <Button type="submit"> Enviar</Button>
        {/* Campo "fechaEmision" */}
      </>
    </form>
  );
};

//export default Formularioencabezado;
