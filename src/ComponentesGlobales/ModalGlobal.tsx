import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Progress,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

type ReusableModalProps = {
  buttonLabel?: string;
  title: string;
  forms?: React.ReactNode[]; // Array opcional de formularios
  content?: React.ReactNode; // Contenido opcional
  isOpen: boolean; // Controla la apertura desde el padre
  onClose: () => void; // Controla el cierre desde el padre
};

const ModalGlobal: React.FC<ReusableModalProps> = ({
  title,
  forms,
  content,
  isOpen,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const hasSteps = forms && forms.length > 0; // Verifica si hay pasos
  const progressValue = hasSteps ? ((currentStep + 1) / forms.length) * 100 : 0;

  const handleNext = () => {
    if (hasSteps && currentStep < forms.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(0); // Reinicia el progreso al cerrar
    onClose(); // Llama al cierre del padre
  };

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton onClick={handleClose} />
        <ModalBody pb={6}>
          <Box
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            maxWidth={800}
            p={6}
            m="10px auto"
          >
            {hasSteps ? (
              <>
                <Progress
                  hasStripe
                  value={progressValue}
                  mb="5%"
                  mx="5%"
                  isAnimated
                />
                {forms[currentStep]}
                <Flex mt={4} justifyContent="space-between">
                  {currentStep === forms.length - 1 ? (
                    <Button onClick={handleClose} colorScheme="teal">
                      Finalizar
                    </Button>
                  ) : (
                    <Button onClick={handleNext} colorScheme="teal">
                      Siguiente
                    </Button>
                  )}
                </Flex>
              </>
            ) : (
              content
            )}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalGlobal;
