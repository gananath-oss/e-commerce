import { useState } from "react";
import AdsModal from "./AdsModal";
import Products from "./Products";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [loading, steLoading] = useState(false);
  if (loading) return <Loading />;
  return (
    <div className=" px-5 sm:px-12 md:p-[120px] py-[100px] w-full h-screen overflow-y-scroll">
      <AdsModal />
      <Products title="Trending Products" rowsCount={1} slidesPerView={5} />
      <Products title="Men Items" rowsCount={1} slidesPerView={6} />
      <Products title="Women Item" rowsCount={1} slidesPerView={6} />
    </div>
  );
};

export default Home;
