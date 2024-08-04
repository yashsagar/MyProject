import { userCollection } from "../fireStore";
import { addDoc } from "firebase/firestore";

export function manageUser({ type = "login", load } = {}) {
  let returnValue = "";
  switch (type) {
    case "add":
      returnValue = addDoc(userCollection, {
        name: load.name,
        password: load.password,
        email: load.email,
      });
    // .then(() => {
    //   return new Promise((resolve) => {
    //     resolve("success");
    //   });
    // })
    // .catch((error) => {
    //   return new Promise((resolve) => {
    //     resolve(error);
    //   });
    // });
  }
  return returnValue;
}
