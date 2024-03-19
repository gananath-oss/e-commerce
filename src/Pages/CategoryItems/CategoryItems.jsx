import { useSelector } from "react-redux";
import { categorySelector } from "../../Store/ReduxSlice/categorySlice";
import { useParams } from "react-router-dom";
import { ListItemButton, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import getDataFromSubCollection from "../../Utils/dataFetch/getDataFromSubCollection";
import Loading from "../../components/Loading/Loading";

// const catogeryItemsArr = [
//   {
//     imgUrl:
//       "https://image.made-in-china.com/202f0j00IbMlyLnHkjcP/Best-Selling-Products-2021-Headphone-with-Mic-Handfree-Earpiece-Stereo-Promotion-Items-Trends-for-Sports.jpg",
//     title: "Electronics",
//     price: "Rs 300/-",
//   },
//   {
//     imgUrl:
//       "https://assets.adidas.com/images/w_600,f_auto,q_auto/bf1cac6d8e4e4876b6cead7400a185fe_9366/Terrex_AX4_GORE-TEX_Hiking_Shoes_Black_FY9664_01_standard.jpg",
//     title: "Clothing, Shoes & Accessories",
//     price: "Rs 100/-",
//   },
//   {
//     imgUrl:
//       "https://i.etsystatic.com/23979052/r/il/8eea2d/2437447501/il_fullxfull.2437447501_rwal.jpg",
//     title: "Collectibles & Art",
//     price: "Rs 200/-",
//   },
//   {
//     imgUrl:
//       "https://m.aveda.com/media/export/cms/Living_Aveda_Blog/02202020_post/02202020-A-mobile.jpg",
//     title: "Health & Beauty",
//     price: "Rs 300/-",
//   },
//   {
//     imgUrl:
//       "https://image.made-in-china.com/202f0j00IbMlyLnHkjcP/Best-Selling-Products-2021-Headphone-with-Mic-Handfree-Earpiece-Stereo-Promotion-Items-Trends-for-Sports.jpg",
//     title: "Sporting Goods",
//     price: "Rs 400/-",
//   },
//   {
//     imgUrl:
//       "data:image/jpeg;base64,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",
//     title: "Home & Garden",
//     price: "Rs 500/-",
//   },
//   {
//     imgUrl: "https://i0.shbdn.com/photos/50/75/89/x5_1122507589zo6.jpg",
//     title: "Toys & Hobbies",
//     price: "Rs 550/-",
//   },
//   {
//     imgUrl:
//       "https://m.media-amazon.com/images/I/71VxQBfUhLL._AC_UF350,350_QL80_.jpg",
//     title: "Books, Movies & Musics",
//     price: "Rs 330/-",
//   },
//   {
//     imgUrl: "https://image.made-in-china.com/318f0j00EakYnTFKaLcP/video.webp",
//     title: "Business & Industrial",
//     price: "Rs 250/-",
//   },
//   {
//     imgUrl:
//       "https://i.pinimg.com/736x/ac/07/2c/ac072cd8fe1ed304e86f110c43ff7aaa.jpg",
//     title: "Pet Supplies",
//     price: "Rs 800/-",
//   },
//   {
//     imgUrl:
//       "https://m.media-amazon.com/images/I/81sIfScfgbL._AC_UF894,1000_QL80_.jpg",
//     title: "Baby Essentials",
//     price: "Rs 150/-",
//   },
// ];

const CategoryItems = () => {
  const category = useSelector(categorySelector);
  const { categoryID } = useParams();
  const [categoryUnit] = category.filter((ele) => ele.id === categoryID);
  console.log(category[0].id, categoryID);

  const [categoryItemData, setCategoryItemData] = useState([]);
  useEffect(() => {
    getDataFromSubCollection(
      "category",
      categoryID,
      categoryID,
      setCategoryItemData
    );
  }, []);
  if (categoryItemData.length === 0) {
    return <Loading />;
  }
  return (
    <div className=" px-5 py-[100px] w-full h-screen overflow-y-scroll">
      {
        <h1 className=" text-lg font-bold mt-2 ml-2 mb-3">
          {categoryUnit ? categoryUnit.title : "Categery Title"}
        </h1>
      }
      <div className=" w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-rows-[auto] gap-4">
        {categoryItemData?.map(({ imgUrl, title, price, rating }, index) => (
          <CategoryItemsUnit
            key={index}
            imgUrl={imgUrl}
            title={title}
            price={price}
            rating={rating}
          />
        ))}
      </div>
    </div>
  );
};

const CategoryItemsUnit = ({ imgUrl, title, price, rating }) => (
  <ListItemButton
    sx={{
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: "#62B6B7",
      },
    }}
  >
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      className=" w-full p-2 rounded-md border-2 border-secondary-color flex flex-col items-center"
    >
      <img
        src={imgUrl}
        alt={title}
        className="  object-contain xl:w-[300px] xl:h-[300px] sm:w-[200px] sm:h-[200px] w-[100px] h-[100px]"
      />
      <h3 className=" text-sm font-bold text-black">
        {String(title).length > 15
          ? `${String(title).substring(0, 14)}...`
          : title}
      </h3>
      <h3 className=" text-sm font-bold text-black">{price}</h3>
      <Rating
        name="hover-feedback"
        value={rating}
        precision={0.5}
        readOnly
        size="small"
      />
    </div>
  </ListItemButton>
);

export default CategoryItems;
