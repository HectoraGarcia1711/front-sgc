import { Button, Heading, Box, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "../../../../../../ComponentesGlobales/InputForm";
import { FormDataPrespectivaBSC, schemaPrespectivaBSC } from "../../Types";
import { useEffect } from "react";

type Props = {
  onAddRecord: (data: FormDataPrespectivaBSC) => void;
  initialData?: FormDataPrespectivaBSC;
};

const FormPrespectivaBSC: React.FC<Props> = ({ onAddRecord, initialData }) => {
  console.log("Renderizando formulario", { initialData });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataPrespectivaBSC>({
    resolver: zodResolver(schemaPrespectivaBSC),
    defaultValues: initialData || {},
  });

  // Actualiza los valores del formulario si `initialData` cambia
  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const onSubmit: SubmitHandler<FormDataPrespectivaBSC> = (data) => {
    onAddRecord(data);
    reset(); // Limpia el formulario tras guardar
  };

  return (
    <Box>
      <Heading w="100%" textAlign="center" fontWeight="normal" mb="4">
        {initialData ? "Editar Perspectiva" : "Registrar Nueva Perspectiva"}
      </Heading>
      <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={4}>
        <InputForm
          name="contenido"
          control={control}
          label="Contenido"
          error={errors.contenido}
        />
        <Button type="submit" colorScheme="blue">
          {initialData ? "Actualizar" : "Guardar"}
        </Button>
      </VStack>
    </Box>
  );
};

export default FormPrespectivaBSC;
