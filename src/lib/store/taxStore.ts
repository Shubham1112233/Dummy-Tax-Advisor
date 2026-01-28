import { HealthInsurance, MaritalStatus, TaxClass } from "../types/tax";
import { create } from 'zustand';

type TaxState = {
grossIncome: number;
  taxClass: TaxClass;
  maritalStatus: MaritalStatus;
  churchTax: boolean;
  healthInsurance: HealthInsurance;

  setGrossIncome: (value: number) => void;
  setTaxClass: (value: TaxClass) => void;
  setMaritalStatus: (value: MaritalStatus) => void;
  setChurchTax: (value: boolean) => void;
  setHealthInsurance: (value: HealthInsurance) => void;
}

export const useTaxStore = create<TaxState>((set) => ({
    grossIncome: 60000,
    taxClass: 'I',
    maritalStatus: 'single',
    churchTax: false,
    healthInsurance: 'public',
  
    setGrossIncome: (value) => set({ grossIncome: value }),
    setTaxClass: (value) => set({ taxClass: value }),
    setMaritalStatus: (value) => set({ maritalStatus: value }),
    setChurchTax: (value) => set({ churchTax: value }),
    setHealthInsurance: (value) => set({ healthInsurance: value }),
  }));