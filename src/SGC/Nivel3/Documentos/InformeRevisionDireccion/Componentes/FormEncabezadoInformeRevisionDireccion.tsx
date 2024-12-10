import { Box, Button, Heading } from "@chakra-ui/react";
import InputForm from "../../../../../ComponentesGlobales/InputForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCrud } from "../../../../../libs/useCrud";
import { createEncabezado } from "../apis/apiEncabezado";

export const schema = z.object({
  coDocumento: z.string().min(1, "El Codigo es Obligatorio"),
  noRevision: z.string().min(1, "El Numero de Revision es Obligatorio"),
  fechaEmicion: z.coerce.date({ required_error: "Fecha Requerida" }),
  fechaRevision: z.coerce.date({ required_error: "Fecha Requerida" }),
});

export type FormDataEncabezado = z.infer<typeof schema>;

const FormEncabezadoInformeRevisionDireccion = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataEncabezado>({
    resolver: zodResolver(schema),
  });

  // Utilizamos el custom hook
  const { createItem } = useCrud<FormDataEncabezado>({
    queryKey: ["encabezados"], // Puedes ajustar el key según necesites
    getAll: async () => [], // No necesitamos esta función por ahora
    createItem: createEncabezado, // Pasamos la función de creación
    updateItem: async () => {
      throw new Error("No implementado");
    },
    deleteItem: async () => {
      throw new Error("No implementado");
    },
  });

  const onSubmit: SubmitHandler<FormDataEncabezado> = async (data) => {
    //se muestra la data del formulario en este caso seria llamar al custom hook para
    //que envie la data ala base de datos
    try {
      // Llamamos a createItem para enviar la data a la base de datos
      const nuevoEncabezado = await createItem(data);
      console.log("Encabezado creado:", nuevoEncabezado);
      // Aquí puedes agregar lógica adicional, como mostrar una notificación o redirigir
    } catch (error) {
      console.error("Error al crear el encabezado:", error);
      // Manejo de errores (mostrar mensaje al usuario, etc.)
    }
  };

  return (
    //<form onSubmit={handleSubmit(onSubmit)}>
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
        Encabezado
      </Heading>

      <InputForm
        name="coDocumento"
        control={control}
        label="Codigo del Documento"
        error={errors.coDocumento}
        type="string"
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
    </Box>
    //</form>
  );
};

export default FormEncabezadoInformeRevisionDireccion;
