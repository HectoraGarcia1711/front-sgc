import { z } from "zod";

export const schemaDistribucionProceso = z.object({
  idDisProceso: z.number().min(1, "numero no tiene que ser vacio").optional(),

  contenido: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataDistribucionProceso = z.infer<
  typeof schemaDistribucionProceso
>;
