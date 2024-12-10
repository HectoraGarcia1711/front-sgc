import { z } from "zod";

export const schemaEncabezadoProAnuCapa = z.object({
  idProAnualCapacitacion: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  coDocumento: z.string().min(1, "El Campo es Obligatorio"),
  noRevision: z.string().min(1, "El Campo es Obligatorio"),
  fechaEmicion: z.string().min(1, "El Campo es Obligatorio"),
  fechaRevision: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataEncabezadoProAnuCapa = z.infer<
  typeof schemaEncabezadoProAnuCapa
>;