import React from 'react';
import { Link } from 'react-router-dom';

function Pagination({ activeCategory, itemsPerPage, totalItems, currentPage, paginate}) {
  const pageNumbers = [];

  // useEffect(() => {
  //   paginate(1); // Встановлення сторінки на 1
  // }, [activeCategory, paginate]);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              to={`/products/${activeCategory}/page/${number}`}
              onClick={() => paginate(number)}
              className={`page-link ${currentPage === number ? 'page-active' : ''}`}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;