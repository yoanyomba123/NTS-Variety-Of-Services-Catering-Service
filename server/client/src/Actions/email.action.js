import axios from "axios";

export const sendEmail = (userData, history) => {
  console.log("IN SEND EMAIL");
  axios
    .post("/NTS/Email", userData)
    .then(result => history.push("/Home"))
    .catch(error => {
      console.log(error);
    });
};
