import { z } from "zod";

export const schemaEncabezadoPlanAuditoria = z.object({
  idPlanAuditoria: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  coDocumento: z.string().min(1, "El Campo es Obligatorio"),
  noRevision: z.string().min(1, "El Campo es Obligatorio"),
  fechaEmicion: z.string().min(1, "El Campo es Obligatorio"),
  fechaRevision: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataEncabezadoPlanAuditoria = z.infer<
  typeof schemaEncabezadoPlanAuditoria
>;
