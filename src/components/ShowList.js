import moment from "moment";
import Paginate from "./Paginate";

export default function ShowList({ shows }) {
  const getFormattedDate = (dateString) => {
    return moment(dateString).format("DD.MM.YYYY HH:mm");
  };

  return (
    <Paginate
      perPage={4}
      data={shows}
      render={(paginatedData) => (
        <table className="w-full  my-0.5 text-sm xl:text-lg">
          <tbody>
            {paginatedData.map(
              ({ id, location, city, concert_date, description, tickets_more_infos }) => (
                <tr key={id}>
                  <td>{getFormattedDate(concert_date)}</td>
                  <td>{city}</td>
                  <td>{location}</td>
                  <td>{description}</td>
                  <td>
                    <a href={tickets_more_infos} target="__blank">
                      Tickets/Infos
                    </a>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      )}
    />
  );
}
