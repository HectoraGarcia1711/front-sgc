import { z } from "zod";

export const schemaReAcuerdosMinutaReunion = z.object({
  contenido: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataReAcuerdosMinutaReunion = z.infer<
  typeof schemaReAcuerdosMinutaReunion
>;
