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
import InputForm from "../../../../../../ComponentesGlobales/InputForm";
import {
  FormDataObservacionesPlanAuditoria,
  schemaObservacionesPlanAuditoria,
} from "../../Types";

type Props = {
  onAddRecord: (data: FormDataObservacionesPlanAuditoria) => void;
};

const FormObservacionesPlanAuditoria: React.FC<Props> = ({ onAddRecord }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el estado del Popover

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataObservacionesPlanAuditoria>({
    resolver: zodResolver(schemaObservacionesPlanAuditoria),
  });

  const onSubmit: SubmitHandler<FormDataObservacionesPlanAuditoria> = (
    data
  ) => {
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
                name="observacion"
                control={control}
                label="Observación"
                error={errors.observacion}
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

export default FormObservacionesPlanAuditoria;
