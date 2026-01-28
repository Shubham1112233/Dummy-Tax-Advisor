import { z } from "zod";

export const userTaxInputSchema = z.object({
    grossIncome: z.number().min(0),
    taxClass: z.enum(['I', 'II', 'III', 'IV', 'V']),
    churchTax: z.boolean(),
})

export type UserTaxInput = z.infer<typeof userTaxInputSchema>;

export const taxRulesSchema = z.object({
    incomeTaxRate: z.number().min(0).max(1),
    solidarityRate: z.number().min(0).max(1),
    churchTaxRate: z.number().min(0).max(1),
});

export type TaxRules = z.infer<typeof taxRulesSchema>;
