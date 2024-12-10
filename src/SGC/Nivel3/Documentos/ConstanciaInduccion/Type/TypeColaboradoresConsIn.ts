import { z } from "zod";

export const schemaColaboradoresConstanciaInduccion = z.object({
  idColaboradoresConsIndu: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  nombre: z.string().min(1, "El Codigo es Obligatorio"),
  puesto: z.string().min(1, "El Numero de Revision es Obligatorio"),
  firma: z.string().min(1, "El Numero de Revision es Obligatorio"),
});

export type FormDataColaboradoresConstanciaInduccion = z.infer<
  typeof schemaColaboradoresConstanciaInduccion
>;
