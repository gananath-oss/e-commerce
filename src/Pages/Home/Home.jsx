import { useState } from "react";
import AdsModal from "./AdsModal";
import Products from "./Products";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [loading, steLoading] = useState(false);
  if (loading) return <Loading />;
  return (
    <div className=" px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <AdsModal />
      <Products title="Trending Products" rowsCount={1} slidesPerView={3} />
      <Products title="Men Items" rowsCount={1} slidesPerView={4} />
      <Products title="Women Item" rowsCount={1} slidesPerView={4} />
    </div>
  );
};

export default Home;
