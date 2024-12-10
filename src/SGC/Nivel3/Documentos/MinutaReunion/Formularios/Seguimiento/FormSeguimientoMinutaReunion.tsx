import { SubmitHandler, useForm } from "react-hook-form";
import {
  FormDataSeguiAcMinutaReunion,
  schemaSeguiAcMinutaReunion,
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
  onAddRecord: (data: FormDataSeguiAcMinutaReunion) => void;
};

const FormSeguimientoMinutaReunion: React.FC<Props> = ({ onAddRecord }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el estado del Popover

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataSeguiAcMinutaReunion>({
    resolver: zodResolver(schemaSeguiAcMinutaReunion),
  });

  const onSubmit: SubmitHandler<FormDataSeguiAcMinutaReunion> = (data) => {
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
                SEGUIMIENTO A ACUERDOS
              </Heading>

              <InputForm
                name="contenido"
                control={control}
                label="SEGUIMIENTO A ACUERDOS"
                error={errors.contenido}
              />
              <Button type="submit"> Enviar</Button>
            </form>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default FormSeguimientoMinutaReunion;
