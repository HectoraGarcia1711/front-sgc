import { useState } from "react";
import { FormDataFormatosLisMaDoc } from "../../Typos";
import TableFromListadoMaDoc from "../TableFromListadoMaDoc";
import FormFormatos from "./FormFormatos";

type FormTablaAndFormDistribucionDocTablaProps = {
  setTablaFormatos: React.Dispatch<
    React.SetStateAction<FormDataFormatosLisMaDoc[]>
  >;
};

export const FormAndTableFormatosListadoMaDoc: React.FC<
  FormTablaAndFormDistribucionDocTablaProps
> = ({ setTablaFormatos }) => {
  const [tablaFormatosListadoInter, setTablaFormatosListadoInter] = useState<
    FormDataFormatosLisMaDoc[]
  >([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataFormatosLisMaDoc) => {
    setTablaFormatosListadoInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTablaFormatos(updatedTable); // Usa la tabla actualizada para `setTablaFormatos`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormFormatos onAddRecord={handleAddRecord} />

      <TableFromListadoMaDoc data={tablaFormatosListadoInter} />
    </>
  );
};
