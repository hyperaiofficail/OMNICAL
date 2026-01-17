import React, { useState } from 'react';
import styles from './styles.module.css';
import { calculateEMI, totalPayment, totalInterest } from './logic';
import { generateMeta } from './seo';
import { getSchemaJSONLD } from './schema';

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(12);
  const [term, setTerm] = useState(12);

  const emi = calculateEMI(principal, rate, term);
  const total = totalPayment(emi, term);
  const interest = totalInterest(total, principal);

  const meta = generateMeta("loanCalculator");
  const schema = getSchemaJSONLD();

  return (
    <>
      {/* SEO meta tags */}
      <head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </head>

      <main className={styles.container}>
        <h1>Loan Calculator</h1>

        <div className={styles.formGroup}>
          <label>Principal Amount</label>
          <input type="number" value={principal} onChange={e => setPrincipal(+e.target.value)} />
        </div>

        <div className={styles.formGroup}>
          <label>Annual Interest Rate (%)</label>
          <input type="number" value={rate} onChange={e => setRate(+e.target.value)} />
        </div>

        <div className={styles.formGroup}>
          <label>Term (Months)</label>
          <input type="number" value={term} onChange={e => setTerm(+e.target.value)} />
        </div>

        <div className={styles.results}>
          <p>EMI: ₹{emi.toFixed(2)}</p>
          <p>Total Payment: ₹{total.toFixed(2)}</p>
          <p>Total Interest: ₹{interest.toFixed(2)}</p>
        </div>
      </main>
    </>
  );
};

export default LoanCalculator;
