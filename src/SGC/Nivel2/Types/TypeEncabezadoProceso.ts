import { z } from "zod";

export const schemaEncabezadoProceso = z.object({
  idEnProceso: z.number().min(1, "numero no tiene que ser vacio").optional(),

  fechaElaboracion: z.string().min(1, "El Campo es Obligatorio"),

  fechaEdicion: z.string().min(1, "El Campo es Obligatorio"),

  noRevision: z.string().min(1, "El Campo es Obligatorio"),

  coDocumento: z.string().min(1, "El Campo es Obligatorio"),

  nombreProceso: z.string().min(1, "El Campo es Obligatorio"),

  coPie: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataEncabezadoProceso = z.infer<typeof schemaEncabezadoProceso>;
