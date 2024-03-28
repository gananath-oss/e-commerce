import { useLocation } from "react-router-dom";
import { MainContainer } from "../../Layout/MainContainer";

const NoUrl = () => {
  const { pathname } = useLocation();
  return (
    <MainContainer>
      <h3 className=" text-4xl font-bold">404</h3>
      <p>The requested URL {pathname} was not found on this server</p>
    </MainContainer>
  );
};

export default NoUrl;
