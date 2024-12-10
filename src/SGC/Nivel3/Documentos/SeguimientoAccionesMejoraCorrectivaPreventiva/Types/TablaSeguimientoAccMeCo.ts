import { z } from "zod";

export const schemaTablaSeAcMeCoPre = z.object({
  hallazgo: z.string().min(1, "El Hallazgo es Obligatorio"),
  evidenciasObservadas: z.string().min(1, "Las Evidencia son Obligatoria"),
  responsableAreaImplantacion: z
    .string()
    .min(1, "El Responsable es Obligatorio"),
  fechaInicio: z.string().min(1, "La Fecha de Inicio es Obligatoria"),
  fechaTermino: z.string().min(1, "La Fecha de Terminación es Obligatoria"),
  avance: z.string().min(1, "El Avance es Obligatorio"),
  revisionValoracion: z.string().min(1, "La Revision es Obligatoria"),
});

export type FormDataTablaSeAcMeCoPre = z.infer<typeof schemaTablaSeAcMeCoPre>;
