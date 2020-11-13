//ajax.js

function get_cards(response) {
  const data = JSON.parse(response);

  console.log(data.Basic[0]);
  for (i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.innerText = data.Basic[i].name;
  }
  //   const cardArray = response.data;
  //   console.log(cardArray);
}
let type;
const selector = document.getElementById("selector");
selector.addEventListener("change", (event) => {
  type = event.target.value;
});
let urlByType = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/${type}`;

let url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards";

const ajax = (url, callback, method = "GET") => {
  if (!url) return console.error("Request Required");
  if (!callback) return console.error("get cards Required");

  const request = new XMLHttpRequest();
  request.withCredentials = true;

  const handleStateChange = (evt) => {
    let req = evt.target;
    if (req.readyState !== 4) return;
    if (req.status === 200) return callback(req.response);
    callback("");
  };
  request.open("GET", url);
  request.setRequestHeader(
    "x-rapidapi-key",
    "8175894bd2mshb77d8d3e5dc5cdbp18dd87jsn10f9a41f368e"
  );
  request.setRequestHeader(
    "x-rapidapi-host",
    "omgvamp-hearthstone-v1.p.rapidapi.com"
  );

  request.addEventListener("readystatechange", handleStateChange);

  request.send();
};

ajax(url, get_cards);

const makeCard = (data) => {
  console.log("make a card");
};
