import { Button, useToast } from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";

type Props = {
  id: string;
  onDelete: (id: string) => Promise<void>;
};

const BottonEliminar = ({ id, onDelete }: Props) => {
  const toast = useToast();

  const handleDelete = async () => {
    try {
      await onDelete(id);
      toast({
        title: "Registro eliminado exitosamente",
        description: "El registro ha sido eliminado de la base de datos.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
      toast({
        title: "Error al eliminar el registro",
        description: "Hubo un problema al intentar eliminar el registro.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <Button colorScheme="gray" m={"5px"} onClick={handleDelete}>
      <RiDeleteBin5Line />
    </Button>
  );
};

export default BottonEliminar;
