import { z } from "zod";

export const schemaEncabezadoDNC = z.object({
  idDetecionNeCaDNC: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  coDocumento: z.string().min(1, "El Codigo es Obligatorio"),
  noRevision: z.string().min(1, "El Numero de Revision es Obligatorio"),
  fechaEmicion: z.string().min(1, "El Numero de Revision es Obligatorio"),
  fechaRevision: z.string().min(1, "El Numero de Revision es Obligatorio"),
});

export type FormDataEncabezadoDNC = z.infer<typeof schemaEncabezadoDNC>;
