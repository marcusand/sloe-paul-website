import { Concert } from "../api/interfaces";
import { getStandardFormattedDate } from "../lib/helpers";
import { Paginate } from "./Paginate";

interface Props {
  shows: Concert[];
  perPage: number;
  showTicketLink: boolean;
}

export const ShowList: React.FC<Props> = ({ shows, perPage, showTicketLink = false }) => {
  return (
    <Paginate
      perPage={perPage}
      data={shows}
      render={(paginatedData) => (
        <table className="w-full my-0.5 text-sm xl:text-sm">
          <tbody>
            {paginatedData.map(({ id, location, city, link, date, description }) => (
              <tr key={id}>
                <td>{getStandardFormattedDate(date)}</td>
                <td>{city}</td>
                <td>{location}</td>
                <td>{description}</td>
                {showTicketLink ? null : (
                  <td>
                    {link ? (
                      <a href={link} target="__blank" rel="noopener">
                        Tickets/Info
                      </a>
                    ) : null}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    />
  );
};
