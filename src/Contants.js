import bgImg from "./Assets/bg-slate.png";
import BlackCoffee from "/black.png";
import Cover from "./Assets/coffee-cover.jpg";
import Map from "./Assets/world-map.png";
import coffee1 from "./Assets/coffee/coffee1.png";
import coffee3 from "./Assets/coffee/coffee3.png";
import banner from "./Assets/website/banner.jpg"
import AppStore from "./Assets/website/app_store.png";
import PlayStore from "./Assets/website/play_store.png";
import Credits from "./Assets/website/credit-cards.webp";

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const coverImg = {
  backgroundImage: `url(${Cover})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};

export const Image = {
  bgImage: bgImage,
  BlackCoffee: BlackCoffee,
  Cover: coverImg,
  Map: Map,
  banner: banner,
  AppStore: AppStore,
  PlayStore: PlayStore,
  Credits: Credits,
};

export const Service = [
  {
    image: coffee3,
    title: "Black Coffee",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: coffee1,
    title: "Hot Coffee",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: coffee3,
    title: "Cold Coffee",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
