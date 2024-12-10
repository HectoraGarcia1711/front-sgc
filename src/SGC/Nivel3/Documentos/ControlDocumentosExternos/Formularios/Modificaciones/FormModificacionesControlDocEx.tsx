import { SubmitHandler, useForm } from "react-hook-form";
import {
  FormDataModificacionesConDocEx,
  schemaModificacionesConDocEx,
} from "../../Types";
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
import InputForm from "../../../../../../ComponentesGlobales/InputForm";

type Props = {
  onAddRecord: (data: FormDataModificacionesConDocEx) => void;
};

const FormModificacionesControlDocEx: React.FC<Props> = ({ onAddRecord }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el estado del Popover

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataModificacionesConDocEx>({
    resolver: zodResolver(schemaModificacionesConDocEx),
  });

  const onSubmit: SubmitHandler<FormDataModificacionesConDocEx> = (data) => {
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
                Modificaciones
              </Heading>

              <InputForm
                name="fechaCambio"
                control={control}
                label="Fecha de cambio"
                error={errors.fechaCambio}
                type="date"
              />
              <InputForm
                name="edRev"
                control={control}
                label="Ed/Rev"
                error={errors.edRev}
              />
              <InputForm
                name="cambiosRealizadosVerAn"
                control={control}
                label="Cambios realizados a la versión anterior"
                error={errors.cambiosRealizadosVerAn}
              />
              <Button type="submit"> Enviar</Button>
            </form>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default FormModificacionesControlDocEx;
