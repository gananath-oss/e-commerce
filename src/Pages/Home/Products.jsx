import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Grid, Mousewheel, Pagination } from "swiper/modules";
import { IconButton, Rating } from "@mui/material";

const productArray = [
  {
    src: "https://electroheads.com/cdn/shop/files/ado-ado-air-20-electric-bike-electric-folding-bikes-30770449023089.jpg?v=1689850707&width=480",
    price: "25,000",
    productTitle: "Electric Bikes",
  },
  {
    src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/underwear-lead-1627310503.jpg",
    price: "500",
    productTitle: "Men Underwear",
  },
  {
    src: "https://image.made-in-china.com/202f0j00IbMlyLnHkjcP/Best-Selling-Products-2021-Headphone-with-Mic-Handfree-Earpiece-Stereo-Promotion-Items-Trends-for-Sports.jpg",
    price: "1,500",
    productTitle: "Headphone",
  },
  {
    src: "https://asset2.cxnmarksandspencer.com/is/image/mands/821_08082023_SB-33766_MOSAIC_MAIN_TILE_1858x1858?wid=950&qlt=70&fmt=pjpeg",
    price: "700",
    productTitle: "Women Underwear",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKm7Vp1uUdM5lGYegAFvo2mWv_ykm2qX_ajw&usqp=CAU",
    price: "3,000",
    productTitle: "Perfume",
  },
  {
    src: "https://www.stirworld.com/images/see/2137_Hermes_Watches_Wonders_9.jpg?0",
    price: "2,500",
    productTitle: "Watch",
  },
  {
    src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/underwear-lead-1627310503.jpg",
    price: "500",
    productTitle: "Men Underwear",
  },
  {
    src: "https://image.made-in-china.com/202f0j00IbMlyLnHkjcP/Best-Selling-Products-2021-Headphone-with-Mic-Handfree-Earpiece-Stereo-Promotion-Items-Trends-for-Sports.jpg",
    price: "1,500",
    productTitle: "Headphone",
  },
  {
    src: "https://asset2.cxnmarksandspencer.com/is/image/mands/821_08082023_SB-33766_MOSAIC_MAIN_TILE_1858x1858?wid=950&qlt=70&fmt=pjpeg",
    price: "700",
    productTitle: "Women Underwear",
  },
];

const Products = ({ title, rowsCount, slidesPerView }) => {
  return (
    <section className=" w-full mt-7">
      <h1 className=" text-lg mb-4 font-bold pl-3">{title}</h1>
      <Swiper
        slidesPerView={window.innerWidth < 640 ? 3 : Number(slidesPerView)}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Grid, Pagination, Mousewheel]}
      >
        {productArray.map(({ src, price, productTitle }, index) => (
          <SwiperSlide key={index}>
            <ProductUnits
              src={src}
              price={price}
              productTitle={productTitle}
              id={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Products;

const ProductUnits = ({ src, price, productTitle, id }) => (
  <IconButton sx={{ borderRadius: "5px" }}>
    <div
      className="w-full mb-7 p-2"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <div className="flex items-center">
        <img
          src={src}
          alt={`product_unit_${id}`}
          className="w-[195px] h-[195px] object-contain"
        />
      </div>
      <h3 className="text-sm font-semibold text-stone-800">{productTitle}</h3>
      <Rating
        name="hover-feedback"
        value={3.5}
        precision={0.5}
        readOnly
        size="small"
      />
      <h3 className="text-lg font-bold text-stone-800">Rs.{price}/-</h3>
    </div>
  </IconButton>
);
