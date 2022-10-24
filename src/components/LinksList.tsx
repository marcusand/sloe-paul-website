import { SocialLink } from "../api/interfaces";
import Button from "./Button";

interface Props {
  className: string;
  links: SocialLink[];
}

export const LinksList: React.FC<Props> = ({ className, links }) => {
  return (
    <ul className={`${className} list-none`}>
      {links.map((link) => (
        <li key={link.title} className="inline-block ml-4">
          <a href={link.url} target="__blank">
            <Button>{link.title}</Button>
          </a>
        </li>
      ))}
    </ul>
  );
};
