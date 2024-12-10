import { z } from "zod";

export const schemaEvaluacionEficienciaMejoraContinua = z.object({
  idEvaluacionEficienciaMejoraContinua: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  preguntaSeCumAccPro: z.string().min(1, "El Campo es Obligatorio"),
  observacion1: z.string().min(1, "El Campo es Obligatorio"),

  preguntaAunHayAccPen: z.string().min(1, "El Campo es Obligatorio"),
  observacion2: z.string().min(1, "El Campo es Obligatorio"),

  preguntaSeReAc: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataEvaluacionEficienciaMejoraContinua = z.infer<
  typeof schemaEvaluacionEficienciaMejoraContinua
>;
