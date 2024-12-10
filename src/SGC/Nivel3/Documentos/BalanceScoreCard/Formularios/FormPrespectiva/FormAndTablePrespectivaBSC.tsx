import React, { useState } from "react";
import {
  FormDataPrespectivaBSC,
  FormDataPartesInteresadasBSC,
  FormDataMetricasBSC,
} from "../../Types";
import FormPrespectivaBSC from "./FormPrespectivaBSC";
import TablaPrespectivaBSC from "./TablaPrespectivaBSC";
import { FormAndTablePartesInBSC } from "../FormPartesIntesadas/FormAndTablePartesInBSC";
import { FormAndTableMetricas } from "../FormMetricasBSC/FormAndTableMetricas";
import { Button, Popover, PopoverBody, PopoverContent } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import ModalGlobal from "../../../../../../ComponentesGlobales/ModalGlobal";

type FormAndTablePrespectivaBSCProps = {
  setTablaDisDoc: (
    updatedPartes: FormDataPrespectivaBSC[]
  ) => Promise<void> | void; // Cambiartipo

  setPartesIn: (
    updatedPartes: FormDataPartesInteresadasBSC[]
  ) => Promise<void> | void; // Cambiartipo
  setMetricasBSC: (
    updatedPartes: FormDataMetricasBSC[]
  ) => Promise<void> | void; // Cambiartipo
};

export function FormAndTablePrespectivaBSC({
  setTablaDisDoc,
  setPartesIn,
  setMetricasBSC,
}: FormAndTablePrespectivaBSCProps) {
  const [tablaDisDocInter, setTablaDisDocInter] = useState<
    FormDataPrespectivaBSC[]
  >([]);
  const [selectedRecord, setSelectedRecord] =
    useState<FormDataPrespectivaBSC | null>(null);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isTwoStepModalOpen, setIsTwoStepModalOpen] = useState(false);

  // Función para agregar una nueva perspectiva
  const handleAddRecord = (newRecord: FormDataPrespectivaBSC) => {
    const newWithId = {
      ...newRecord,
      tempId: uuidv4(),
      partesInteresadas: [],
      metricasBSCList: [],
    };
    setTablaDisDocInter((prev) => {
      const updated = [...prev, newWithId];
      setTablaDisDoc(updated);
      return updated;
    });
  };

  // Función para editar una perspectiva existente
  const handleEditRecord = (updatedRecord: FormDataPrespectivaBSC) => {
    setTablaDisDocInter((prev) => {
      const updated = prev.map((item) =>
        item.tempId === updatedRecord.tempId ? updatedRecord : item
      );
      setTablaDisDoc(updated);
      return updated;
    });

    setSelectedRecord((prev) =>
      prev
        ? {
            ...prev,
            ...updatedRecord,
            partesInteresadas: updatedRecord.partesInteresadas || [], // Asegura que sea un array
            metricasBSCList: updatedRecord.metricasBSCList || [], // Asegura que sea un array
          }
        : null
    );
  };

  return (
    <>
      <Button
        colorScheme="blue"
        onClick={() => {
          setSelectedRecord(null);
          setIsPopoverOpen(true); // Crear nueva perspectiva
        }}
      >
        Registrar Nueva Perspectiva
      </Button>

      <TablaPrespectivaBSC
        data={tablaDisDocInter}
        onEdit={(record) => {
          // Configuramos selectedRecord incluyendo siempre partesInteresadas y metricasBSCList
          setSelectedRecord({
            ...record,
            partesInteresadas: record.partesInteresadas || [],
            metricasBSCList: record.metricasBSCList || [],
          });
          setIsPopoverOpen(true); // Editar perspectiva
        }}
        onDelete={(tempId) => {
          setTablaDisDocInter((prev) => {
            const updated = prev.filter((item) => item.tempId !== tempId);
            setTablaDisDoc(updated);
            return updated;
          });
        }}
      />

      {/* Popover para crear/editar perspectiva */}
      {isPopoverOpen && (
        <Popover isOpen={isPopoverOpen} onClose={() => setIsPopoverOpen(false)}>
          <PopoverContent>
            <PopoverBody>
              <FormPrespectivaBSC
                initialData={selectedRecord || undefined}
                onAddRecord={(data) => {
                  const validData = {
                    ...data,
                    partesInteresadas: data.partesInteresadas || [], // Validar array
                    metricasBSCList: data.metricasBSCList || [], // Validar array
                  };

                  if (selectedRecord) {
                    handleEditRecord(validData);
                  } else {
                    handleAddRecord(validData);
                  }

                  setIsPopoverOpen(false);
                  setIsTwoStepModalOpen(true);
                }}
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}

      {/* Modal Global de 2 pasos (Partes Interesadas y Métricas) */}
      <ModalGlobal
        title="Agregar/Editar Información Adicional"
        isOpen={isTwoStepModalOpen}
        onClose={() => setIsTwoStepModalOpen(false)}
        forms={[
          <FormAndTablePartesInBSC
            setTablaDisDoc={setPartesIn}
            key="partes"
            initialData={selectedRecord?.partesInteresadas || []}
          />,
          <FormAndTableMetricas
            setTablaDisDoc={setMetricasBSC}
            key="metricas"
            initialData={selectedRecord?.metricasBSCList || []}
          />,
        ]}
      />
    </>
  );
}
