import { useState } from "react";
import { FormDataTablaSeAcMeCoPre } from "../../Types";
import FormTablaSeAcCoPre from "./FromTablaSeAcCoPre";
import TablaSeAcMeCoPre from "./TablaSeAcMeCoPre";

type FormTablaAndFormDistribucionDocTablaProps = {
  setTabla: React.Dispatch<React.SetStateAction<FormDataTablaSeAcMeCoPre[]>>;
};

export const FormAndTableSeAcMeCoPre: React.FC<
  FormTablaAndFormDistribucionDocTablaProps
> = ({ setTabla }) => {
  const [tablaInter, setTablaInter] = useState<FormDataTablaSeAcMeCoPre[]>([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataTablaSeAcMeCoPre) => {
    setTablaInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTabla(updatedTable); // Usa la tabla actualizada para `setTabla`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormTablaSeAcCoPre onAddRecord={handleAddRecord} />

      <TablaSeAcMeCoPre data={tablaInter} />
    </>
  );
};
