import { FormDataHallazgoReporteAuditoria } from "../../Types";
import React, { useState } from "react";
import FormHallazgoReporteAuditoria from "./FormHallazgoReporteAuditoria";
import TablaHallazgoReporteAuditoria from "./TablaHallazgoReporteAuditoria";

type FormTablaAndFormProps = {
  setTablaDisDoc: React.Dispatch<
    React.SetStateAction<FormDataHallazgoReporteAuditoria[]>
  >;
};

export const FormAndTableHallazgoReporteAuditoria: React.FC<FormTablaAndFormProps> = ({
  setTablaDisDoc,
}) => {
  const [tablaDisDocInter, setTablaDisDocInter] = useState<
    FormDataHallazgoReporteAuditoria[]
  >([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataHallazgoReporteAuditoria) => {
    setTablaDisDocInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTablaDisDoc(updatedTable); // Usa la tabla actualizada para `setTablaDisDoc`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormHallazgoReporteAuditoria onAddRecord={handleAddRecord} />

      <TablaHallazgoReporteAuditoria data={tablaDisDocInter} />
    </>
  );
};