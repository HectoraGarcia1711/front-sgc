import { z } from "zod";

export const schemaResponsabilidadesProceso = z.object({
  idResponsaProceso: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),

  responsable: z.string().min(1, "El Campo es Obligatorio"),
  responsabilidades: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataResponsabilidadesProceso = z.infer<
  typeof schemaResponsabilidadesProceso
>;
