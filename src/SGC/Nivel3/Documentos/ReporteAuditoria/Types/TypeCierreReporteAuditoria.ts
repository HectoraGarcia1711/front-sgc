import { z } from "zod";

export const schemaCierreReporteAuditoria = z.object({
  idCierreReporteAuditoria1: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  nombreAuditor: z.string().min(1, "El Campo Obligatorio"),
  firma: z.string().min(1, "El Campo Obligatorio"),
});

export const schemaCierreReporteAuditoria1 = schemaCierreReporteAuditoria;

export type FormDataCierreReporteAuditoria = z.infer<
  typeof schemaCierreReporteAuditoria
>;

//export type FormDataProcesosLisMaDoc = z.infer<typeof schemaProcesos>;
export type FormDataCierreReporteAuditoria1 = z.infer<typeof schemaCierreReporteAuditoria1>