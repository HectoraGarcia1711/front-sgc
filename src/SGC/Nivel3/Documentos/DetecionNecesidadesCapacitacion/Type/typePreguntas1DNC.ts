import { z } from "zod";

export const schemaPreguntas1DNC = z.object({
  idPreguntas1DNC: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  contenido1: z.string().min(1, "El Campo es Obligatorio"),
  contenido2: z.string().min(1, "El Campo es Obligatorio"),
  contenido3: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataPreguntas1DNC = z.infer<typeof schemaPreguntas1DNC>;
