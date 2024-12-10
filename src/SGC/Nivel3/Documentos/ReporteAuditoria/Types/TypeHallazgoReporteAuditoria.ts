import { z } from "zod";

export const schemaHallazgoReporteAuditoria = z.object({
  idHallazgoReporteAuditoria: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  clausulaNorma: z.string().min(1, "El Campo Obligatorio"),
  tipoHallazgo: z.string().min(1, "El Campo Obligatorio"),
  comentario: z.string().min(1, "El Campo Obligatorio"),
});

export type FormDataHallazgoReporteAuditoria = z.infer<
  typeof schemaHallazgoReporteAuditoria
>;
