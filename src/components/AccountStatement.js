import React from 'react';

const AccountStatement = ({ transactions }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">Account Statement</h2>
      <table className="min-w-full bg-white text-center">
        <thead>
          <tr>
            <th className="py-2">Date</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{tx.date}</td>
              <td className="py-2">{tx.amount > 0 ? `+${tx.amount}` : tx.amount}</td>
              <td className="py-2">{tx.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountStatement;
