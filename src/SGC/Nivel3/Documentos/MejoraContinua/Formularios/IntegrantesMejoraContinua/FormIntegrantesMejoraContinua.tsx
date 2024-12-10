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
FormDataIntegrantesMejoraContinua,
schemaIntegrantesMejoraContinua
  } from "../../Types";
  
  type Props = {
    onAddRecord: (data: FormDataIntegrantesMejoraContinua) => void;
  };
  
  const FormIntegrantesMejoraContinua : React.FC<Props> = ({ onAddRecord }) => {
    const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el estado del Popover
  
    const {
      control,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<FormDataIntegrantesMejoraContinua>({
      resolver: zodResolver(schemaIntegrantesMejoraContinua),
    });
  
    const onSubmit: SubmitHandler<FormDataIntegrantesMejoraContinua> = (data) => {
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
                  name="integrante"
                  control={control}
                  label="Integrantes"
                  error={errors.integrante}
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
  
  export default FormIntegrantesMejoraContinua;