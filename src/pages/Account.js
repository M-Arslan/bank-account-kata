import React, { useState } from 'react';
import AccountBalance from '../components/AccountBalance';
import AccountStatement from '../components/AccountStatement';
import Deposit from '../components/Deposit';
import Withdraw from '../components/Withdraw';
import Transfer from '../components/Transfer';
import Pagination from '../components/Pagination';
import Filters from '../components/Filters';

const Account = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const handleDeposit = (amount) => {
    const newBalance = balance + amount;
    const newTransaction = { date: new Date().toISOString(), amount, balance: newBalance };
    setBalance(newBalance);
    setTransactions([newTransaction, ...transactions]);
  };

  const handleWithdraw = (amount) => {
    const newBalance = balance - amount;
    const newTransaction = { date: new Date().toISOString(), amount: -amount, balance: newBalance };
    setBalance(newBalance);
    setTransactions([newTransaction, ...transactions]);
  };

  const handleTransfer = (amount, iban) => {
    const newBalance = balance - amount;
    const newTransaction = { date: new Date().toISOString(), amount: -amount, balance: newBalance, iban };
    setBalance(newBalance);
    setTransactions([newTransaction, ...transactions]);
  };

  const handleFilter = ({ type, startDate, endDate }) => {
    let filtered = [...transactions];
    if (type) {
      filtered = filtered.filter(tx => (type === 'deposit' && tx.amount > 0) || (type === 'withdrawal' && tx.amount < 0));
    }
    if (startDate) {
      filtered = filtered.filter(tx => new Date(tx.date) >= new Date(startDate));
    }
    if (endDate) {
      filtered = filtered.filter(tx => new Date(tx.date) <= new Date(endDate));
    }
    setFilteredTransactions(filtered);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedTransactions = filteredTransactions.length
    ? filteredTransactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : transactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Account</h1>
      <AccountBalance balance={balance} />
      <Deposit onDeposit={handleDeposit} />
      <Withdraw onWithdraw={handleWithdraw} />
      <Transfer onTransfer={handleTransfer} />
      <Filters onFilter={handleFilter} />
      <AccountStatement transactions={paginatedTransactions} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Account;
