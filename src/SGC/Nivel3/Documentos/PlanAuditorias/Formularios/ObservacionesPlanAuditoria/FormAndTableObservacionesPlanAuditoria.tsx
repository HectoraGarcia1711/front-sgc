import { FormDataObservacionesPlanAuditoria } from "../../Types";
import React, { useState } from "react";
import FormObservacionesPlanAuditoria from "./FormObservacionesPlanAuditoria";
import TableObservacionesPlanAuditoria from "./TableObservacionesPlanAuditoria";

type FormTablaAndFormProps = {
  setTablaDisDoc: React.Dispatch<
    React.SetStateAction<FormDataObservacionesPlanAuditoria[]>
  >;
};

export const FormAndTableObservacionesPlanAuditoria: React.FC<
  FormTablaAndFormProps
> = ({ setTablaDisDoc }) => {
  const [tablaDisDocInter, setTablaDisDocInter] = useState<
    FormDataObservacionesPlanAuditoria[]
  >([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataObservacionesPlanAuditoria) => {
    setTablaDisDocInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTablaDisDoc(updatedTable); // Usa la tabla actualizada para `setTablaDisDoc`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormObservacionesPlanAuditoria onAddRecord={handleAddRecord} />

      <TableObservacionesPlanAuditoria data={tablaDisDocInter} />
    </>
  );
};
