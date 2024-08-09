import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  const handleFilter = () => {
    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      setError('Start date cannot be after end date.');
      return;
    }
    setError('');
    onFilter({ type, startDate, endDate });
  };

  return (
    <div className="p-4 bg-white rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Filters</h2>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      >
        <option value="">All</option>
        <option value="deposit">Deposits</option>
        <option value="withdrawal">Withdrawals</option>
      </select>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleFilter} className="p-2 bg-gray-500 text-white rounded w-full">
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
