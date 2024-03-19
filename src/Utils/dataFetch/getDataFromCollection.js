import { QuerySnapshot, collection, getDocs } from "firebase/firestore/lite";
import db from "../../Firebase/firebase";

const getDataFromCollection = (collectionName, setCollectionData) => {
  getDocs(collection(db, collectionName)).then((querySnapshot) => {
    const dataArr = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      dataArr.push({ ...doc.data(), id: doc.id });
    });
    // console.log(dataArr);
    setCollectionData(dataArr);
  });
};

export default getDataFromCollection;
