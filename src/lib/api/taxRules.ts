export type TaxRules = {

    incomeTaxRate: number;
    solidarityRate: number;
    churchTaxRate: number;
}
export async function fetchTaxRules() : Promise<TaxRules> {
    const res= await fetch('/api/tax-rules');
    if (!res.ok) {
        throw new Error('Failed to fetch tax rules');
    }
    return res.json();
}