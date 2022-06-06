import React from 'react';

export const Pagination = ({ currentPage1, lastPage, onPageChange }) => {
  const arr = new Array(lastPage).fill(0);

  return (
    <div>
      {arr.map((item, page) => (
        <button
          disabled={page + 1 === currentPage1}
          onClick={() => onPageChange(page + 1)}>
          {page + 1}
        </button>
      ))}
    </div>
  );
};
