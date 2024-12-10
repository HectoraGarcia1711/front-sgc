import { Heading } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from "../../../../../ComponentesGlobales/InputForm";

const schema = z.object({
  // Campos de Form2
  codigo: z.string().min(1, ""),
  nombredocumento: z.string().min(1, ""),
  departamento: z.string().min(1, ""),
  responsable: z.string().min(1, ""),
  noRevisionForm2: z.string().min(1, ""), // Cambié el nombre para evitar conflicto con noRevision de Form1
  elaborado: z.string().min(1, ""),
  revisado: z.string().min(1, ""),
  modificado: z.string().min(1, ""),
  // Otros campos...
});

type FormDataProcesos = z.infer<typeof schema>;

const FormatosForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProcesos>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormDataProcesos> = (data) => {
    //se muestra la data del formulario en este caso seria llamar al custom hook para
    //que envie la data ala base de datos
    console.log(data);
  };
  return (
    <>
      <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
        Procesos
      </Heading>

      <InputForm
        name="CodigoDocumento"
        control={control}
        label="Codigo del Documento"
        error={errors.codigo}
      />

      {/* Campo "fechaEmision" */}
    </>
  );
};

export default FormatosForm;
