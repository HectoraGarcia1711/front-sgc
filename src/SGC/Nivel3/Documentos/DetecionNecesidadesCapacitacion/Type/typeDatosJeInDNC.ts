import { z } from "zod";

export const schemaDatosJeInDNC = z.object({
  idDatosJefeInmediatoDNC: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  nombre: z.string().min(1, "El Campo es Obligatorio"),
  puesto: z.string().min(1, "El Campo es Obligatorio"),
  area: z.string().min(1, "El Campo es Obligatorio"),
  fecha: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataDatosJeInDNC = z.infer<typeof schemaDatosJeInDNC>;
