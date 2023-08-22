import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AdsModal = () => {
  const AdsElements = [
    {
      src: "https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=612x612&w=0&k=20&c=9Y135GYKHLlPotGIfynBbMPhXNbYeuDuFzreL_nfDE8=",
    },
    {
      src: "https://inspirationfeed.com/wp-content/uploads/2021/04/flat-lay-with-woman-fashion-accessories-in-yellow-32XUFEE.jpg",
    },
    {
      src: "https://media.istockphoto.com/id/935032524/photo/women-summer-dresses-on-display-at-camden-market.jpg?s=612x612&w=0&k=20&c=_L2DC3Fq4wST3v9fsonpJzARWpMibAVtWUkZXPrQALs=",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {AdsElements.map(({ src }, index) => (
        <SwiperSlide key={index}>
          <AdUnits src={src} id={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AdsModal;

const AdUnits = ({ src, id }) => {
  return (
    <SwiperSlide>
      <img src={src} alt={`ad-${id}`} className=" w-full object-contain" />
    </SwiperSlide>
  );
};
