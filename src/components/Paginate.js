import { useState } from "react";
import ReactPaginate from "react-paginate";

export default function Paginate({ perPage, data, render }) {
  const [paginatedData, setPaginatedData] = useState(data.slice(0, perPage));

  const handlePageClick = ({ selected }) => {
    setPaginatedData(data.slice(selected * perPage, selected * perPage + perPage));
  };

  return (
    <div>
      {render(paginatedData)}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(data.length / perPage)}
        marginPagesDisplayed={5}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
