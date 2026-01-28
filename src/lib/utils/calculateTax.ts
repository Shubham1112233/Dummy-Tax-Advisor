import { TaxClass } from '../types/tax';

type TaxRules = {
  incomeTaxRate: number;
  solidarityRate: number;
  churchTaxRate: number;
};

type CalculateTaxInput = {
  grossIncome: number;
  taxClass: TaxClass;
  churchTax: boolean;
};

//These are dummy calculations for the tax rates.
export function calculateTax(
  input: CalculateTaxInput,
  rules: TaxRules
) {
  const baseTax = input.grossIncome * rules.incomeTaxRate;

  const solidarityTax = baseTax * rules.solidarityRate;

  const churchTax = input.churchTax
    ? baseTax * rules.churchTaxRate
    : 0;

  const totalTax = baseTax + solidarityTax + churchTax;

  const netIncome = input.grossIncome - totalTax;

  return {
    baseTax,
    solidarityTax,
    churchTax,
    totalTax,
    netIncome,
  };
}
