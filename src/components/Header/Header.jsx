import menu from "../../img/menu.png";
import search from "../../img/search.png";
import cart from "../../img/cart.png";
import { IconButton } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <header className="w-full py-3 px-2 bg-primary-color flex items-center justify-between fixed left-0 top-0 z-[100] drop-shadow-header-shadow">
      {/* header left */}
      <div className=" flex justify-center">
        <IconButton>
          <img
            src={menu}
            alt="menu"
            className="w-6 h-6 object-contain cursor-pointer"
          />
        </IconButton>
        <h1
          className=" text-lg font-semibold text-icon-color ml-2 mr-2 pt-2"
          style={{
            display:
              isSearch && window.innerWidth < 640 ? "none" : "inline-block",
          }}
        >
          E-kada<span className=" text-icon-hover-color">pila</span>
        </h1>
        <div
          className=" flex items-center rounded-full bg-secondary-color overflow-hidden"
          style={{
            backgroundColor:
              window.innerWidth < 640
                ? isSearch
                  ? "#97DECE"
                  : "inherit"
                : "#97DECE",
          }}
        >
          <input
            type="text"
            style={{
              display:
                window.innerWidth < 640
                  ? isSearch
                    ? "inline-block"
                    : "none"
                  : "inline-block",
              transition: "all 500ms ease-in-out",
            }}
            placeholder="Search"
            className=" hidden sm:inline-block outline-none p-1 w-[170px] bg-inherit ml-1"
          />
          <IconButton onClick={() => setIsSearch(!isSearch)}>
            <img
              src={search}
              alt="search"
              className="w-6 h-6 object-contain cursor-pointer mr-1"
            />
          </IconButton>
        </div>
      </div>
      {/* header right */}
      <IconButton>
        <div className=" relative p-1">
          <img
            src={cart}
            alt="cart"
            className="w-6 h-6 object-contain cursor-pointer"
          />
          <div className=" absolute text-[9px] text-primary-color p-[2px] m-0 top-0 right-0 bg-icon-color rounded-full flex items-center justify-center w-[14px] h-[14px]">
            2
          </div>
        </div>
      </IconButton>
    </header>
  );
};

export default Header;
