import { z } from "zod";

export const schemaTablaMejoraContinua = z.object({
  idTablaMejoraContinua: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  queSeVaHacer: z.string().min(1, "El Campo es Obligatorio"),
  metaEsperada: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataTablaMejoraContinua = z.infer<
  typeof schemaTablaMejoraContinua
>;
