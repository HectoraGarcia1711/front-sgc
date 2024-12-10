import { z } from "zod";

export const schemaDatosGeDNC = z.object({
  idDatosGeneralesDNC: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  nombre: z.string().min(1, "El Campo es Obligatorio"),
  puesto: z.string().min(1, "El Campo es Obligatorio"),
  antiguedadEmpresa: z.string().min(1, "El Campo es Obligatorio"),
  antiguedadPuesto: z.string().min(1, "El Campo es Obligatorio"),
  escolaridad: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataDatosGeDNC = z.infer<typeof schemaDatosGeDNC>;
