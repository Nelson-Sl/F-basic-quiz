import $ from "jquery";

const insertAuthorInfo = (data) => {
  $("img").attr("src", data.avatar);
  $(".resume-author").text(data.name);
  $(".resume-author-age").text(data.age);
  $(".about-me-content").text(data.description);
};

const insertEducationInfo = (data) => {
  data.map((eduData) =>
    $("ul").append(`<li class="education-content-item">
            <div class="education-content-year">${eduData.year}</div>
            <div class="education-content-titDesc">
                <p class="education-content-title">${eduData.title}</p>
                <p class="education-content-description">${eduData.description}</p>
            <div>
        </li>`)
  );
};

export { insertAuthorInfo, insertEducationInfo };
