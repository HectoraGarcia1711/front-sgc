import { z } from "zod";

export const schemaObservacionesPlanAuditoria = z.object({
  idObservacionesPlanAuditorias: z.number().optional(),
  observacion: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataObservacionesPlanAuditoria = z.infer<
  typeof schemaObservacionesPlanAuditoria
>;
