import { useState } from "react";
import { FormDataPuntosTratarMinutaReunion } from "../../Types";
import FormPuntosTratarMinutaReunion from "./FormPuntosTratarMinutaReunion";
import TablaGeneralPuntosMinutaReunion from "../TablaGeneralPuntosMinutaReunion";

type FormTablaAndFormDistribucionDocTablaProps = {
  setPuntos: React.Dispatch<
    React.SetStateAction<FormDataPuntosTratarMinutaReunion[]>
  >;
};

export const FormAndTablePuntosTratar: React.FC<
  FormTablaAndFormDistribucionDocTablaProps
> = ({ setPuntos }) => {
  const [tablaInter, setTablaInter] = useState<
    FormDataPuntosTratarMinutaReunion[]
  >([]);

  // Función para agregar un nuevo registro al estado
  //const handleAddRecord = (newRecord: FormDataPuntosTratarMinutaReunion) => {
  //  setTablaInter((prev) => [...prev, newRecord]);
  //  setTabla(tablaInter);
  //  console.log("Registros de la tabla", tablaInter);
  //};
  const handleAddRecord = (newRecord: FormDataPuntosTratarMinutaReunion) => {
    setTablaInter((prev) => {
      const updatedTable = [...prev, newRecord];
      setPuntos(updatedTable); // Usa el nuevo valor de la tabla
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado
      return updatedTable;
    });
  };

  // Mapea `tablaInter` al formato esperado por `TablaGeneralPuntosMinutaReunion`
  const dataParaTabla = tablaInter.map((item) => ({
    info: item.punto, // Ajusta `nombreParticipante` al campo que quieres mostrar
  }));
  return (
    <>
      <FormPuntosTratarMinutaReunion onAddRecord={handleAddRecord} />

      <TablaGeneralPuntosMinutaReunion
        nombreColum="Puntos a Tratar"
        data={dataParaTabla}
      />
    </>
  );
};
