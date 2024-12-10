import { useState } from "react";
import { FormDataTablaConDocEx } from "../../Types";
import FormContenidoControlDocEx from "./FormContenidoControlDocEx";
import TableContenidoControlDocEx from "./TableContenidoControlDocEx";

type FormTablaAndFormTablaProps = {
  setTabla: React.Dispatch<React.SetStateAction<FormDataTablaConDocEx[]>>;
};

export const FormAndTableTablaControlDocEx: React.FC<
  FormTablaAndFormTablaProps
> = ({ setTabla }) => {
  const [tablaInter, setTablaInter] = useState<FormDataTablaConDocEx[]>([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataTablaConDocEx) => {
    setTablaInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTabla(updatedTable); // Usa el nuevo valor actualizado para `setTabla`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormContenidoControlDocEx onAddRecord={handleAddRecord} />

      <TableContenidoControlDocEx data={tablaInter} />
    </>
  );
};
