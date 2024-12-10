import { FormDataCuerpoPlanAuditoria } from "../../Types";
import React, { useState } from "react";
import FormCuerpoPlanAuditorias from "./FormCuerpoPlanAuditorias";
import TablaCuerpoPlanAuditorias from "./TablaCuerpoPlanAuditorias";

type FormTablaAndFormProps = {
  setTablaDisDoc: React.Dispatch<
    React.SetStateAction<FormDataCuerpoPlanAuditoria[]>
  >;
};

export const FormAndTableCuerpoPlanAuditorias: React.FC<
  FormTablaAndFormProps
> = ({ setTablaDisDoc }) => {
  const [tablaDisDocInter, setTablaDisDocInter] = useState<
    FormDataCuerpoPlanAuditoria[]
  >([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataCuerpoPlanAuditoria) => {
    setTablaDisDocInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTablaDisDoc(updatedTable); // Usa la tabla actualizada para `setTablaDisDoc`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormCuerpoPlanAuditorias onAddRecord={handleAddRecord} />

      <TablaCuerpoPlanAuditorias data={tablaDisDocInter} />
    </>
  );
};
