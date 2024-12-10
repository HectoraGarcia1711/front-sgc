import { z } from "zod";

export const schemaTablaLisVerificacion = z.object({
  numero: z.string().min(1, "El Numero de Revision es Obligatorio"),
  contextoOrganizacion: z
    .string()
    .min(1, "El Numero de Revision es Obligatorio"),
  marcador: z.string().min(1, "El Numero de Revision es Obligatorio"),
  evidenciasAllasgos: z.string().min(1, "El Numero de Revision es Obligatorio"),
});

export type FormDataTablaLisVerificacion = z.infer<
  typeof schemaTablaLisVerificacion
>;
