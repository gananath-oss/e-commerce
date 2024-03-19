export const MainContainer = ({ children }) => {
  return (
    <div className=" px-5 sm:px-12 md:p-[120px] py-[100px] w-full h-screen overflow-y-scroll">
      {children}
    </div>
  );
};
