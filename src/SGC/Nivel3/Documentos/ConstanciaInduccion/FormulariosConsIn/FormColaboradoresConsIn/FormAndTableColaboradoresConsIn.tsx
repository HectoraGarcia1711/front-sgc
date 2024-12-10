import { useState } from "react";
import { FormDataColaboradoresConstanciaInduccion } from "../../Type";
import FormColaboradoresConsIn from "./FormColaboradoresConsIn";
import TablaColaboradoresConsIn from "./TablaColaboradoresConsIn";

export type FormAndTableColaboradoresConsInProps = {
  setTabla: React.Dispatch<
    React.SetStateAction<FormDataColaboradoresConstanciaInduccion[]>
  >;
};

export const FormAndTableColaboradoresConsIn: React.FC<
  FormAndTableColaboradoresConsInProps
> = ({ setTabla }) => {
  const [tablaInter, setTablaInter] = useState<
    FormDataColaboradoresConstanciaInduccion[]
  >([]);
  // Función para agregar un nuevo registro al estado
  //const handleAddRecord = (newRecord: FormDataColaboradoresConstanciaInduccion) => {
  //  setTablaInter((prev) => [...prev, newRecord]);
  //  setTabla(tablaInter);
  //  console.log("Registros de la tabla", tablaInter);
  //};
  const handleAddRecord = (
    newRecord: FormDataColaboradoresConstanciaInduccion
  ) => {
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
      <FormColaboradoresConsIn onAddRecord={handleAddRecord} />

      <TablaColaboradoresConsIn data={tablaInter} nombreForm="Contenido" />
    </>
  );
};
