import { z } from "zod";

export const schemaParticipantesMinutaReunion = z.object({
  nombre: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataParticipantesMinutaReunion = z.infer<
  typeof schemaParticipantesMinutaReunion
>;
