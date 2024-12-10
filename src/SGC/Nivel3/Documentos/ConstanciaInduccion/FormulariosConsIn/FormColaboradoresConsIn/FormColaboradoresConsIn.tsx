import { SubmitHandler, useForm } from "react-hook-form";
import {
  FormDataColaboradoresConstanciaInduccion,
  schemaColaboradoresConstanciaInduccion,
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
  onAddRecord: (data: FormDataColaboradoresConstanciaInduccion) => void;
};

const FormColaboradoresConsIn: React.FC<Props> = ({ onAddRecord }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el estado del Popover

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataColaboradoresConstanciaInduccion>({
    resolver: zodResolver(schemaColaboradoresConstanciaInduccion),
  });

  const onSubmit: SubmitHandler<FormDataColaboradoresConstanciaInduccion> = (
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
                Colaboradores
              </Heading>

              <InputForm
                name="nombre"
                control={control}
                label="Nombre"
                error={errors.nombre}
              />

              <InputForm
                name="puesto"
                control={control}
                label="Puesto"
                error={errors.puesto}
              />
              <InputForm
                name="firma"
                control={control}
                label="Firma"
                error={errors.firma}
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

export default FormColaboradoresConsIn;
