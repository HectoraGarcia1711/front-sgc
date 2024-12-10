import { FormDataEquipoPlanAuditoria } from "../../Types";
import React, { useState } from "react";
import FormEquipoAuditores from "./FormEquipoAuditores";
import TablaEquipoAuditores from "./TablaEquipoAuditores";

type FormTablaAndFormProps = {
  setTablaDisDoc: React.Dispatch<
    React.SetStateAction<FormDataEquipoPlanAuditoria[]>
  >;
};

export const FormAndTableEquipoAuditores: React.FC<FormTablaAndFormProps> = ({
  setTablaDisDoc,
}) => {
  const [tablaDisDocInter, setTablaDisDocInter] = useState<
    FormDataEquipoPlanAuditoria[]
  >([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataEquipoPlanAuditoria) => {
    setTablaDisDocInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTablaDisDoc(updatedTable); // Usa la tabla actualizada para `setTablaDisDoc`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormEquipoAuditores onAddRecord={handleAddRecord} />

      <TablaEquipoAuditores data={tablaDisDocInter} />
    </>
  );
};
