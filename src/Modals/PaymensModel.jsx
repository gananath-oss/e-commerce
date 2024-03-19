import { Button, Modal } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import db from "../Firebase/firebase";
import { doc, setDoc } from "firebase/firestore/lite";

const PaymensModel = (props, ref) => {
  const [open, setOpen] = useState(false);
  //   const handleOpen = () => {
  //     setOpen(true);
  //   };
  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    handleOpen: () => setOpen(true),
  }));

  const addData = () => {
    setDoc(doc(db, "category/category_1/category_1", "category10_item2"), {
        imgUrl:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/bf1cac6d8e4e4876b6cead7400a185fe_9366/Terrex_AX4_GORE-TEX_Hiking_Shoes_Black_FY9664_01_standard.jpg",
      title: "Clothing, Shoes & Accessories",
      price: "Rs 100/-",
      rating: 5,
    })
      .then(() => {
        console.log("Document written. ");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className=" flex flex-col items-center justify-center"
    >
      <div className=" w-[90%] bg-white">
        XXXXX
        <Button onClick={addData}>Click</Button>
      </div>
    </Modal>
  );
};

export default forwardRef(PaymensModel);
