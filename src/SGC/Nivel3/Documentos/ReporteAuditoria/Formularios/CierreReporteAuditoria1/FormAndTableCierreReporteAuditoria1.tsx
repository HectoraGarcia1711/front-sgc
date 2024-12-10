import { FormDataCierreReporteAuditoria1 } from "../../Types";
import React, { useState } from "react";
import FormCierreReporteAuditoria1 from "./FormCierreReporteAuditoria1";
import TableCierreReproteAuditoria1 from "./TableCierreReproteAuditoria1";

type FormTablaAndFormProps = {
  setTablaDisDoc: React.Dispatch<
    React.SetStateAction<FormDataCierreReporteAuditoria1[]>
  >;
};

export const FormAndTableCierreReporteAuditoria1: React.FC<
  FormTablaAndFormProps
> = ({ setTablaDisDoc }) => {
  const [tablaDisDocInter, setTablaDisDocInter] = useState<
    FormDataCierreReporteAuditoria1[]
  >([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataCierreReporteAuditoria1) => {
    setTablaDisDocInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTablaDisDoc(updatedTable); // Usa la tabla actualizada para `setTablaDisDoc`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormCierreReporteAuditoria1 onAddRecord={handleAddRecord} />

      <TableCierreReproteAuditoria1 data={tablaDisDocInter} />
    </>
  );
};