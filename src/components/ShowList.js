import moment from "moment";
import Paginate from "./Paginate";

export default function ShowList({ shows, perPage, pastShows = false }) {
  const getFormattedDate = (dateString) => {
    return moment(dateString).format("DD.MM.YYYY");
  };

  return (
    <Paginate
      perPage={perPage}
      data={shows}
      render={(paginatedData) => (
        <table className="w-full my-0.5 text-sm xl:text-sm">
          <tbody>
            {paginatedData.map(
              ({ id, location, city, concert_date, description, tickets_more_infos }) => (
                <tr key={id}>
                  <td>{getFormattedDate(concert_date)}</td>
                  <td>{city}</td>
                  <td>{location}</td>
                  <td>{description}</td>
                  {pastShows ? null : (
                    <td>
                      {tickets_more_infos ? (
                        <a href={tickets_more_infos} target="__blank" rel="noopener">
                          Tickets/Info
                        </a>
                      ) : null}
                    </td>
                  )}
                </tr>
              ),
            )}
          </tbody>
        </table>
      )}
    />
  );
}
