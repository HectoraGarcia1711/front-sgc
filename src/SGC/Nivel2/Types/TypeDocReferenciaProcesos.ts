import { z } from "zod";

export const schemaDoReferenciaProceso = z.object({
  idDoReferenciaProceso: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),

  coDocumento: z.string().min(1, "El Campo es Obligatorio"),
  nombreDocumento: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataDoReferenciaProceso = z.infer<
  typeof schemaDoReferenciaProceso
>;
