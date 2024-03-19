import { collection, getDocs } from "firebase/firestore/lite";
import db from "../../Firebase/firebase";

// const dbData = {};

const getDataFromSubCollection = (
  collectionName,
  documentId,
  subCollectionName,
  setCollectionData
) => {
  getDocs(
    collection(db, `${collectionName}/${documentId}/${subCollectionName}`)
  ).then((querySnapshot) => {
    const dataArr = [];
    querySnapshot.forEach((doc) => {
      dataArr.push({ ...doc.data(), id: doc.id });
    });
    //   dbData[collectionName] = dataArr;
    setCollectionData(dataArr);
  });
};

export default getDataFromSubCollection;
