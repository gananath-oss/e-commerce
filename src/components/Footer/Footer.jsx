import { IconButton, Tooltip } from "@mui/material";
import category from "../../img/category.png";
import home from "../../img/home.png";
import profile from "../../img/profile.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [selectPage, setSelectPage] = useState("Home");
  return (
    <footer className="w-full py-3 px-2 bg-primary-color flex items-center justify-between fixed left-0 bottom-0 z-[100]">
      <FooterIcon
        title="Home"
        alt="home"
        img={home}
        selectPage={selectPage}
        setSelectPage={setSelectPage}
      />
      <FooterIcon
        title="Category"
        alt="category"
        img={category}
        selectPage={selectPage}
        setSelectPage={setSelectPage}
      />
      <FooterIcon
        title="Profile"
        alt="profile"
        img={profile}
        selectPage={selectPage}
        setSelectPage={setSelectPage}
      />
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ title, alt, img, selectPage, setSelectPage }) => {
  return (
    <Link to={alt === "home" ? "./" : `/${String(alt)}`}>
      <Tooltip title={title}>
        <IconButton onClick={() => setSelectPage(title)}>
          <img
            src={img}
            alt={alt}
            className="w-6 h-6 object-contain cursor-pointer pb-1"
            style={{
              borderBottom: selectPage === title && "2px solid #546dd0",
            }}
          />
        </IconButton>
      </Tooltip>
    </Link>
  );
};
