import { taxRulesSchema, TaxRules } from "../validation/taxSchema";

export async function fetchTaxRules() : Promise<TaxRules> {
    const res= await fetch('/api/tax-rules');
    if (!res.ok) {
        throw new Error('Failed to fetch tax rules');
    }
    const data = await res.json();
    return taxRulesSchema.parse(data);
}