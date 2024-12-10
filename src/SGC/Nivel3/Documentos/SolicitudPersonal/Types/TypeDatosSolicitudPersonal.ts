import { z } from "zod";

export const schemaDatosSolicitudPersonal = z.object({
    idDatosSolicitudPersonal: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
    nombre: z.string().min(1, "El Campo es Obligatorio"),
    cargo: z.string().min(1, "El Campo es Obligatorio"),
    areaActual: z.string().min(1, "El Campo es Obligatorio"),
    fechaSolicitud: z.string().min(1, "El Campo es Obligatorio"),
    puestoSolicitado: z.string().min(1, "El Campo es Obligatorio"),
    areaNueva: z.string().min(1, "El Campo es Obligatorio"),
    numeroVacantes: z.string().min(1, "El Campo es Obligatorio"),
    fechaPrevista: z.string().min(1, "El Campo es Obligatorio"),
    motivotipoContrato: z.string().min(1, "El Campo es Obligatorio"),
    estatus: z.string().min(1, "El Campo es Obligatorio"),
    especifique: z.string().min(1, "El Campo es Obligatorio"),

});

export type FormDataDatosSolicitudPersonal = z.infer<
  typeof schemaDatosSolicitudPersonal
>;
