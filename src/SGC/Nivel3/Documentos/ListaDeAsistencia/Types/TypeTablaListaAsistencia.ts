import { z } from "zod";

export const schemaTablaListaAsistencia = z.object({
  idTablaListaAsistencia: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  nombreParticipante: z.string().min(1, "El Campo es Obligatorio"),
  puesto: z.string().min(1, "El Campo es Obligatorio"),
  firma: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataTablaListaAsistencia = z.infer<
  typeof schemaTablaListaAsistencia
>;
