import { z } from "zod";

export const schemaSeguiAcMinutaReunion = z.object({
  contenido: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataSeguiAcMinutaReunion = z.infer<
  typeof schemaSeguiAcMinutaReunion
>;
