import "./style/index.scss";
import $ from "jquery";
import { userUrl } from "./js/fetchAddress";

// TODO feedback: 不建议用jquery立即调用，定义方法，然后方法调用就可以了，不然也很难测试
$(function () {
  fetch(userUrl)
    .then((response) => response.json())
    .then((data) => {
      // user.education = data;
      // TODO feedback: 不建议用标签选择器，未来新添加的标签都会被写入src
      $("img").attr("src", data.avatar);
      $(".resume-author").text(data.name);
      $(".resume-author-age").text(data.age);
      $(".about-me-content").text(data.description);
    })
    .catch((error) => {
      console.log(error);
    });
});
