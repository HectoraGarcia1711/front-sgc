import { z } from "zod";

export const schemaHisRevicionProceso = z.object({
  idHisRevisionProceso: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),

  numeroRevision: z.string().min(1, "El Campo es Obligatorio"),
  fecha: z.string().min(1, "El Campo es Obligatorio"),
  seccionAfectada: z.string().min(1, "El Campo es Obligatorio"),
  efectuadoPor: z.string().min(1, "El Campo es Obligatorio"),
  fechaEjecucion: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataHisRevicionProceso = z.infer<
  typeof schemaHisRevicionProceso
>;
