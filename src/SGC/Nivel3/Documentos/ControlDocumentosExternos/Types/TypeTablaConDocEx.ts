import { z } from "zod";

export const schemaTablaConDocEx = z.object({
  numero: z.string().min(1, "El Campo es Obligatorio"),
  externo: z.string().min(1, "El Campo es Obligatorio"),
  codigo: z.string().min(1, "El Campo es Obligatorio"),
  nombreDocumento: z.string().min(1, "El Campo es Obligatorio"),
  revision: z.string().min(1, "El Campo es Obligatorio"),
  fechaEmocion: z.string().min(1, "El Campo es Obligatorio"),
  fechaRevision: z.string().min(1, "El Campo es Obligatorio"),
  fechaUltimoCambio: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataTablaConDocEx = z.infer<typeof schemaTablaConDocEx>;
