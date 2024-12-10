import { z } from "zod";
import { schemaPrespectivaBSC } from "./TypeBalanceSCPrespectiva";

export const schemaEncabezadoBSC = z.object({
  idBalanceScoreCard: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  coDocumento: z.string().min(1, "El Codigo es Obligatorio"),
  noRevision: z.string().min(1, "El Numero de Revision es Obligatorio"),
  fechaEmicion: z.string().min(1, "El Numero de Revision es Obligatorio"),
  fechaRevision: z.string().min(1, "El Numero de Revision es Obligatorio"),
  balanceSCPrespectivas: z.array(schemaPrespectivaBSC).optional(),
});

export type FormDataEncabezadoBSC = z.infer<typeof schemaEncabezadoBSC>;
