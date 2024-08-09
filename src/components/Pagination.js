import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleFirstPage = () => onPageChange(1);
  const handleLastPage = () => onPageChange(totalPages);
  const handleNextPage = () => onPageChange(currentPage + 1);
  const handlePreviousPage = () => onPageChange(currentPage - 1);

  return (
    <div className="flex justify-between items-center py-2">
      <button onClick={handleFirstPage} disabled={currentPage === 1} className="px-2 py-1 bg-gray-300 rounded">
        First
      </button>
      <button onClick={handlePreviousPage} disabled={currentPage === 1} className="px-2 py-1 bg-gray-300 rounded">
        Previous
      </button>
      <span className="px-2">
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-2 py-1 bg-gray-300 rounded">
        Next
      </button>
      <button onClick={handleLastPage} disabled={currentPage === totalPages} className="px-2 py-1 bg-gray-300 rounded">
        Last
      </button>
    </div>
  );
};

export default Pagination;
