import { useState } from "react";
import { FormDataSeguiAcMinutaReunion } from "../../Types";
import FormSeguimientoMinutaReunion from "./FormSeguimientoMinutaReunion";
import TablaGeneralPuntosMinutaReunion from "../TablaGeneralPuntosMinutaReunion";

type FormTablaAndFormProps = {
  setSeguimiento: React.Dispatch<
    React.SetStateAction<FormDataSeguiAcMinutaReunion[]>
  >;
};

export const FormAndTableSeguimiento: React.FC<FormTablaAndFormProps> = ({
  setSeguimiento,
}) => {
  const [tablaInter, setTablaInter] = useState<FormDataSeguiAcMinutaReunion[]>(
    []
  );

  // Función para agregar un nuevo registro al estado
  //const handleAddRecord = (newRecord: FormDataSeguiAcMinutaReunion) => {
  //  setTablaInter((prev) => [...prev, newRecord]);
  //  setTabla(tablaInter);
  //  console.log("Registros de la tabla", tablaInter);
  //};
  const handleAddRecord = (newRecord: FormDataSeguiAcMinutaReunion) => {
    setTablaInter((prev) => {
      const updatedTable = [...prev, newRecord];
      setSeguimiento(updatedTable); // Usa el nuevo valor de la tabla
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
      <FormSeguimientoMinutaReunion onAddRecord={handleAddRecord} />

      <TablaGeneralPuntosMinutaReunion
        nombreColum="Resultados Y Acuerdos:"
        data={dataParaTabla}
      />
    </>
  );
};
