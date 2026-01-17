// Loan Calculator formulas
export function calculateEMI(principal: number, annualRate: number, termMonths: number): number {
  const monthlyRate = annualRate / 12 / 100;
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
         (Math.pow(1 + monthlyRate, termMonths) - 1);
}

export function totalPayment(emi: number, termMonths: number): number {
  return emi * termMonths;
}

export function totalInterest(total: number, principal: number): number {
  return total - principal;
}
