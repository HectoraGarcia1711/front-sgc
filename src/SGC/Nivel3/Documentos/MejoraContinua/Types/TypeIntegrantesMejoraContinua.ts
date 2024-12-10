import { z } from "zod";

export const schemaIntegrantesMejoraContinua = z.object({
  idIntegrantesMejoraContinua: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),

  integrante: z.string().min(1, "El Campo es Obligatorio"),
  puesto: z.string().min(1, "El Campo es Obligatorio"),
  firma: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataIntegrantesMejoraContinua = z.infer<
  typeof schemaIntegrantesMejoraContinua
>;
