import "./style/index.scss";
import { userEducationUrl, userUrl } from "./js/fetchAddress";
import { insertAuthorInfo, insertEducationInfo } from "./js/insertContent";
import { fetchData } from "./js/fetchData";

// fetch(userUrl)
//     .then((response) => response.json())
//     .then((data) => {
//         insertAuthorInfo(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// fetch(userEducationUrl)
//     .then((response) => response.json())
//     .then((data) => {
//         insertEducationInfo(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

fetchData(userUrl, insertAuthorInfo);
fetchData(userEducationUrl, insertEducationInfo);
