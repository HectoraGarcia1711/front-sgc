import { z } from "zod";

export const schemaPartesInteresadasBSC = z.object({
  idPartesInteresadas: z
    .number()
    .min(1, "El número no puede estar vacío")
    .optional(),
  nombre: z.string().min(1, "El Nombre es Obligatorio"),
  interes: z.string().min(1, "El Campo es Obligatorio"),
  influencia: z.string().min(1, "El Campo es Obligatorio"),
  idBalanceSCPrespectiva: z.number().optional(),
  tempId: z.string().optional(), // Agregamos el campo tempId
});

export type FormDataPartesInteresadasBSC = z.infer<
  typeof schemaPartesInteresadasBSC
>;
