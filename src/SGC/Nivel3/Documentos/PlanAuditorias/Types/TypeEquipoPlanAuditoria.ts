import { z } from "zod";

export const schemaEquipoPlanAuditoria = z.object({
  idEquipoAuditorPlanAuditoriauditoria: z.number().optional(),
  auditorLider: z.string().min(1, "El Campo es Obligatorio"),
  auditores: z.string().min(1, "El Campo es Obligatorio"),
  auditoresEntrenamiento: z.string().optional(),
});

export type FormDataEquipoPlanAuditoria = z.infer<
  typeof schemaEquipoPlanAuditoria
>;
