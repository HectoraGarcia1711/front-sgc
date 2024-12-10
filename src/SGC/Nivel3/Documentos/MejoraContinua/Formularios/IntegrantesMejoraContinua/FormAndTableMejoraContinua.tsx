import { FormDataIntegrantesMejoraContinua } from "../../Types";
import React, { useState } from "react";
import FormIntegrantesMejoraContinua from "./FormIntegrantesMejoraContinua";
import TableIntegrantesMejoraContinua from "./TableIntegrantesMejoraContinua";

type FormTablaAndFormProps = {
  setTablaDisDoc: React.Dispatch<
    React.SetStateAction<FormDataIntegrantesMejoraContinua[]>
  >;
};

export const FormAndTableMejoraContinua: React.FC<FormTablaAndFormProps> = ({
  setTablaDisDoc,
}) => {
  const [tablaDisDocInter, setTablaDisDocInter] = useState<
    FormDataIntegrantesMejoraContinua[]
  >([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataIntegrantesMejoraContinua) => {
    setTablaDisDocInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTablaDisDoc(updatedTable); // Usa la tabla actualizada para `setTablaDisDoc`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormIntegrantesMejoraContinua onAddRecord={handleAddRecord} />

      <TableIntegrantesMejoraContinua data={tablaDisDocInter} />
    </>
  );
};
