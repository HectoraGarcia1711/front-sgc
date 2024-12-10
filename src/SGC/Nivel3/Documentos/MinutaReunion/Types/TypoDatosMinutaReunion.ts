import { z } from "zod";

export const schemaDatosMinutaReunion = z.object({
  fecha: z.string().min(1, "El Campo es Obligatorio"),
  departamento: z.string().min(1, "El Campo es Obligatorio"),
  asuntoATratar: z.string().min(1, "El Campo de Revision es Obligatorio"),
});

export type FormDataDatosMinutaReunion = z.infer<
  typeof schemaDatosMinutaReunion
>;
