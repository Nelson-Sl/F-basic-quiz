import "./style/index.scss";
import $ from "jquery";
import { user } from "./js/fetchData";

console.log(user);

$(function () {
  $("img").attr("src", user.info.avatar);
  $(".resume-author").text(user.info.name);
  $(".resume-author-age").text(user.info.age);
});
