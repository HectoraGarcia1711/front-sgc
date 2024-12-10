import {
  Button,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  Portal,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormDataMetricasBSC, schemaMetricasBSC } from "../../Types";
import InputForm from "../../../../../../ComponentesGlobales/InputForm";
import { InputNumberForm } from "../../../../../../ComponentesGlobales";
import { useEffect } from "react";

type Props = {
  onAddRecord: (data: FormDataMetricasBSC) => void;
  initialData?: FormDataMetricasBSC;
  isOpen: boolean;
  onClose: () => void;
};

const FormMetricasBSC: React.FC<Props> = ({
  onAddRecord,
  initialData,
  isOpen,
  onClose,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataMetricasBSC>({
    resolver: zodResolver(schemaMetricasBSC),
    defaultValues: initialData || {}, // Precarga los valores iniciales
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData); // Configura los valores iniciales al editar
    }
  }, [initialData, reset]);

  const onSubmit: SubmitHandler<FormDataMetricasBSC> = (data) => {
    onAddRecord({ ...data, tempId: initialData?.tempId }); // Asegura que el tempId se mantenga al editar
    reset();
    onClose();
  };

  return (
    <Popover isOpen={isOpen} onClose={onClose} placement="right-end">
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>
            {initialData ? "Editar Métrica" : "Registrar Nueva Métrica"}
          </PopoverHeader>
          <PopoverCloseButton onClick={onClose} />
          <PopoverBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
                {initialData ? "Editar" : "Registrar"} Métrica
              </Heading>

              <InputForm
                name="objetivo"
                control={control}
                label="Objetivo"
                error={errors.objetivo}
              />

              <InputNumberForm
                name="meta"
                control={control}
                label="Meta"
                error={errors.meta}
              />

              <InputForm
                name="frecuencia"
                control={control}
                label="Frecuencia"
                error={errors.frecuencia}
              />

              <InputForm
                name="responsable"
                control={control}
                label="Responsable"
                error={errors.responsable}
              />

              <InputNumberForm
                name="estadoActual"
                control={control}
                label="Estado Actual"
                error={errors.estadoActual}
              />

              <Button type="submit" mt={4} colorScheme="blue">
                {initialData ? "Actualizar" : "Guardar"}
              </Button>
            </form>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default FormMetricasBSC;
