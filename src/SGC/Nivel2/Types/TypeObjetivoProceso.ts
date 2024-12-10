import { z } from "zod";

export const schemaObjetivoProceso = z.object({
  idObjetivoProceso: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),

  contenido: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataObjetivoProceso = z.infer<typeof schemaObjetivoProceso>;
