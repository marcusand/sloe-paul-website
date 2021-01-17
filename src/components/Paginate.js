import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Paginate({ perPage, data, render }) {
  const [paginatedData, setPaginatedData] = useState([]);

  const handlePageClick = ({ selected }) => {
    setPaginatedData(data.slice(selected * perPage, selected * perPage + perPage));
  };

  useEffect(() => setPaginatedData(data.slice(0, perPage)), [data, perPage]);

  return (
    <div className="flex flex-col h-full">
      <div className="h-full">{render(paginatedData)}</div>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
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
