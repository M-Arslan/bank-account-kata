import React, { useState } from 'react';
import { isValidIBAN } from '../utils/ibanValidator';

const Transfer = ({ onTransfer }) => {
  const [amount, setAmount] = useState('');
  const [iban, setIban] = useState('');
  const [error, setError] = useState('');

  const handleTransfer = () => {
    const numericAmount = parseFloat(amount);
    if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
      setError('Please enter a valid positive amount.');
      return;
    }
    if (!iban || !isValidIBAN(iban)) {
      setError('Please enter a valid IBAN.');
      return;
    }
    setError('');
    onTransfer(numericAmount, iban);
    setAmount('');
    setIban('');
  };

  return (
    <div className="p-4 bg-white rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Transfer</h2>
      <input
        type="text"
        placeholder="IBAN"
        value={iban}
        onChange={(e) => setIban(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      />
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleTransfer} className="p-2 bg-blue-500 text-white rounded w-full">
        Transfer
      </button>
    </div>
  );
};

export default Transfer;
