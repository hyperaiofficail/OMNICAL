import ctr from '../../seo/ctr-optimizer.json';

export function generateMeta(calculatorKey: string) {
  return {
    title: ctr[calculatorKey]?.titleTemplate || `OmniCalc - ${calculatorKey}`,
    description: ctr[calculatorKey]?.metaDescriptionTemplate || ''
  };
}
