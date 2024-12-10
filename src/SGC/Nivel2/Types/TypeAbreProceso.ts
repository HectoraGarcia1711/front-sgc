import { z } from "zod";

export const schemaAbreProceso = z.object({
  idAbreProceso: z.number().min(1, "numero no tiene que ser vacio").optional(),

  abreviaciones: z.string().min(1, "El Campo es Obligatorio"),
  definicion: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataAbreProceso = z.infer<typeof schemaAbreProceso>;
