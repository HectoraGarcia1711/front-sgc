import { useState } from "react";
import { FormDataInfoConstanciaInduccion } from "../../Type";
import FormInfoConsIn from "./FormInfoConsIn";
import TablaInfoConsIn from "./TablaInfoConsIn";

export type FormTablaAndFormDistribucionDocTablaProps = {
  setTabla: React.Dispatch<
    React.SetStateAction<FormDataInfoConstanciaInduccion[]>
  >;
};

export const TablaAndFormInfoConsIn: React.FC<
  FormTablaAndFormDistribucionDocTablaProps
> = ({ setTabla }) => {
  const [tablaInter, setTablaInter] = useState<
    FormDataInfoConstanciaInduccion[]
  >([]);
  // Función para agregar un nuevo registro al estado
  //const handleAddRecord = (newRecord: FormDataInfoConstanciaInduccion) => {
  //  setTablaInter((prev) => [...prev, newRecord]);
  //  setTabla(tablaInter);
  //  console.log("Registros de la tabla", tablaInter);
  //};
  const handleAddRecord = (newRecord: FormDataInfoConstanciaInduccion) => {
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
      <FormInfoConsIn onAddRecord={handleAddRecord} />

      <TablaInfoConsIn data={tablaInter} nombreForm="Contenido" />
    </>
  );
};
