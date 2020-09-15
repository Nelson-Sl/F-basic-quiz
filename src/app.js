import "./style/index.scss";
import $ from "jquery";
import { userUrl } from "./js/fetchAddress";

$(function () {
  fetch(userUrl)
    .then((response) => response.json())
    .then((data) => {
      // user.education = data;
      $("img").attr("src", data.avatar);
      $(".resume-author").text(data.name);
      $(".resume-author-age").text(data.age);
      $(".about-me-content").text(data.description);
    })
    .catch((error) => {
      console.log(error);
    });
});
