import {
  Button,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "../../../../../../../ComponentesGlobales/InputForm";
import { FormDataPreguntas1DNC, schemaPreguntas1DNC } from "../../../Type";

type Props = {
  onAddRecord: (data: FormDataPreguntas1DNC) => void;
};

const FormTabla1DNC: React.FC<Props> = ({ onAddRecord }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el estado del Popover

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataPreguntas1DNC>({
    resolver: zodResolver(schemaPreguntas1DNC),
  });

  const onSubmit: SubmitHandler<FormDataPreguntas1DNC> = (data) => {
    onAddRecord(data); // Llama a la función para agregar el registro
    console.log("lo que se guarda en el formulario es: ", data);

    reset(); // Limpia el formulario
    onClose(); // Cierra el Popover
  };

  return (
    <Popover isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <Button onClick={onOpen}>Registrar Nuevo</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Registro Nuevo</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
                Tabla
              </Heading>

              <InputForm
                name="contenido1"
                control={control}
                label="¿Qué CONOCIMIENTOS necesitas para HACER mejor tu trabajo? (Lo que deberías conocer)"
                error={errors.contenido1}
              />

              <InputForm
                name="contenido2"
                control={control}
                label="¿Por qué consideras que requieres APRENDER esos conocimientos?"
                error={errors.contenido2}
              />
              <InputForm
                name="contenido3"
                control={control}
                label="¿En qué mejorarías tu DESEMPEÑO al capacitarte en dichos conocimientos?"
                error={errors.contenido3}
              />

              <Button type="submit" mt={4}>
                Guardar
              </Button>
            </form>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default FormTabla1DNC;
