import { SubmitHandler, useForm } from "react-hook-form";
import {
  FormDataInfoConstanciaInduccion,
  schemaInfoConstanciaInduccion,
} from "../../Type";
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
  onAddRecord: (data: FormDataInfoConstanciaInduccion) => void;
};

const FormInfoConsIn: React.FC<Props> = ({ onAddRecord }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el estado del Popover

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataInfoConstanciaInduccion>({
    resolver: zodResolver(schemaInfoConstanciaInduccion),
  });

  const onSubmit: SubmitHandler<FormDataInfoConstanciaInduccion> = (data) => {
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
                LISTA DE VERIFICACIÓN
              </Heading>

              <InputForm
                name="info"
                control={control}
                label="INFORMACIÓN"
                error={errors.info}
              />

              <InputForm
                name="respuesta"
                control={control}
                label="Respuesta"
                error={errors.respuesta}
              />
              {/**
               * "numero": "001",
                "contextoOrganizacion": "Revisión del contexto interno",
                "marcador": "Cumple",
                "evidenciasAllasgos": "Documentos revisados",
               * 
               * 
               */}
              <Button type="submit"> Enviar</Button>
            </form>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default FormInfoConsIn;
