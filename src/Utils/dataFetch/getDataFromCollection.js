import { collection, getDocs } from "firebase/firestore/lite";
import db from "../../Firebase/firebase";

const dbData = {};

const getDataFromCollection = (collectionName, setCollectionData) => {
  if (dbData[collectionName] && dbData[collectionName].length > 0) {
    setCollectionData(dbData[collectionName]);
  } else {
    getDocs(collection(db, collectionName))
      .then((querySnapshot) => {
        const dataArr = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //   console.log(doc.id, " => ", doc.data());
          dataArr.push({ ...doc.data(), id: doc.id });
        });
        dbData[collectionName] = dataArr;
        setCollectionData(dataArr);
      })
      .catch((err) => console.log(err));
  }
};

export default getDataFromCollection;
