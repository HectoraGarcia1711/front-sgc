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
  FormDataEquipoPlanAuditoria,
  schemaEquipoPlanAuditoria,
} from "../../Types";

type Props = {
  onAddRecord: (data: FormDataEquipoPlanAuditoria) => void;
};

const FormEquipoAuditores: React.FC<Props> = ({ onAddRecord }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el estado del Popover

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataEquipoPlanAuditoria>({
    resolver: zodResolver(schemaEquipoPlanAuditoria),
  });

  const onSubmit: SubmitHandler<FormDataEquipoPlanAuditoria> = (data) => {
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
                name="auditorLider"
                control={control}
                label="Auditor Lider"
                error={errors.auditorLider}
              />

              <InputForm
                name="auditores"
                control={control}
                label="Auditor"
                error={errors.auditores}
              />
              <InputForm
                name="auditoresEntrenamiento"
                control={control}
                label="Auditores en Entrenamiento"
                error={errors.auditoresEntrenamiento}
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

export default FormEquipoAuditores;
