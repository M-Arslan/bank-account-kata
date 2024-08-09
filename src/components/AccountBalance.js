import React from 'react';

const AccountBalance = ({ balance }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">Account Balance</h2>
      <p className="text-2xl">{balance} USD</p>
    </div>
  );
};

export default AccountBalance;
