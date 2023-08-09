import { IconButton, Tooltip } from "@mui/material";
import category from "../../img/category.png";
import home from "../../img/home.png";
import profile from "../../img/profile.png";

const Footer = () => {
  return (
    <footer className="w-full py-3 px-2 bg-primary-color flex items-center justify-between fixed left-0 bottom-0 z-[100]">
      <FooterIcon title="Home" alt="home" img={home} />
      <FooterIcon title="Category" alt="category" img={category} />
      <FooterIcon title="Profile" alt="profile" img={profile} />
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ title, alt, img }) => (
  <Tooltip title={title}>
    <IconButton>
      <img
        src={img}
        alt={alt}
        className="w-6 h-6 object-contain cursor-pointer"
      />
    </IconButton>
  </Tooltip>
);
