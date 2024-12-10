import { useState } from "react";
import { FormDataProcesosLisMaDoc } from "../../Typos";
import TableFromListadoMaDoc from "../TableFromListadoMaDoc";
import FormProcesos from "./FormProcesos";

type FormTablaAndFormDistribucionDocTablaProps = {
  setTablaProcesos: React.Dispatch<
    React.SetStateAction<FormDataProcesosLisMaDoc[]>
  >;
};

export const FormAndTableProcesosListadoMaDoc: React.FC<
  FormTablaAndFormDistribucionDocTablaProps
> = ({ setTablaProcesos }) => {
  const [tablaProcesosListadoInter, setTablaProcesosListadoInter] = useState<
    FormDataProcesosLisMaDoc[]
  >([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataProcesosLisMaDoc) => {
    setTablaProcesosListadoInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTablaProcesos(updatedTable); // Usa la tabla actualizada para `setTablaProcesos`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormProcesos onAddRecord={handleAddRecord} />

      <TableFromListadoMaDoc data={tablaProcesosListadoInter} />
    </>
  );
};
