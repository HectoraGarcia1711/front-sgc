import { FormDataPreguntas2DNC } from "../../../Type";
import React, { useState } from "react";
import FormTabla2DNC from "./FormTabla2DNC";
import Tablapreguntas2DNC from "./Tablapreguntas2DNC";

type FormTablaAndFormProps = {
  setTablaDisDoc: React.Dispatch<React.SetStateAction<FormDataPreguntas2DNC[]>>;
};

export const FormAndTablaPreguntas2DNC: React.FC<FormTablaAndFormProps> = ({
  setTablaDisDoc,
}) => {
  const [tablaDisDocInter, setTablaDisDocInter] = useState<
    FormDataPreguntas2DNC[]
  >([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataPreguntas2DNC) => {
    setTablaDisDocInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTablaDisDoc(updatedTable); // Usa la tabla actualizada para `setTablaDisDoc`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormTabla2DNC onAddRecord={handleAddRecord} />

      <Tablapreguntas2DNC data={tablaDisDocInter} />
    </>
  );
};
