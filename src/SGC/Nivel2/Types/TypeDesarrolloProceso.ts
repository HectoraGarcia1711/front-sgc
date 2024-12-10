import { z } from "zod";

export const schemaDesarrolloProceso = z.object({
  idDesarrolloProceso: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),

  titulo: z.string().min(1, "El Campo es Obligatorio"),
  contenido: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataDesarrolloProceso = z.infer<typeof schemaDesarrolloProceso>;

//sub Clausula
export const schemaDesarroSubClausulalloProceso = z.object({
  idSubClausulasProceso: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),

  titulo: z.string().min(1, "El Campo es Obligatorio"),
  contenido: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataDesarroSubClausulalloProceso = z.infer<
  typeof schemaDesarroSubClausulalloProceso
>;

//sub-sub Clausula
export const schemaDesarroSubSubClausulalloProceso = z.object({
  idSubSubClausulasProceso: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),

  titulo: z.string().min(1, "El Campo es Obligatorio"),
  contenido: z.string().min(1, "El Campo es Obligatorio"),
});

export type FormDataDesarroSubSubClausulalloProceso = z.infer<
  typeof schemaDesarroSubSubClausulalloProceso
>;
