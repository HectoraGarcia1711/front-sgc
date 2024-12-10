import { z } from "zod";
import { schemaPrespectivaBSC } from "./TypeBalanceSCPrespectiva";

export const schemaResponseBSC = z.object({
  idBalanceScoreCard: z.number(),
  coDocumento: z.string(),
  noRevision: z.string(),
  fechaEmicion: z.string(),
  fechaRevision: z.string(),
  balanceSCPrespectivas: z.array(schemaPrespectivaBSC),
});

export type ApiResponseBSC = z.infer<typeof schemaResponseBSC>;
