import { useState } from "react";
import { FormDataReAcuerdosMinutaReunion } from "../../Types";
import FormResultadosMinutaReunion from "./FormResultadosMinutaReunion";
import TablaGeneralPuntosMinutaReunion from "../TablaGeneralPuntosMinutaReunion";

type FormTablaAndFormProps = {
  setResultados: React.Dispatch<
    React.SetStateAction<FormDataReAcuerdosMinutaReunion[]>
  >;
};

export const FormAndTableResultados: React.FC<FormTablaAndFormProps> = ({
  setResultados,
}) => {
  const [tablaInter, setTablaInter] = useState<
    FormDataReAcuerdosMinutaReunion[]
  >([]);

  // Función para agregar un nuevo registro al estado
  //const handleAddRecord = (newRecord: FormDataReAcuerdosMinutaReunion) => {
  //  setTablaInter((prev) => [...prev, newRecord]);
  //  setTabla(tablaInter);
  //  console.log("Registros de la tabla", tablaInter);
  //};
  const handleAddRecord = (newRecord: FormDataReAcuerdosMinutaReunion) => {
    setTablaInter((prev) => {
      const updatedTable = [...prev, newRecord];
      setResultados(updatedTable); // Usa el nuevo valor de la tabla
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado
      return updatedTable;
    });
  };

  // Mapea `tablaInter` al formato esperado por `TablaGeneralPuntosMinutaReunion`
  const dataParaTabla = tablaInter.map((item) => ({
    info: item.contenido, // Ajusta `nombreParticipante` al campo que quieres mostrar
  }));
  return (
    <>
      <FormResultadosMinutaReunion onAddRecord={handleAddRecord} />

      <TablaGeneralPuntosMinutaReunion
        nombreColum="Resultados Y Acuerdos:"
        data={dataParaTabla}
      />
    </>
  );
};
