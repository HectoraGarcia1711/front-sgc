import { z } from "zod";

export const schemaDatosPlanAuditoria = z.object({
  idDatosPlanAuditoria: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  objetivoAuditoria: z.string().min(1, "El Campo es Obligatorio"),
  alcanceAuditoria: z.string().min(1, "El Campo es Obligatorio"),
  criteriosAuditorias: z.string().min(1, "El Campo es Obligatorio"),
  fechaElaboracion: z.string().min(1, "El Campo es Obligatorio"),
  noAuditoria: z.string().min(1, "El Campo es Obligatorio"),
  fechaInicio: z.string().min(1, "El Campo es Obligatorio"),
  fechaTermino: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataDatosPlanAuditoria = z.infer<
  typeof schemaDatosPlanAuditoria
>;
