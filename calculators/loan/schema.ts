import loanSchema from '../../seo/schema/calculator.json';
import faqSchema from '../../seo/schema/faq.json';

export function getSchemaJSONLD() {
  return [loanSchema, faqSchema];
}
