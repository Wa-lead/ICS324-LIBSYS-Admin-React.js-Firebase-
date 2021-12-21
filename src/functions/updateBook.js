import {
  collection,
  updateDoc,
  deleteField,
  deleteDoc,
  doc,
  query,
  where,
  getDocs,
  getDoc,
} from "@firebase/firestore";

import { projectFirestore } from "../firebase/config";
import { Email } from "@mui/icons-material";

const updateBook = async (
  id,
  ISBN,
  title,
  subject,
  pub_date,
  rack_num,
  author,
  copies,
  currentCopies
) => {
  const collectionRef = collection(projectFirestore, "Book");
  updateDoc(doc(collectionRef, id), {
    ISBN: ISBN,
    title: title,
    subject: subject,
    pub_date: pub_date,
    rack_num: rack_num,
    author: author,
    copies: parseInt(copies),
  });

  if (currentCopies == 0) {
    var reservingUsers = [];
    var reserveRef = collection(projectFirestore, "Reserves");
    const q = query(reserveRef, where("barcode", "==", id));
    const bookReservation = await getDocs(q);
    bookReservation.forEach(async (docs) => {
      const q = docs.data();
      var p = await getDoc(doc(collection(projectFirestore, "User"), q.SSN));
      var u = p.data();
      // reservingUsers.push(u.Email);
      console.log(u.Email);
      sendemail(u.Email);
    });
    //     // console.log(reservingUsers[0]);
    //     // const data = new FormData();
    //     // data.append('email',reservingUsers);
    //   sendemail(data);
  }
};

export default updateBook;

function sendemail(email) {
  const data = { Email: email };
  fetch("http://localhost:8080/sendEmail", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
