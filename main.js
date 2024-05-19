const r = document.querySelector(":root");
const bodyElement = document.body;
const randomizeElement = document.querySelector(".randomize");
const destinations = [
  {
    name: "Sahara",
    location: "Marrakech",
    img:
      "https://cdn.pixabay.com/photo/2021/11/26/17/26/dubai-desert-safari-6826298_1280.jpg"
  },
  {
    name: "Maldives",
    location: "Indian Ocean",
    img:
      "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg"
  },
  {
    name: "Dolomites",
    location: "Italy",
    img:
      "https://cdn.pixabay.com/photo/2020/03/29/09/24/pale-di-san-martino-4979964_1280.jpg"
  },
  {
    name: "Highland",
    location: "Scotland",
    img:
      "https://cdn.pixabay.com/photo/2014/11/21/03/26/neist-point-540119_1280.jpg"
  },
  {
    name: "Kleifarvatn",
    location: "Iceland",
    img:
      "https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111811_1280.jpg"
  },
  {
    name: "Taj Mahal",
    location: "India",
    img:
      "https://cdn.pixabay.com/photo/2023/08/19/13/26/ai-generated-8200484_1280.jpg"
  },
  {
    name: "Colorado",
    location: "Arizona",
    img:
      "https://cdn.pixabay.com/photo/2016/11/29/03/13/desert-1867005_1280.jpg"
  },
  {
    name: "Santorin",
    location: "Greece",
    img:
      "https://cdn.pixabay.com/photo/2017/01/30/07/54/church-2020258_1280.jpg"
  },
  {
    name: "Petra",
    location: "Jordan",
    img: "https://cdn.pixabay.com/photo/2019/07/20/19/12/petra-4351361_1280.jpg"
  },
  {
    name: "Fundy",
    location: "Canada",
    img: "https://cdn.pixabay.com/photo/2020/11/22/07/11/river-5765785_1280.jpg"
  },
  {
    name: "Fuji",
    location: "Japan",
    img: "https://cdn.pixabay.com/photo/2016/12/12/22/31/japan-1902834_1280.jpg"
  },
  {
    name: "Ha Long Bay",
    location: "Vietnam",
    img:
      "https://cdn.pixabay.com/photo/2022/10/21/10/00/marvel-7536676_1280.jpg"
  }
];
let nextDestination = destinations[1];

const getRandomDestination = () => {
  const randomId = Math.floor(Math.random() * destinations.length);
  return destinations[randomId];
};

const displayNextContent = () => {
  if (bodyElement.classList.contains("body--animated")) {
    return;
  }

  bodyElement.classList.add("body--animated");

  setTimeout(() => {
    r.style.setProperty("--img-current", `url(${nextDestination.img})`);
    r.style.setProperty("--text-current-title", `"${nextDestination.name}"`);
    r.style.setProperty(
      "--text-current-subtitle",
      `"${nextDestination.location}"`
    );
    setTimeout(() => {
      bodyElement.classList.remove("body--animated");
      setTimeout(() => {
        nextDestination = getRandomDestination();
        r.style.setProperty("--img-next", `url(${nextDestination.img})`);
        r.style.setProperty("--text-next-title", `"${nextDestination.name}"`);
        r.style.setProperty(
          "--text-next-subtitle",
          `"${nextDestination.location}"`
        );
      }, 1000);
    }, 1000);
  }, 1000);
};

randomizeElement.addEventListener("click", displayNextContent);

// start on fist load only for CodePen Animation ;)
displayNextContent();
