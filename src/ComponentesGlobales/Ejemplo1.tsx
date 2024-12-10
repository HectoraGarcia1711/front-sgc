import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface ModalProcesoProps {
  buttonText: string;
  drawerTitle: string;
  drawerBody: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full"; // Tamaños permitidos por Chakra UI
}

export function Ejemplo1({
  buttonText,
  drawerTitle,
  drawerBody,
  size = "xl", // Valor predeterminado
}: ModalProcesoProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} m={4}>
        {buttonText}
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{drawerTitle}</DrawerHeader>
          <DrawerBody>{drawerBody}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
