import React, { useState } from 'react';

const Withdraw = ({ onWithdraw }) => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleWithdraw = () => {
    const numericAmount = parseFloat(amount);
    if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
      setError('Please enter a valid positive amount.');
      return;
    }
    setError('');
    onWithdraw(numericAmount);
    setAmount('');
  };

  return (
    <div className="p-4 bg-white rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Withdraw</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="p-2 border rounded w-full mb-2"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleWithdraw} className="p-2 bg-red-500 text-white rounded w-full">
        Withdraw
      </button>
    </div>
  );
};

export default Withdraw;
