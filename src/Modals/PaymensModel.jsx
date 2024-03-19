import { Button, Modal } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
// import db from "../Firebase/firebase";
// import { doc, setDoc } from "firebase/firestore/lite";

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
    // setDoc(doc(db, "category", "category_11"), {
    //   title: "Baby Essentials",
    //   imgUrl:
    //     "https://m.media-amazon.com/images/I/81sIfScfgbL._AC_UF894,1000_QL80_.jpg",
    // })
    //   .then(() => {
    //     console.log("Document written. ");
    //   })
    //   .catch((error) => {
    //     console.error("Error adding document: ", error);
    //   });
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
