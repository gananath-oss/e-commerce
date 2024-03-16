import menu from "../../img/menu.png";
import search from "../../img/search.png";
import cart from "../../img/cart.png";
import { IconButton } from "@mui/material";
import { useRef } from "react";

let clicked = false;

const Header = () => {
  const logoRef = useRef();
  const searchBoxRef = useRef();
  const searchBoxContainerRef = useRef();
  const searchButtonClickHandle = () => {
    if (clicked) {
      logoRef.current.style = "display:none;";
      searchBoxRef.current.style = "display:inline-block;";
      searchBoxContainerRef.current.style = "background-color:#97DECE;";
    } else {
      logoRef.current.style = "display:inline-block;";
      searchBoxRef.current.style = "display:none";
      searchBoxContainerRef.current.style = "background-color:inherit";
    }
  };

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
          ref={logoRef}
          className=" text-lg font-semibold text-icon-color ml-2 mr-2 pt-2"
          style={{
            display:
              clicked && window.innerWidth < 640 ? "none" : "inline-block",
          }}
        >
          E-kada<span className=" text-icon-hover-color">pila</span>
        </h1>
        <div
          ref={searchBoxContainerRef}
          className=" flex items-center rounded-full bg-secondary-color overflow-hidden"
          style={{
            backgroundColor:
              window.innerWidth < 640
                ? clicked
                  ? "#97DECE"
                  : "inherit"
                : "#97DECE",
          }}
        >
          <input
            type="text"
            ref={searchBoxRef}
            style={{
              display:
                window.innerWidth < 640
                  ? clicked
                    ? "inline-block"
                    : "none"
                  : "inline-block",
              transition: "all 500ms ease-in-out",
            }}
            placeholder="Search"
            className=" hidden sm:inline-block outline-none p-1 w-[170px] bg-inherit ml-1"
          />
          <IconButton
            onClick={() => {
              if (window.innerWidth < 640) {
                clicked = !clicked;
                searchButtonClickHandle();
              }
            }}
          >
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
