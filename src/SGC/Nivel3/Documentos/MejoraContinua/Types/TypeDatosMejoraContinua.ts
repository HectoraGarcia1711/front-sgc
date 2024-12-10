import { z } from "zod";

export const schemaDatosMejoraContinua = z.object({
  idDatosMejoraContinua: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),

  alcance: z.string().min(1, "El Campo es Obligatorio"),
  numeroControl: z.string().min(1, "El Campo es Obligatorio"),
  objetivo: z.string().min(1, "El Campo es Obligatorio"),
  origenMejora: z.string().min(1, "El Campo es Obligatorio"),
  descripcionAccion: z.string().min(1, "El Campo es Obligatorio"),
  descriocion: z.string().min(1, "El Campo es Obligatorio"),
  cuantificacion: z.string().min(1, "El Campo es Obligatorio"),
  periodo: z.string().min(1, "El Campo es Obligatorio"),
  tiempoInicial: z.string().min(1, "El Campo es Obligatorio"),
  tiempoFinal: z.string().min(1, "El Campo es Obligatorio"),
  resultado: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataDatosMejoraContinua = z.infer<
  typeof schemaDatosMejoraContinua
>;
