import React, { useState } from 'react';

const Deposit = ({ onDeposit }) => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleDeposit = () => {
    const numericAmount = parseFloat(amount);
    if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
      setError('Please enter a valid positive amount.');
      return;
    }
    setError('');
    onDeposit(numericAmount);
    setAmount('');
  };

  return (
    <div className="p-4 bg-white rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Deposit</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="p-2 border rounded w-full mb-2"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleDeposit} className="p-2 bg-green-500 text-white rounded w-full">
        Deposit
      </button>
    </div>
  );
};

export default Deposit;
