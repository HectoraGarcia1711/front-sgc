import { FormDataDistribucionDocTablaData } from "../../Types";
import FormularioDistribucionDocTabla from "./FormularioDistribucionDocTabla";
import TablaDistribucionDoctabla from "./TablaDistribucionDoctabla";
import React, { useState } from "react";

type FormTablaAndFormDistribucionDocTablaProps = {
  setTablaDisDoc: React.Dispatch<
    React.SetStateAction<FormDataDistribucionDocTablaData[]>
  >;
};

export const FormTablaAndFormDistribucionDocTabla: React.FC<
  FormTablaAndFormDistribucionDocTablaProps
> = ({ setTablaDisDoc }) => {
  const [tablaDisDocInter, setTablaDisDocInter] = useState<
    FormDataDistribucionDocTablaData[]
  >([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataDistribucionDocTablaData) => {
    setTablaDisDocInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTablaDisDoc(updatedTable); // Usa la tabla actualizada para `setTablaDisDoc`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormularioDistribucionDocTabla onAddRecord={handleAddRecord} />

      <TablaDistribucionDoctabla data={tablaDisDocInter} />
    </>
  );
};
