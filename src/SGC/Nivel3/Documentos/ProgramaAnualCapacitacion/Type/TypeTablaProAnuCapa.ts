import { z } from "zod";

export const schemaTablaProAnuCapa = z.object({
  id: z.number().min(1, "numero no tiene que ser vacio").optional(),
  titulo: z.string().min(1, "El Campo es Obligatorio"),
  perDepartamento: z.string().min(1, "El Campo es Obligatorio"),
  tipo: z.string().min(1, "El Campo es Obligatorio"),
  capacitador: z.string().min(1, "El Campo es Obligatorio"),
  duracion: z.string().min(1, "El Campo es Obligatorio"),
  estatus: z.string().min(1, "El Campo es Obligatorio"),
  fecha: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataTablaProAnuCapa = z.infer<typeof schemaTablaProAnuCapa>;
