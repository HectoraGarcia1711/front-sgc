import { z } from "zod";

export const schemaEncabezadoConstanciaInduccion = z.object({
  idConstanciaInduccion: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  coDocumento: z.string().min(1, "El Codigo es Obligatorio"),
  noRevision: z.string().min(1, "El Numero de Revision es Obligatorio"),
  fecha: z.string().min(1, "El Numero de Revision es Obligatorio"),
});

export type FormDataEncabezadoConstanciaInduccion = z.infer<
  typeof schemaEncabezadoConstanciaInduccion
>;
