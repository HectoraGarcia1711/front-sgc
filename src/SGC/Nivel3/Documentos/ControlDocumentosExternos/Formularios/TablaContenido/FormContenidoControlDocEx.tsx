import { SubmitHandler, useForm } from "react-hook-form";
import { FormDataTablaConDocEx, schemaTablaConDocEx } from "../../Types";
import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
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
  onAddRecord: (data: FormDataTablaConDocEx) => void;
};

const FormContenidoControlDocEx: React.FC<Props> = ({ onAddRecord }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el estado del Popover

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataTablaConDocEx>({
    resolver: zodResolver(schemaTablaConDocEx),
  });

  const onSubmit: SubmitHandler<FormDataTablaConDocEx> = (data) => {
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
                Modificaciones
              </Heading>

              <InputForm
                name="numero"
                control={control}
                label="No."
                error={errors.numero}
              />
              <HStack>
                <Box>
                  <FormControl>
                    <InputForm
                      name="externo"
                      control={control}
                      label="Externo"
                      error={errors.externo}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <InputForm
                      name="codigo"
                      control={control}
                      label="Codigo"
                      error={errors.codigo}
                    />
                  </FormControl>
                </Box>
              </HStack>

              <InputForm
                name="nombreDocumento"
                control={control}
                label="Nombre Del Documento"
                error={errors.nombreDocumento}
              />
              <HStack>
                <Box>
                  <FormControl>
                    <InputForm
                      name="revision"
                      control={control}
                      label="Revision"
                      error={errors.revision}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <InputForm
                      name="fechaEmocion"
                      control={control}
                      label="Fecha De Emocion"
                      error={errors.fechaEmocion}
                      type="date"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <FormControl>
                    <InputForm
                      name="fechaRevision"
                      control={control}
                      label="Fecha De Revision"
                      error={errors.fechaRevision}
                      type="date"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <InputForm
                      name="fechaUltimoCambio"
                      control={control}
                      label="Fecha De Ultimo Cambio"
                      error={errors.fechaUltimoCambio}
                      type="date"
                    />
                  </FormControl>
                </Box>
              </HStack>
              {/**
                
                <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
               */}

              <Button type="submit"> Enviar</Button>
            </form>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default FormContenidoControlDocEx;
