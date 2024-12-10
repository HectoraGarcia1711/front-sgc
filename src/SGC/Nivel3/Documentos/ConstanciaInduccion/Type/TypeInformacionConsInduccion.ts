import { z } from "zod";

export const schemaInfoConstanciaInduccion = z.object({
  idInformacionConsIndu: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  info: z.string().min(1, "El Codigo es Obligatorio"),
  respuesta: z.string().min(1, "El Numero de Revision es Obligatorio"),
});

export type FormDataInfoConstanciaInduccion = z.infer<
  typeof schemaInfoConstanciaInduccion
>;
