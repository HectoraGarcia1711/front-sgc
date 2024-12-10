import { SubmitHandler, useForm } from "react-hook-form";
import { FormDataAnexosLisMaDoc, schemaAnexos } from "../../Typos";
import { zodResolver } from "@hookform/resolvers/zod";
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
import InputForm from "../../../../../../ComponentesGlobales/InputForm";

type Props = {
  onAddRecord: (data: FormDataAnexosLisMaDoc) => void;
};

const FormAnexosAnexos: React.FC<Props> = ({ onAddRecord }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el estado del Popover

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataAnexosLisMaDoc>({
    resolver: zodResolver(schemaAnexos),
  });

  const onSubmit: SubmitHandler<FormDataAnexosLisMaDoc> = (data) => {
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

              <HStack>
                <Box>
                  <FormControl>
                    <InputForm
                      name="codigo"
                      control={control}
                      label="Codigo del Documento"
                      error={errors.codigo}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <InputForm
                      name="nombredocumento"
                      control={control}
                      label="Nombre del Documento"
                      error={errors.nombredocumento}
                    />
                  </FormControl>
                </Box>
              </HStack>

              <HStack>
                <Box>
                  <FormControl>
                    <InputForm
                      name="departamento"
                      control={control}
                      label="Departamento"
                      error={errors.departamento}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <InputForm
                      name="responsable"
                      control={control}
                      label="Responsable"
                      error={errors.responsable}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <InputForm
                name="noRevision"
                control={control}
                label="No. Revision"
                error={errors.noRevision}
              />

              <InputForm
                name="elaborado"
                control={control}
                label="Elaborado"
                error={errors.elaborado}
                type="date"
              />

              <InputForm
                name="revisado"
                control={control}
                label="Revisado"
                error={errors.revisado}
                type="date"
              />
              <InputForm
                name="modificado"
                control={control}
                label="Modificado"
                error={errors.modificado}
                type="date"
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

export default FormAnexosAnexos;
