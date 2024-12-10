import { z } from "zod";

export const schemaMetricasBSC = z.object({
  idMetricasBSC: z.number().optional(), // Este es el ID real asignado por el backend
  tempId: z.string().optional(), // Identificador temporal
  objetivo: z.string().min(1, "El Campo es Obligatorio"),
  meta: z.number().min(1, "Campo Obligatorio"),
  frecuencia: z.string().min(1, "El Campo es Obligatorio"),
  responsable: z.string().min(1, "El Campo es Obligatorio"),
  estadoActual: z.number().min(1, "Campo Obligatorio"),
});

export type FormDataMetricasBSC = z.infer<typeof schemaMetricasBSC>;
