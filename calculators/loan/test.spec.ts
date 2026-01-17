import { calculateEMI, totalPayment, totalInterest } from './logic';

test('EMI calculation correct', () => {
  const emi = calculateEMI(100000, 12, 12);
  expect(Math.round(emi)).toBe(8885);
});

test('Total payment correct', () => {
  const total = totalPayment(8885, 12);
  expect(total).toBe(106620);
});

test('Total interest correct', () => {
  const interest = totalInterest(106620, 100000);
  expect(interest).toBe(6620);
});
