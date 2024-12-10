import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Progress,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import FormEncabezadoInformeRevisionDireccion from "./FormEncabezadoInformeRevisionDireccion";
import FormConjunto from "./InformacionEntrada/FormConjunto";

export default function ModalInformeRevisionDireccion() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(20);

  return (
    <>
      <Button onClick={onOpen}>Registrar Nuevo</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box
              borderWidth="1px"
              rounded="lg"
              shadow="1px 1px 3px rgba(0,0,0,0.3)"
              maxWidth={800}
              p={6}
              m="10px auto"
            >
              <Progress
                hasStripe
                value={progress}
                mb="5%"
                mx="5%"
                isAnimated
              ></Progress>

              {/* Mostrar el componente correcto según el paso */}
              {step === 1 ? (
                <FormEncabezadoInformeRevisionDireccion />
              ) : (
                <FormConjunto />
              )}

              <ButtonGroup mt="5%" w="100%">
                <Flex w="100%" justifyContent="space-between">
                  <Button
                    w="7rem"
                    onClick={() => {
                      if (step < 5) {
                        setStep(step + 1);
                        setProgress(progress + 20);
                      }
                    }}
                    colorScheme="teal"
                    variant="outline"
                    isDisabled={step === 5}
                  >
                    Siguiente
                  </Button>

                  {step === 5 && (
                    <Button
                      w="7rem"
                      colorScheme="red"
                      variant="solid"
                      type="submit"
                      onClick={() => {
                        onClose(); // Cierra el modal después de enviar
                        toast({
                          title: "Datos enviados.",
                          description:
                            "Tu formulario ha sido enviado con éxito.",
                          status: "success",
                          duration: 3000,
                          isClosable: true,
                        });
                      }}
                    >
                      Submit
                    </Button>
                  )}
                </Flex>
              </ButtonGroup>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
