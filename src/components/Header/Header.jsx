import menu from "../../img/menu.png";
import search from "../../img/search.png";
import cart from "../../img/cart.png";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <header className="w-full py-5 px-2 bg-primary-color flex items-center justify-between fixed left-0 top-0 z-[100] drop-shadow-header-shadow">
      {/* header left */}
      <div className=" flex justify-center">
        <IconButton>
          <img
            src={menu}
            alt="menu"
            className="w-6 h-6 object-contain cursor-pointer"
          />
        </IconButton>
        <h1 className=" text-lg font-semibold text-icon-color ml-2 mr-2 pt-2">
          E-kada<span className=" text-icon-hover-color">pila</span>
        </h1>
        <div className=" flex items-center rounded-full bg-secondary-color overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className=" outline-none p-1 w-[170px] bg-inherit ml-1"
          />
          {/* <IconButton> */}
          <img
            src={search}
            alt="search"
            className="w-6 h-6 object-contain cursor-pointer mr-1"
          />
          {/* </IconButton> */}
        </div>
      </div>
      {/* header right */}
      <IconButton>
        <img
          src={cart}
          alt="cart"
          className="w-6 h-6 object-contain cursor-pointer"
        />
      </IconButton>
    </header>
  );
};

export default Header;
