import { SubmitHandler, useForm } from "react-hook-form";
import { FormDataTablaSeAcMeCoPre, schemaTablaSeAcMeCoPre } from "../../Types";
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
  onAddRecord: (data: FormDataTablaSeAcMeCoPre) => void;
};

const FormTablaSeAcCoPre: React.FC<Props> = ({ onAddRecord }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el estado del Popover

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataTablaSeAcMeCoPre>({
    resolver: zodResolver(schemaTablaSeAcMeCoPre),
  });

  const onSubmit: SubmitHandler<FormDataTablaSeAcMeCoPre> = (data) => {
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
                name="hallazgo"
                control={control}
                label="Hallazgo"
                error={errors.hallazgo}
              />
              <InputForm
                name="evidenciasObservadas"
                control={control}
                label="Evidencias Observadas"
                error={errors.evidenciasObservadas}
              />

              <InputForm
                name="responsableAreaImplantacion"
                control={control}
                label="Responsable Del Area e Implantación"
                error={errors.responsableAreaImplantacion}
              />

              <InputForm
                name="fechaInicio"
                control={control}
                label="Fecha de Inicio"
                error={errors.fechaInicio}
                type="date"
              />
              <InputForm
                name="fechaTermino"
                control={control}
                label="Fecha de Termino"
                error={errors.fechaTermino}
                type="date"
              />
              <InputForm
                name="avance"
                control={control}
                label="Avance"
                error={errors.avance}
              />
              <InputForm
                name="revisionValoracion"
                control={control}
                label="Revisión /Valoración de la efectividad de las acciones implenentadas"
                error={errors.revisionValoracion}
              />
              <Button type="submit"> Enviar</Button>
            </form>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default FormTablaSeAcCoPre;
