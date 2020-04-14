import { useState, useEffect } from 'react';
import Layout from "../src/components/Layout";

// http://data.fixer.io/api/latest?access_key=10f1f38ccbe70fce025faf574df637fb&format=1
// &base=USD
// &symbols=AUD,CAD,MXN
export default function Currency() {
  const api = {
    key: '10f1f38ccbe70fce025faf574df637fb',
    baseUrl: 'https://data.fixer.io/api/latest',
  };
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    // fetch();
    console.log('calling use effect')
    console.log(`${api.baseUrl}?access_key=${api.key}&format=1`);
  }, []);

  const fetch = () => {
    if (currencies.success == 'undefined') {
      fetch(`${api.baseUrl}?access_key=${api.key}&format=1`)
        .then(res => res.json())
        .then(result => {
            console.log({result});
            setCurrencies(result);
        });
    }
  }

  return (
    <Layout>
      <h2>Currency Exchange</h2>

    </Layout>
  );
}
