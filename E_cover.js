const loginform = document.getElementById("container");
const loginbutton = document.getElementById("login");
const body = document.getElementsByClassName("body");
const navbar = document.getElementById("navigation");
const header = document.getElementById("header");
const moviesanimation = document.getElementById("movies-animation-block");
console.log(navbar);
// slider content
const overlaycontainer = document.querySelector(".overlay-container");
const features_section = document.querySelector(".features_section");
const aboutpage = document.querySelector(".about_page");
const footer = document.querySelector(".footer");
//
const sidercontainer = document.querySelector(".animation-container");
const sidervideo = document.querySelector("#video-source");

// navgation link
const navigationlink = document.getElementById("navigation__link");
const navigationcheck = document.getElementById("navi-toggle");
const navigationbackground = document.querySelector(".navigation__nav");

const moviecarddiv = document.getElementById("movies-card-inner");
const moviescarddivouter = document.getElementById("movies-card-outer");
loginbutton.addEventListener("click", function (event) {
  event.preventDefault();
  moviescarddivouter.style.display = "grid";
  header.style.display = "block";
  navbar.style.display = "block";
  overlaycontainer.style.display = "grid";
  features_section.style.display = "block";
  aboutpage.style.display = "grid";
  footer.style.display = "block";
  loginform.style.display = "none";
});
navigationlink.addEventListener("click", function () {
  console.log("welcome ");
  console.log(navigationcheck);
});

const videoElement = document.querySelector(".animation-video-video");
let currenturl = "video/Blackphone2.mp4";
sidercontainer.addEventListener("mouseover", function (event) {
  console.log(event.target.getAttribute("url"));
  currenturl = event.target.getAttribute("url");
  console.log(currenturl);
  videoElement.src = currenturl; // apply directly to <video>, not <source>
  videoElement.load();
  videoElement.play();
});
sidercontainer.addEventListener("mouseleave", function () {
  // Reset to default when mouse leaves the container
  videoElement.src = "video/DrogenWorld.mp4";
  videoElement.load();
  videoElement.play();
});

// popup

const pop = document.querySelector(".popup");
const popimage = document.querySelector(".popup_img");
const popclose = document.querySelector(".popup_close_container");
const poptrailer = document.querySelector(".pop_trailer");
const popmovies = document.querySelector(".popup_details_name");
const movieCards = document.querySelectorAll(".movies-card");
const popgardient =document.querySelector(".popup_gradient");
console.log(popgardient);

movieCards.forEach((card) => {
  card.addEventListener("click", () => {
    const imgSrc = card.querySelector("img").getAttribute("src");
    const stars = card.querySelectorAll(".star-icon");
    const moviesp = card.querySelector(".movies-details-paragraph").textContent;
    const moviesname = card.querySelector(".movies-details-names").textContent;
    pop.style.display = "block";
    const movies_card_default = {
      image: imgSrc,
      stars: stars,
      p: moviesp,
      name: moviesname,
    };
    popmovies.textContent = movies_card_default.name;
    popimage.src = movies_card_default.image;
  });
});

const moviesvideo = {
  AQUAMAN: "video/AQUAMAN - Final Trailer - Now Playing In Theaters.mp4",
  IRONMAN: "../video/Screen Recording 2025-09-03 223305.mp4", //new change
  CaptainAmerica: "video/Captain America Blu-ray Trailer.mp4",
  BlackPhone2:"video/Blackphone2.mp4",
  Thor: "video/Thor (2011) Trailer #1 _ Movieclips Classic Trailers.mp4",
  AntMan:"video/Marvel Studios’ Ant-Man and The Wasp_ Quantumania _ Official Trailer.mp4",
  SpiderMan: "video/SPIDER-MAN [2002] – Official Trailer (HD).mp4",
  ManofSteel: "video/steelman.mp4",
  WonderWoman: "video/WONDER WOMAN -.mp4",
  BlackPanther:"video/Marvel Studios' Black Panther - Official Trailer.mp4",
  DeadpoolWolverine:"video/Bye Bye Bye Opening Scene _ DEADPOOL & WOLVERINE (2024) Movie CLIP HD.mp4",
  Blackwidow: "video/Marvel Studios' Black Widow _ Official Trailer.mp4",
  TheDarkKnight: "video/The Dark Knight - Official Trailer [HD].mp4",
  WorldWarHulk: "video/WORLD WAR HULK (2025) – Teaser Trailer [4K ULTRA HD] _ Mark Ruffalo & Harrison Ford _ (AI Concept).mp4",
  Flash: "video/The Flash – Official Trailer.mp4",
  Avengers: "video/Marvel Studios' Avengers_ Infinity War Official Trailer.mp4",
  DeadPool: "video/deadpool.mp4",
  Zootopia:"video/zootopia.mp4",
  Avatar: "video/Avatar_ The Way of Water _ Official Trailer.mp4",
  CaptainMarvel: "video/Marvel Studios' Captain Marvel - Trailer 2.mp4",
  BigHero6: "video/BIG HERO 6 _ UK Teaser Trailer _ Official Disney UK.mp4",
  FindingNemo: "video/Finding Dory.mp4",
  Megan2: "video/MEGAN.mp4",
  Logan:"video/lorem.mp4",
  Thor:"video/thor.mp4"
 
};
// / thor

function popupvideoname(n) {
  let cleaned = n.replace(/\s+/g, ""); // remove spaces
  for (let key in moviesvideo) {
    if (key.toLowerCase() === cleaned.toLowerCase()) {
      return moviesvideo[key];
    }
  }
  return null;
}


const videopopup = document.querySelector(".popup_video");
const popupvideo = document.querySelector(".popup_video_container");
poptrailer.addEventListener("click", function (event) {
  const name = event.target
    .closest(".popup")
    .querySelector(".popup_details_name").textContent;
  console.log(name.replace(/\s+/g, ""));
  let wsrc = popupvideoname(name);
  console.log("link src",wsrc);
  popupvideo.src = wsrc;
  popupvideo.display = "block";
  videopopup.style.display = "block";
  popupvideo.style.display = "block";
  popgardient.className = "popup_gradient1";

  popupvideo.muted = false;
  popupvideo.currentTime = 0;
  popupvideo.play();
});

popclose.addEventListener("click", function () {
  pop.style.display = "none";
  popupvideo.pause();
  popupvideo.style.display = "none";
  popupvideo.currentTime = 0;
  videopopup.style.display = "none";
  popgardient.className = "popup_gradient";
  console.log(popupvideo);
});
