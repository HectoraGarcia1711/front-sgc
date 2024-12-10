import { z } from "zod";

export const schemaCuerpoPlanAuditoria = z.object({
  idCuerpoPlanAuditoria: z.number().optional(),
  inicio: z.string().min(1, "El Campo es Obligatorio"),
  termino: z.string().min(1, "El Campo es Obligatorio"),
  procesoAuditar: z.string().min(1, "El Campo es Obligatorio"),
  requisitosNorma: z.string().min(1, "El Campo es Obligatorio"),
  contraparteAuditada: z.string().min(1, "El Campo es Obligatorio"),
  auditor: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataCuerpoPlanAuditoria = z.infer<
  typeof schemaCuerpoPlanAuditoria
>;
