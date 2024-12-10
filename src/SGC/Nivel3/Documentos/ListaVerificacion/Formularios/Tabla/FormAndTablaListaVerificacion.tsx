import { useState } from "react";
import { FormDataTablaLisVerificacion } from "../../Types";
import FormTablaListaVerificacion from "./FormTablaListaVerificacion";
import TablaListaVerificacion from "./TablaListaVerificacion";

export type FormTablaAndFormDistribucionDocTablaProps = {
  setTabla: React.Dispatch<
    React.SetStateAction<FormDataTablaLisVerificacion[]>
  >;
};

export const FormAndTablaListaVerificacion: React.FC<
  FormTablaAndFormDistribucionDocTablaProps
> = ({ setTabla }) => {
  const [tablaInter, setTablaInter] = useState<FormDataTablaLisVerificacion[]>(
    []
  );
  // Función para agregar un nuevo registro al estado
  //const handleAddRecord = (newRecord: FormDataTablaLisVerificacion) => {
  //  setTablaInter((prev) => [...prev, newRecord]);
  //  setTabla(tablaInter);
  //  console.log("Registros de la tabla", tablaInter);
  //};
  const handleAddRecord = (newRecord: FormDataTablaLisVerificacion) => {
    setTablaInter((prev) => {
      const updatedTable = [...prev, newRecord];
      setTabla(updatedTable); // Usa el nuevo valor de la tabla
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado
      return updatedTable;
    });
  };

  // Mapea `tablaInter` al formato esperado por `TablaGeneralPuntosMinutaReunion`
  //const dataParaTabla = tablaInter.map((item) => ({
  //  info: item.nombre, // Ajusta `nombreParticipante` al campo que quieres mostrar
  //}));

  return (
    <>
      <FormTablaListaVerificacion onAddRecord={handleAddRecord} />

      <TablaListaVerificacion data={tablaInter} nombreForm="Contenido" />
    </>
  );
};
