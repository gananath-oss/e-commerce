import { IconButton } from "@mui/material";
import { useRef } from "react";

const itemImgArr = [
  "https://i0.shbdn.com/photos/50/75/89/x5_1122507589zo6.jpg",
  "https://image.made-in-china.com/318f0j00EakYnTFKaLcP/video.webp",
  "https://i.pinimg.com/736x/ac/07/2c/ac072cd8fe1ed304e86f110c43ff7aaa.jpg",
  "https://m.media-amazon.com/images/I/81sIfScfgbL._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/71VxQBfUhLL._AC_UF350,350_QL80_.jpg",
  "https://m.aveda.com/media/export/cms/Living_Aveda_Blog/02202020_post/02202020-A-mobile.jpg",
];

const ItemPage = () => {
  const mainImgRef = useRef(itemImgArr[0]);
  const subImgRef = useRef([]);
  return (
    <div className=" px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <h1 className=" text-lg font-bold text-black mb-7">Item Title</h1>
      <img
        ref={mainImgRef}
        src={mainImgRef.current}
        alt="Item image 1"
        className=" w-full object-contain rounded-lg"
      />
      <div className=" w-full h-[100px] t-5 grid grid-cols-6 grid-rows-1 gap-2 items-center ">
        {itemImgArr.map((ele, index) => (
          <IconButton
            key={index}
            sx={{ padding: 0, borderRadius: "2px" }}
            onClick={() => {
              mainImgRef.current.src = ele;
              subImgRef.current[index].style.border = "2px solid gold";
              for (let i = 0; i < itemImgArr.length; i++) {
                if (i != index) {
                  subImgRef.current[i].style.border = "none";
                }
              }
            }}
          >
            <img
              ref={(refEle) => (subImgRef.current[index] = refEle)}
              src={ele}
              alt={`img_${index + 1}`}
              className=" w-full object-contain rounded-md"
            />
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
