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
  FormDataCuerpoPlanAuditoria,
  schemaCuerpoPlanAuditoria,
} from "../../Types";

type Props = {
  onAddRecord: (data: FormDataCuerpoPlanAuditoria) => void;
};

const FormCuerpoPlanAuditorias: React.FC<Props> = ({ onAddRecord }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el estado del Popover

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataCuerpoPlanAuditoria>({
    resolver: zodResolver(schemaCuerpoPlanAuditoria),
  });

  const onSubmit: SubmitHandler<FormDataCuerpoPlanAuditoria> = (data) => {
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
                name="inicio"
                control={control}
                label="Inicio"
                error={errors.inicio}
              />

              <InputForm
                name="termino"
                control={control}
                label="Termino"
                error={errors.termino}
              />
              <InputForm
                name="procesoAuditar"
                control={control}
                label="Proceso a Auditar"
                error={errors.procesoAuditar}
              />

              <InputForm
                name="requisitosNorma"
                control={control}
                label="Requisito de la Norma"
                error={errors.requisitosNorma}
              />

              <InputForm
                name="contraparteAuditada"
                control={control}
                label="Contraparte Auditada"
                error={errors.contraparteAuditada}
              />

              <InputForm
                name="auditor"
                control={control}
                label="Auditor"
                error={errors.auditor}
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

export default FormCuerpoPlanAuditorias;
