import { z } from "zod";

export const schemaModificacionesConDocEx = z.object({
  fechaCambio: z.string().min(1, "El Campo es Obligatorio"),
  edRev: z.string().min(1, "El Campo es Obligatorio"),
  cambiosRealizadosVerAn: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataModificacionesConDocEx = z.infer<
  typeof schemaModificacionesConDocEx
>;
