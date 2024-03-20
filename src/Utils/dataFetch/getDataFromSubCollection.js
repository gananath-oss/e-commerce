import { collection, getDocs } from "firebase/firestore/lite";
import db from "../../Firebase/firebase";

const dbData = {};

const getDataFromSubCollection = (
  collectionName,
  documentId,
  subCollectionName,
  setCollectionData
) => {
  if (
    dbData[collectionName] &&
    dbData[collectionName][documentId] &&
    dbData[collectionName][documentId][subCollectionName] &&
    dbData[collectionName][documentId][subCollectionName].length > 0
  ) {
    setCollectionData(dbData[collectionName][documentId][subCollectionName]);
  } else {
    getDocs(
      collection(db, `${collectionName}/${documentId}/${subCollectionName}`)
    )
      .then((querySnapshot) => {
        const dataArr = [];
        querySnapshot.forEach((doc) => {
          dataArr.push({ ...doc.data(), id: doc.id });
        });

        if (dbData[collectionName]) {
          if (dbData[collectionName][documentId]) {
            if (dbData[collectionName][documentId][subCollectionName]) {
              dbData[collectionName][documentId][subCollectionName] = dataArr;
            } else {
              dbData[collectionName][documentId] = {
                ...dbData[collectionName][documentId],
                [subCollectionName]: dataArr,
              };
            }
          } else {
            dbData[collection] = {
              ...dbData[collectionName],
              [documentId]: dataArr,
            };
          }
        } else {
          dbData[collectionName] = {
            [documentId]: dataArr,
          };
        }
        setCollectionData(dataArr);
      })
      .catch((err) => console.log(err));
  }
};

export default getDataFromSubCollection;
