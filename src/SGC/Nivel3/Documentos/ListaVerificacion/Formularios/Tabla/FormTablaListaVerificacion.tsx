import { SubmitHandler, useForm } from "react-hook-form";
import {
  FormDataTablaLisVerificacion,
  schemaTablaLisVerificacion,
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
  onAddRecord: (data: FormDataTablaLisVerificacion) => void;
};

const FormTablaListaVerificacion: React.FC<Props> = ({ onAddRecord }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el estado del Popover

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataTablaLisVerificacion>({
    resolver: zodResolver(schemaTablaLisVerificacion),
  });

  const onSubmit: SubmitHandler<FormDataTablaLisVerificacion> = (data) => {
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
                name="numero"
                control={control}
                label="No."
                error={errors.numero}
              />

              <InputForm
                name="contextoOrganizacion"
                control={control}
                label="Contexto de la Organizacion"
                error={errors.contextoOrganizacion}
              />
              <InputForm
                name="marcador"
                control={control}
                label="Marcador"
                error={errors.marcador}
              />

              <InputForm
                name="evidenciasAllasgos"
                control={control}
                label="Evidencias de Hallazgos"
                error={errors.evidenciasAllasgos}
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

export default FormTablaListaVerificacion;
