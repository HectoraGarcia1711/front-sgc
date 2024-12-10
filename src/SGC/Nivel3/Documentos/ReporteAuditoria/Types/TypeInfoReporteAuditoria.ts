import { z } from "zod";

export const schemaInfoReporteAuditoria = z.object({
  idInfoReporteAuditoria: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  procesoAuditado: z.string().min(1, "El Campo Obligatorio"),
  responSGC: z.string().min(1, "El Campo Obligatorio"),
  fecha: z.string().min(1, "El Campo Obligatorio"),
  noAuditoria: z.string().min(1, "El Campo Obligatorio"),
  calificacion: z.string().min(1, "El Campo Obligatorio"),
});

export type FormDataInfoReporteAuditoria = z.infer<
  typeof schemaInfoReporteAuditoria
>;
