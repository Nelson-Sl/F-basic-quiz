import "./style/index.scss";
import $ from "jquery";
import { userEducationUrl, userUrl } from "./js/fetchAddress";

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

  fetch(userEducationUrl)
    .then((response) => response.json())
    .then((data) => {
      data.map((eduData) =>
        $("ul").append(`<li class="education-content-item">
                    <div>${eduData.year}</div>
                    <div>
                        <p>${eduData.title}</p>
                        <p>${eduData.description}</p>
                    <div>
                </li>`)
      );
    })
    .catch((error) => {
      console.log(error);
    });
});
