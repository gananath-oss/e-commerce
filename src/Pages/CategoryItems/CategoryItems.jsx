import { useSelector } from "react-redux";
import { categorySelector } from "../../Store/ReduxSlice/categorySlice";

const CategoryItems = () => {
  const category = useSelector(categorySelector);
  console.log(category);
  return (
    <div className=" px-5 py-[100px] w-full h-screen overflow-y-scroll">
      CategoryItems
    </div>
  );
};

export default CategoryItems;
