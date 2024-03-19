import { useState } from "react";
import AdsModal from "./AdsModal";
import Products from "./Products";
import Loading from "../../components/Loading/Loading";
import { Button } from "@mui/material";
import { MainContainer } from "../../Layout/MainContainer";

const Home = () => {
  const [loading, steLoading] = useState(false);

  if (loading) return <Loading />;
  return (
    <MainContainer>
      <AdsModal />
      <Products title="Trending Products" rowsCount={1} slidesPerView={5} />
      <Products title="Men Items" rowsCount={1} slidesPerView={6} />
      <Products title="Women Item" rowsCount={1} slidesPerView={6} />
    </MainContainer>
  );
};

export default Home;
