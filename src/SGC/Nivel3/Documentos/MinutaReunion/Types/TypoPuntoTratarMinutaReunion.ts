import { z } from "zod";

export const schemaPuntosTratarMinutaReunion = z.object({
  punto: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataPuntosTratarMinutaReunion = z.infer<
  typeof schemaPuntosTratarMinutaReunion
>;
