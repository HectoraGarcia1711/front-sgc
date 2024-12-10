import { z } from "zod";

export const schemaColaboradorConstanciaInduccion = z.object({
  idColaboradorConsInduc: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  nombre: z.string().min(1, "El Codigo es Obligatorio"),
  firma: z.string().min(1, "El Numero de Revision es Obligatorio"),
});

export type FormDataColaboradorConstanciaInduccion = z.infer<
  typeof schemaColaboradorConstanciaInduccion
>;
