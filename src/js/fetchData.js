import { userUrl, userEducationUrl } from "./fetchAddress";

const user = {};
fetch(userUrl)
  .then((response) => response.json())
  .then((data) => {
    user.info = data;
  })
  .catch((error) => {
    console.log(error);
  });

fetch(userEducationUrl)
  .then((response) => response.json())
  .then((data) => {
    user.education = data;
  })
  .catch((error) => {
    console.log(error);
  });

export { user };
