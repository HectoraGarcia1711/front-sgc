import { SubmitHandler, useForm } from "react-hook-form";
import { FormDataTablaProAnuCapa, schemaTablaProAnuCapa } from "../../Type";
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
  onAddRecord: (data: FormDataTablaProAnuCapa) => void;
};

const FormTablaProAnuCapa: React.FC<Props> = ({ onAddRecord }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el estado del Popover

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataTablaProAnuCapa>({
    resolver: zodResolver(schemaTablaProAnuCapa),
  });

  const onSubmit: SubmitHandler<FormDataTablaProAnuCapa> = (data) => {
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
                name="titulo"
                control={control}
                label="TITULO DEL CURSO"
                error={errors.titulo}
              />

              <InputForm
                name="perDepartamento"
                control={control}
                label="PERSONAL/DEPARTAMENTO OBJETIVO"
                error={errors.perDepartamento}
              />

              <InputForm
                name="tipo"
                control={control}
                label="TIPO"
                error={errors.tipo}
              />

              <InputForm
                name="capacitador"
                control={control}
                label="CAPACITADOR"
                error={errors.capacitador}
              />

              <InputForm
                name="duracion"
                control={control}
                label="DURACIÓN"
                error={errors.duracion}
              />

              <InputForm
                name="estatus"
                control={control}
                label="ESTATUS"
                error={errors.estatus}
              />

              <InputForm
                name="fecha"
                control={control}
                label="Fecha"
                error={errors.fecha}
                type="date"
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

export default FormTablaProAnuCapa;
