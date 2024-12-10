import { z } from "zod";

export const schemaDescripcionDocTablaData = z.object({
  nombreReceptor: z.string().min(1, "El Campo es Obligatorio"),
  puesto: z.string().min(1, "El Campo es Obligatorio"),
  firma: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataDistribucionDocTablaData = z.infer<
  typeof schemaDescripcionDocTablaData
>;
