import { SocialLink } from "../api/interfaces";
import { LinksList } from "./LinksList";

interface Props {
  links?: SocialLink[];
}

export const Footer: React.FC<Props> = ({ links }) => {
  return (
    <footer className="hidden md:flex justify-between items-center">
      <div className="logo">Sloe Paul</div>
      {links && <LinksList className="links" links={links} />}
    </footer>
  );
};
