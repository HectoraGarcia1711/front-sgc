import { z } from "zod";

export const schemaDescripcionDocumentos = z.object({
  descripcion: z.string().min(1, "El Campo es Obligatorio"),
  documento: z.string().min(1, "El Campo es Obligatorio"),
  area: z.string().min(1, "El Campo es Obligatorio"),
  codigoDocumento: z.string().min(1, "El Campo es Obligatorio"),
  revision: z.string().min(1, "El Campo es Obligatorio"),
  fechaImplantacion: z.coerce.date({
    required_error: "El Campo es Obligatorio",
  }),
});

export type FormDataDescripcionDocumentos = z.infer<
  typeof schemaDescripcionDocumentos
>;
