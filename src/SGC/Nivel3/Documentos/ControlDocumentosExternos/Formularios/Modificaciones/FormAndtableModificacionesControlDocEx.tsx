import { useState } from "react";
import { FormDataModificacionesConDocEx } from "../../Types";
import FormModificacionesControlDocEx from "./FormModificacionesControlDocEx";
import TableModificacionesControlDocEx from "./TableModificacionesControlDocEx";

type FormTablaAndFormDistribucionDocTablaProps = {
  setTabla: React.Dispatch<
    React.SetStateAction<FormDataModificacionesConDocEx[]>
  >;
};

export const FormAndtableModificacionesControlDocEx: React.FC<
  FormTablaAndFormDistribucionDocTablaProps
> = ({ setTabla }) => {
  const [tablaInter, setTablaInter] = useState<
    FormDataModificacionesConDocEx[]
  >([]);

  // Función para agregar un nuevo registro al estado
  //const handleAddRecord = (newRecord: FormDataModificacionesConDocEx) => {
  //  setTablaInter((prev) => [...prev, newRecord]);
  //  setTabla(tablaInter);
  //  console.log("Registros de la tabla", tablaInter);
  //};
  const handleAddRecord = (newRecord: FormDataModificacionesConDocEx) => {
    setTablaInter((prev) => {
      const updatedTable = [...prev, newRecord];
      setTabla(updatedTable); // Usa el nuevo valor de la tabla
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado
      return updatedTable;
    });
  };

  return (
    <>
      <FormModificacionesControlDocEx onAddRecord={handleAddRecord} />

      <TableModificacionesControlDocEx data={tablaInter} />
    </>
  );
};
