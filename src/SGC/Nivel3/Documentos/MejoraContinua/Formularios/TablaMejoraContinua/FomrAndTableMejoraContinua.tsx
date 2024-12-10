import { FormDataTablaMejoraContinua} from "../../Types";
import React, { useState } from "react";
import FormTablaMejoraContinua from "./FormTablaMejoraContinua";
import TableTablaMejoraContinua from "./TableTablaMejoraContinua";

type FormTablaAndFormProps = {
  setTablaDisDoc: React.Dispatch<
    React.SetStateAction<FormDataTablaMejoraContinua[]>
  >;
};

export const FomrAndTableMejoraContinua : React.FC<FormTablaAndFormProps> = ({
  setTablaDisDoc,
}) => {
  const [tablaDisDocInter, setTablaDisDocInter] = useState<
    FormDataTablaMejoraContinua[]
  >([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataTablaMejoraContinua) => {
    setTablaDisDocInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTablaDisDoc(updatedTable); // Usa la tabla actualizada para `setTablaDisDoc`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormTablaMejoraContinua onAddRecord={handleAddRecord} />

      <TableTablaMejoraContinua data={tablaDisDocInter} />
    </>
  );
};


