import { TaxRules } from '../validation/taxSchema';
import { userTaxInputSchema } from '../validation/taxSchema';

export function calculateTax(input: unknown, rules: TaxRules) {
  const validInput = userTaxInputSchema.parse(input);

  const baseTax = validInput.grossIncome * rules.incomeTaxRate;
  const solidarityTax = baseTax * rules.solidarityRate;
  const churchTax = validInput.churchTax
    ? baseTax * rules.churchTaxRate
    : 0;

  const totalTax = baseTax + solidarityTax + churchTax;
  const netIncome = validInput.grossIncome - totalTax;

  return {
    baseTax,
    solidarityTax,
    churchTax,
    totalTax,
    netIncome,
  };
}
