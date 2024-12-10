import { useState } from "react";
import { FormDataTablaProAnuCapa } from "../../Type";
import FormTablaProAnuCapa from "./FormTablaProAnuCapa";
import TablaProAnuCapa from "./TablaProAnuCapa";

export type FormTablaAndFormDistribucionDocTablaProps = {
  setTabla: React.Dispatch<React.SetStateAction<FormDataTablaProAnuCapa[]>>;
};

export const FormAndTableProAnuCapa: React.FC<
  FormTablaAndFormDistribucionDocTablaProps
> = ({ setTabla }) => {
  const [tablaInter, setTablaInter] = useState<FormDataTablaProAnuCapa[]>([]);
  // Función para agregar un nuevo registro al estado
  //const handleAddRecord = (newRecord: FormDataTablaProAnuCapa) => {
  //  setTablaInter((prev) => [...prev, newRecord]);
  //  setTabla(tablaInter);
  //  console.log("Registros de la tabla", tablaInter);
  //};
  const handleAddRecord = (newRecord: FormDataTablaProAnuCapa) => {
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
      <FormTablaProAnuCapa onAddRecord={handleAddRecord} />

      <TablaProAnuCapa data={tablaInter} nombreForm="Contenido" />
    </>
  );
};
