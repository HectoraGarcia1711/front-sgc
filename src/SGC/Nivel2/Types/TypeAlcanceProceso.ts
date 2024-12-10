import { z } from "zod";

export const schemaAlcanceProceso = z.object({
  idAlcanceProceso: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),

  contenido: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataAlcanceProceso = z.infer<typeof schemaAlcanceProceso>;
