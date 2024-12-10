import { FormDataPreguntas1DNC } from "../../../Type";
import React, { useState } from "react";
import FormTabla1DNC from "./FormTabla1DNC";
import Tablapreguntas1DNC from "./Tablapreguntas1DNC";

type FormTablaAndFormProps = {
  setTablaDisDoc: React.Dispatch<React.SetStateAction<FormDataPreguntas1DNC[]>>;
};

export const FormAndTablaPreguntas1DNC: React.FC<FormTablaAndFormProps> = ({
  setTablaDisDoc,
}) => {
  const [tablaDisDocInter, setTablaDisDocInter] = useState<
    FormDataPreguntas1DNC[]
  >([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataPreguntas1DNC) => {
    setTablaDisDocInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTablaDisDoc(updatedTable); // Usa la tabla actualizada para `setTablaDisDoc`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormTabla1DNC onAddRecord={handleAddRecord} />

      <Tablapreguntas1DNC data={tablaDisDocInter} />
    </>
  );
};
