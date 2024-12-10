import {
    Box,
    Button,
    ButtonGroup,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Progress,
    useDisclosure,
  } from "@chakra-ui/react";
  import { ReactNode, useState } from "react";
  
  interface ModalProcesoProps {
    buttonText: string;
    drawerTitle: string;
    steps: ReactNode[]; // Contenido de los pasos
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "full"; // Tamaños permitidos por Chakra UI
    onSubmit?: () => void; // Función para manejar el envío final
  }
  
  export function FormConPasos({
    buttonText,
    drawerTitle,
    steps,
    size = "xl",
    onSubmit,
  }: ModalProcesoProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [step, setStep] = useState(1);
    const progressStep = 100 / steps.length;
  
    // Función para reiniciar los pasos
    const resetSteps = () => {
      setStep(1);
    };
  
    const handleNext = () => {
      if (step < steps.length) {
        setStep(step + 1);
      }
    };
  
    const handleClose = () => {
      resetSteps(); // Reinicia los pasos al cerrar el drawer
      onClose();
    };
  
    return (
      <>
        <Button onClick={onOpen} m={4}>
          {buttonText}
        </Button>
  
        <Drawer onClose={handleClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{drawerTitle}</DrawerHeader>
            <DrawerBody>
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
                  value={step * progressStep}
                  mb="5%"
                  mx="5%"
                  isAnimated
                ></Progress>
  
                {steps[step - 1]} {/* Renderiza el contenido del paso actual */}
  
                <ButtonGroup mt="5%" w="100%">
                  <Flex w="100%" justifyContent="space-between">
                    {step === steps.length ? (
                      <Button
                        w="7rem"
                        colorScheme="red"
                        variant="solid"
                        onClick={() => {
                          if (onSubmit) onSubmit();
                          resetSteps(); // Reinicia los pasos después del envío
                          handleClose(); // Cierra el drawer
                        }}
                      >
                        Enviar
                      </Button>
                    ) : (
                      <Button
                        w="7rem"
                        onClick={handleNext}
                        colorScheme="teal"
                        variant="outline"
                      >
                        Siguiente
                      </Button>
                    )}
                  </Flex>
                </ButtonGroup>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  