import { z } from "zod";

export const schemaDiTortugaProceso = z.object({
  idDiTortuga: z.number().min(1, "numero no tiene que ser vacio").optional(),

  nombreProceso: z.string().min(1, "El Campo es Obligatorio"),
  descripcion: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataDiTortugaProceso = z.infer<typeof schemaDiTortugaProceso>;
