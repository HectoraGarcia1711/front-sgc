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
    FormDataHallazgoReporteAuditoria,
    schemaHallazgoReporteAuditoria
  } from "../../Types";
  
  type Props = {
    onAddRecord: (data: FormDataHallazgoReporteAuditoria) => void;
  };
  
  const FormHallazgoReporteAuditoria: React.FC<Props> = ({ onAddRecord }) => {
    const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el estado del Popover
  
    const {
      control,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<FormDataHallazgoReporteAuditoria>({
      resolver: zodResolver(schemaHallazgoReporteAuditoria),
    });
  
    const onSubmit: SubmitHandler<FormDataHallazgoReporteAuditoria> = (data) => {
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
                No Conformidad y/o Comentario
                </Heading>
  
                <InputForm
                  name="clausulaNorma"
                  control={control}
                  label="Cláusula de la Norma"
                  error={errors.clausulaNorma}
                />
  
                <InputForm
                  name="tipoHallazgo"
                  control={control}
                  label="Tipo de Hallazgo"
                  error={errors.tipoHallazgo}
                />
                <InputForm
                  name="comentario"
                  control={control}
                  label="No Conformidad y/o Comentario"
                  error={errors.comentario}
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
  
  export default FormHallazgoReporteAuditoria;