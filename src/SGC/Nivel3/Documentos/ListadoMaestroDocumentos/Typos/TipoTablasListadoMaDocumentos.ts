import { z } from "zod";

export const schemaProcesos = z.object({
  codigo: z.string().min(1, "El Codigo es Obligatorio"),
  nombredocumento: z.string().min(1, "El Codigo es Obligatorio"),
  departamento: z.string().min(1, "El Codigo es Obligatorio"),
  responsable: z.string().min(1, "El Codigo es Obligatorio"),
  noRevision: z.string().min(1, "El Codigo es Obligatorio"),
  elaborado: z.string().min(1, "El Codigo es Obligatorio"),
  revisado: z.string().min(1, "El Codigo es Obligatorio"),
  modificado: z.string().min(1, "El Codigo es Obligatorio"),
});

export const schemaFormatos = schemaProcesos;
export const schemaAnexos = schemaProcesos;

export type FormDataProcesosLisMaDoc = z.infer<typeof schemaProcesos>;
export type FormDataFormatosLisMaDoc = z.infer<typeof schemaFormatos>;
export type FormDataAnexosLisMaDoc = z.infer<typeof schemaAnexos>;
