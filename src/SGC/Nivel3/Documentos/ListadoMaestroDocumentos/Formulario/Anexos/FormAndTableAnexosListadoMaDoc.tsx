import { useState } from "react";
import { FormDataAnexosLisMaDoc } from "../../Typos";
import FormAnexosAnexos from "./FormAnexos";
import TableFromListadoMaDoc from "../TableFromListadoMaDoc";

type FormTablaAndFormDistribucionDocTablaProps = {
  setTablaAnexos: React.Dispatch<
    React.SetStateAction<FormDataAnexosLisMaDoc[]>
  >;
};

export const FormAndTableAnexosListadoMaDoc: React.FC<
  FormTablaAndFormDistribucionDocTablaProps
> = ({ setTablaAnexos }) => {
  const [tablaAnexosListadoInter, setTablaAnexosListadoInter] = useState<
    FormDataAnexosLisMaDoc[]
  >([]);

  // Función para agregar un nuevo registro al estado
  const handleAddRecord = (newRecord: FormDataAnexosLisMaDoc) => {
    setTablaAnexosListadoInter((prev) => {
      const updatedTable = [...prev, newRecord]; // Crea la tabla actualizada
      setTablaAnexos(updatedTable); // Usa la tabla actualizada para `setTablaAnexos`
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado en la consola
      return updatedTable; // Retorna la tabla actualizada
    });
  };

  return (
    <>
      <FormAnexosAnexos onAddRecord={handleAddRecord} />

      <TableFromListadoMaDoc data={tablaAnexosListadoInter} />
    </>
  );
};
