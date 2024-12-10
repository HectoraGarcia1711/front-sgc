import { FormDataCierreReporteAuditoria} from "../../Types";
import React, { useState } from "react";
import FormCierreReporteAuditoria from "./FormCierreReporteAuditoria";
import TableCierreReproteAuditoria from "./TableCierreReproteAuditoria";

type FormTablaAndFormProps = {
  setTablaDisDoc: React.Dispatch<
    React.SetStateAction<FormDataCierreReporteAuditoria[]>
  >;
};

export const FormAndTableCierreReporteAuditoria: React.FC<
  FormTablaAndFormProps
> = ({ setTablaDisDoc }) => {
  const [tablaDisDocInter, setTablaDisDocInter] = useState<
    FormDataCierreReporteAuditoria[]
  >([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataCierreReporteAuditoria) => {
    setTablaDisDocInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTablaDisDoc(updatedTable); // Usa la tabla actualizada para `setTablaDisDoc`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormCierreReporteAuditoria onAddRecord={handleAddRecord} />

      <TableCierreReproteAuditoria data={tablaDisDocInter} />
    </>
  );
};