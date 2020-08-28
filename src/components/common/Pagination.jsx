import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const pageCount = Math.ceil(props.itemsCount / props.pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === props.currentPage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => props.onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
