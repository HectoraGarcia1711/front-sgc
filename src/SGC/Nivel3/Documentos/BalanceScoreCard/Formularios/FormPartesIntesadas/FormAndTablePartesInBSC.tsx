import { FormDataPartesInteresadasBSC } from "../../Types";
import React, { useState, useEffect } from "react";
import FormPartesInBSC from "./FormPartesInBSC";
import TablaPartesInBSC from "./TablaPartesInBSC";
import { Button } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

type FormAndTablePartesInBSCProps = {
  setTablaDisDoc: (
    updatedPartes: FormDataPartesInteresadasBSC[]
  ) => Promise<void> | void; // Cambiartipo
  initialData?: FormDataPartesInteresadasBSC[]; // <-- Agregamos esta prop
};

export const FormAndTablePartesInBSC: React.FC<
  FormAndTablePartesInBSCProps
> = ({
  setTablaDisDoc,
  initialData = [], // Valor por defecto si no se pasa nada
}) => {
  const [tablaDisDocInter, setTablaDisDocInter] =
    useState<FormDataPartesInteresadasBSC[]>(initialData);
  const [selectedRecord, setSelectedRecord] =
    useState<FormDataPartesInteresadasBSC | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Si initialData puede cambiar después de montar el componente, puedes usar useEffect:
  useEffect(() => {
    // Solo actualiza el estado si initialData tiene registros
    // y además es diferente a lo que ya teníamos
    if (initialData.length > 0) {
      setTablaDisDocInter(initialData);
    }
  }, [initialData]);

  const handleAddRecord = (newRecord: FormDataPartesInteresadasBSC) => {
    const recordWithTempId = { ...newRecord, tempId: uuidv4() };
    setTablaDisDocInter((prev) => {
      const updated = [...prev, recordWithTempId];
      setTablaDisDoc(updated); // Puede ser una función personalizada
      return updated;
    });
    setIsOpen(false);
  };

  const handleEditRecord = (updatedRecord: FormDataPartesInteresadasBSC) => {
    setTablaDisDocInter((prev) => {
      const updated = prev.map((item) =>
        item.tempId === updatedRecord.tempId ? updatedRecord : item
      );
      setTablaDisDoc(updated); // Puede ser una función personalizada
      return updated;
    });
    setSelectedRecord(null);
    setIsOpen(false);
  };

  const handleDeleteRecord = (nombre: string) => {
    setTablaDisDocInter((prev) => {
      const updated = prev.filter((item) => item.nombre !== nombre);
      setTablaDisDoc(updated);
      return updated;
    });
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Registrar Nuevo</Button>
      <TablaPartesInBSC
        data={tablaDisDocInter}
        onEdit={(record) => {
          console.log("Registro seleccionado para editar:", record);
          setSelectedRecord(record);
          setIsOpen(true);
        }}
        onDelete={handleDeleteRecord}
      />
      <FormPartesInBSC
        onAddRecord={selectedRecord ? handleEditRecord : handleAddRecord}
        initialData={selectedRecord || undefined}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setSelectedRecord(null);
        }}
      />
    </>
  );
};
