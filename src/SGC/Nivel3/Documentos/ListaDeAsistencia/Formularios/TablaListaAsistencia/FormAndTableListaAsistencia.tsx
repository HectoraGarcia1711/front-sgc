import { FormDataTablaListaAsistencia } from "../../Types";
import React, { useState } from "react";
import FormTablaListaAsistencia from "./FormTablaListaAsistencia";
import TablaListaAsistencia from "./TablaListaAsistencia";

type FormTablaAndFormProps = {
  setTablaDisDoc: React.Dispatch<
    React.SetStateAction<FormDataTablaListaAsistencia[]>
  >;
};

export const FormAndTableListaAsistencia: React.FC<FormTablaAndFormProps> = ({
  setTablaDisDoc,
}) => {
  const [tablaDisDocInter, setTablaDisDocInter] = useState<
    FormDataTablaListaAsistencia[]
  >([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataTablaListaAsistencia) => {
    setTablaDisDocInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTablaDisDoc(updatedTable); // Usa la tabla actualizada para `setTablaDisDoc`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormTablaListaAsistencia onAddRecord={handleAddRecord} />

      <TablaListaAsistencia data={tablaDisDocInter} />
    </>
  );
};
