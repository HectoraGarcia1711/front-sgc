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
import { SelectForm } from "../../../../../../ComponentesGlobales";
import {
  FormDataPartesInteresadasBSC,
  schemaPartesInteresadasBSC,
} from "../../Types";
import InputForm from "../../../../../../ComponentesGlobales/InputForm";
import { useEffect } from "react";

type Props = {
  onAddRecord: (data: FormDataPartesInteresadasBSC) => void;
  initialData?: FormDataPartesInteresadasBSC;
  isOpen: boolean;
  onClose: () => void;
};

const FormPartesInBSC: React.FC<Props> = ({
  onAddRecord,
  initialData,
  isOpen,
  onClose,
}) => {
  const {
    control,
    handleSubmit,
    reset, // Para reinicializar el formulario
    formState: { errors },
  } = useForm<FormDataPartesInteresadasBSC>({
    resolver: zodResolver(schemaPartesInteresadasBSC),
    defaultValues: initialData || {}, // Precarga los valores iniciales
  });

  // Actualiza los valores cuando cambie initialData
  useEffect(() => {
    if (initialData) {
      console.log("Datos iniciales para el formulario:", initialData); // Muestra los valores iniciales
      reset(initialData); // Configura los valores iniciales
    }
  }, [initialData, reset]);

  const onSubmit: SubmitHandler<FormDataPartesInteresadasBSC> = (data) => {
    console.log("Datos enviados desde el formulario:", data); // Muestra los datos que se envían
    onAddRecord(data); // Llama a la función para agregar/editar el registro
    reset(); // Limpia el formulario
    onClose(); // Cierra el formulario
  };

  const options = [
    { value: "mucho", label: "Mucho" },
    { value: "poco", label: "Poco" },
  ];

  return (
    <Popover isOpen={isOpen} onClose={onClose} placement="right-end">
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>
            {initialData ? "Editar Registro" : "Registrar Nuevo"}
          </PopoverHeader>
          <PopoverCloseButton onClick={onClose} />
          <PopoverBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
                {initialData ? "Editar" : "Registrar"} Parte Interesada
              </Heading>

              <InputForm
                name="nombre"
                control={control}
                label="Nombre"
                error={errors.nombre}
              />

              <SelectForm
                name="interes"
                label="Interés"
                control={control}
                placeholder="Selecciona un interés"
                options={options}
                error={errors.interes}
              />

              <SelectForm
                name="influencia"
                label="Influencia"
                control={control}
                placeholder="Selecciona una influencia"
                options={options}
                error={errors.influencia}
              />

              <Button type="submit" mt={4}>
                {initialData ? "Actualizar" : "Guardar"}
              </Button>
            </form>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default FormPartesInBSC;
