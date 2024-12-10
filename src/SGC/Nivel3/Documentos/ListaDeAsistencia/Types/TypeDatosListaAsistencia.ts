import { z } from "zod";

export const schemaDatosListaAsistencia = z.object({
  idDatosListaAsistencia: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  departamentoCoordinador: z.string().min(1, "El Campo es Obligatorio"),
  responable: z.string().min(1, "El Campo es Obligatorio"),
  titulo: z.string().min(1, "El Campo es Obligatorio"),
  fecha: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataDatosListaAsistencia = z.infer<
  typeof schemaDatosListaAsistencia
>;
