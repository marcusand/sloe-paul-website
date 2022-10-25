import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

interface Props<T> {
  perPage: number;
  data: T[];
  render: (data: T[]) => React.ReactNode;
}

export const Paginate = <T,>({ perPage, data, render }: Props<T>) => {
  const [paginatedData, setPaginatedData] = useState<T[]>([]);

  const handlePageChange = ({ selected }: { selected: number }) => {
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
        onPageChange={handlePageChange}
        containerClassName={"pagination text-sm md:text-lg"}
        activeClassName={"active"}
      />
    </div>
  );
};
