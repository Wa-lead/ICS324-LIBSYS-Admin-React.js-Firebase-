import {
  collection,
  orderBy,
  onSnapshot,
  query,
  getDocs,
  getDoc,
  where,
  doc,
} from "@firebase/firestore";
import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useReport4 = (Collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const colRef = collection(projectFirestore, "Borrows");
    //orderBy(colRef,'createdAt','desc');
    const unsubscribe = onSnapshot(colRef, async () => {
      const documentOfUsers = [];
      const w = collection(projectFirestore, "User");
      let q = await getDocs(w);
      q.forEach((doc) => {
        documentOfUsers.push(doc.data());
      });

      const arrayOfusers = [];

      for (var i = 0; i < documentOfUsers.length; i++) {
        const w = query(colRef, where("SSN", "==", documentOfUsers[i].SSN));
        const q = await getDocs(w);
        let resDocument = [];
        q.forEach((document) => {
          resDocument.push(document.data());
        });

        //now we got all borrow docs regarding one user;
        documentOfUsers[i].num = 0;

        // now we iterate through them to see which one is returned + when was it returned;
        for (var j = 0; j < resDocument.length; j++) {
          if (resDocument[j].returned) {
            var time1 = resDocument[j].ReturnDate.toDate();
            var time2 = resDocument[j].returned.toDate();
            var differenceOfDays = (time1 - time2) / (1000 * 3600 * 24);

            if (differenceOfDays > 0) {
              documentOfUsers[i].num = documentOfUsers[i].num + 1;
            }
          }
        }
        if (documentOfUsers[i].num > 0) {
          arrayOfusers.push(documentOfUsers[i]);
        }
      }

      setDocs(arrayOfusers);
    });

    return () => unsubscribe();
  }, [Collection]);
  return {
    docs,
  };
};

export default useReport4;

// for (const key in userID) {
//     "reservation".limit=3,where(borrwer.userID).get().size=>3;
// }
