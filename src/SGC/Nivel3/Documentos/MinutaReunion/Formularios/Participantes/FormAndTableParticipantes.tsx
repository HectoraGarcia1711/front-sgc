import { useState } from "react";
import { FormDataParticipantesMinutaReunion } from "../../Types";
import FormParticipantesMinutaReunion from "./FormParticipantesMinutaReunion";
import TablaGeneralPuntosMinutaReunion from "../TablaGeneralPuntosMinutaReunion";

export type FormTablaAndFormDistribucionDocTablaProps = {
  setTabla: React.Dispatch<
    React.SetStateAction<FormDataParticipantesMinutaReunion[]>
  >;
};

export const FormAndtableParticipantes: React.FC<
  FormTablaAndFormDistribucionDocTablaProps
> = ({ setTabla }) => {
  const [tablaInter, setTablaInter] = useState<
    FormDataParticipantesMinutaReunion[]
  >([]);
  // Función para agregar un nuevo registro al estado
  //const handleAddRecord = (newRecord: FormDataParticipantesMinutaReunion) => {
  //  setTablaInter((prev) => [...prev, newRecord]);
  //  setTabla(tablaInter);
  //  console.log("Registros de la tabla", tablaInter);
  //};
  const handleAddRecord = (newRecord: FormDataParticipantesMinutaReunion) => {
    setTablaInter((prev) => {
      const updatedTable = [...prev, newRecord];
      setTabla(updatedTable); // Usa el nuevo valor de la tabla
      console.log("Registros de la tabla", updatedTable); // Muestra el estado actualizado
      return updatedTable;
    });
  };

  // Mapea `tablaInter` al formato esperado por `TablaGeneralPuntosMinutaReunion`
  const dataParaTabla = tablaInter.map((item) => ({
    info: item.nombre, // Ajusta `nombreParticipante` al campo que quieres mostrar
  }));

  return (
    <>
      <FormParticipantesMinutaReunion onAddRecord={handleAddRecord} />

      <TablaGeneralPuntosMinutaReunion
        data={dataParaTabla}
        nombreColum="Nombre Participante "
      />
    </>
  );
};
