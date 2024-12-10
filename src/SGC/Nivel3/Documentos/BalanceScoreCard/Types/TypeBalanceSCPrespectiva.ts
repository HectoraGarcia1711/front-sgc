import { z } from "zod";
import { schemaPartesInteresadasBSC } from "./TypePartesInteresadas";
import { schemaMetricasBSC } from "./TypeMetricasBSC";

export const schemaPrespectivaBSC = z.object({
  idBalanceSCPrespectiva: z
    .number()
    .min(1, "numero no tiene que ser vacio")
    .optional(),
  contenido: z.string().min(1, "El Campo es Obligatorio"),
  idBalanceScoreCard: z.number().optional(),
  partesInteresadas: z.array(schemaPartesInteresadasBSC).optional(), // Ahora incluye partes interesadas
  metricasBSCList: z.array(schemaMetricasBSC).optional(),
  tempId: z.string().optional(), // Agregamos el campo tempId
});

export type FormDataPrespectivaBSC = z.infer<typeof schemaPrespectivaBSC>;
