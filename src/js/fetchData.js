const fetchData = (url, func) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => func(data))
    .catch((error) => console.log(error));
};

export { fetchData };
