"use client";

import { useState, useEffect } from 'react';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [currencies, setCurrencies] = useState([]);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
      .then(response => response.json())
      .then(data => setCurrencies(Object.keys(data.rates)));
  }, []);

  const handleConvert = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await response.json();
      const rate = data.rates[toCurrency];
      setConvertedAmount(amount * rate);
    } catch (error) {
      console.error('Error al obtener el tipo de cambio:', error);
    }
  };

  return (
    <div>
      <h2>Convertidor de Monedas</h2>
      <form onSubmit={handleConvert} className="flex flex-col items-center gap-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Cantidad"
          className="border p-2"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="border p-2"
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="border p-2"
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Convertir
        </button>
      </form>
      {convertedAmount !== null && (
        <p className="mt-4">
          {amount} {fromCurrency} es igual a {convertedAmount.toFixed(2)} {toCurrency}
        </p>
      )}
    </div>
  );
}
