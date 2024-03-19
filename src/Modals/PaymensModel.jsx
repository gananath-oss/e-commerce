import { Button, Modal } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import db from "../Firebase/firebase";
import { addDoc, collection } from "firebase/firestore/lite";

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
    addDoc(collection(db, "users"), {
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912,
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef);
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
