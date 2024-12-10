import { FormDataMetricasBSC } from "../../Types";
import React, { useState, useEffect } from "react";
import FormMetricasBSC from "./FormMetricasBSC";
import TableFormMetricasBSC from "./TableFormMetricasBSC";
import { Button, Box } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

type FormAndTableMetricasProps = {
  setTablaDisDoc: (
    updatedPartes: FormDataMetricasBSC[]
  ) => Promise<void> | void; // Cambiartipo
  initialData?: FormDataMetricasBSC[]; // Nueva prop opcional para datos iniciales
};

export const FormAndTableMetricas: React.FC<FormAndTableMetricasProps> = ({
  setTablaDisDoc,
  initialData = [], // Por defecto un array vacío
}) => {
  const [tablaDisDocInter, setTablaDisDocInter] =
    useState<FormDataMetricasBSC[]>(initialData);
  const [selectedRecord, setSelectedRecord] =
    useState<FormDataMetricasBSC | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Si initialData puede cambiar después de montar el componente:
  useEffect(() => {
    // Solo actualiza el estado si initialData tiene registros
    // y además es diferente a lo que ya teníamos
    if (initialData.length > 0) {
      setTablaDisDocInter(initialData);
    }
  }, [initialData]);

  const handleAddRecord = (newRecord: FormDataMetricasBSC) => {
    const recordWithTempId = { ...newRecord, tempId: uuidv4() }; // Genera un ID único
    setTablaDisDocInter((prev) => {
      const updated = [...prev, recordWithTempId];
      setTablaDisDoc(updated);
      return updated;
    });
    setIsOpen(false);
  };

  const handleEditRecord = (updatedRecord: FormDataMetricasBSC) => {
    setTablaDisDocInter((prev) => {
      const updated = prev.map((item) =>
        item.tempId === updatedRecord.tempId ? updatedRecord : item
      );
      setTablaDisDoc(updated);
      return updated;
    });
    setSelectedRecord(null);
    setIsOpen(false);
  };

  const handleDeleteRecord = (tempId: string) => {
    setTablaDisDocInter((prev) => {
      const updated = prev.filter((item) => item.tempId !== tempId);
      setTablaDisDoc(updated);
      return updated;
    });
  };

  return (
    <Box>
      <Button
        colorScheme="blue"
        mb={4}
        onClick={() => {
          setSelectedRecord(null); // Limpia cualquier selección previa
          setIsOpen(true); // Abre el formulario en modo de registro
        }}
      >
        Registrar Nuevo
      </Button>
      <TableFormMetricasBSC
        data={tablaDisDocInter}
        onEdit={(record) => {
          setSelectedRecord(record); // Selecciona el registro para editar
          setIsOpen(true); // Abre el formulario en modo edición
        }}
        onDelete={(tempId) => handleDeleteRecord(tempId)}
      />
      <FormMetricasBSC
        onAddRecord={selectedRecord ? handleEditRecord : handleAddRecord}
        initialData={selectedRecord || undefined}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setSelectedRecord(null);
        }}
      />
    </Box>
  );
};
