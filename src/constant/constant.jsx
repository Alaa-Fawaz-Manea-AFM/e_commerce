import { CiTwitter } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
  camera,
  gaming,
  phones,
  computers,
  headPhones,
  Tom_Cruise,
  smartWatch,
  Will_Smith,
  Emma_Watson,
  slider_home_1,
  slider_home_2,
  slider_home_3,
  slider_home_4,
} from "../assets";

const slider_home_array = [
  {
    category: "electronics",
    title: "realme 12 Pro+ 5G",
    uid: "PvBJ00Pbdm5vW2Y1zEPj",
    img: slider_home_1,
  },
  {
    uid: "WenPPw1qIMIbs614j3c5",
    category: "Home & lifestyle",
    title: "Wall Sculpture Decor",
    img: slider_home_2,
  },
  {
    category: "Medicine",
    uid: "oETckvRXBRt7Vw7IbFAY",
    title: "Pill Box Portable Medicine",
    img: slider_home_3,
  },
  {
    title: "Samsung 22-Inch",
    category: "electronics",
    uid: "wnYHvYSZ2ruyXY7Fmpuo",
    img: slider_home_4,
  },
];

const categories = [
  {
    title: "Phones",
    icon: phones,
  },
  {
    title: "Computers",
    icon: computers,
  },
  {
    title: "SmartWatch",
    icon: smartWatch,
  },
  {
    title: "Camera",
    icon: camera,
  },
  {
    title: "headPhones",
    icon: headPhones,
  },
  {
    title: "Gaming",
    icon: gaming,
  },
];

const links_Navbar = ["home", "contact", "about", "wishlist"];

const links_footer = [
  {
    title: "Account",
    links: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
  },
  {
    title: "Quick Link",
    links: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
  },
];

const sliders = [
  {
    name: "Tom Cruise",
    paragraph: "Founder & Chairman",
    img: Tom_Cruise,
    icon_Twitter: <CiTwitter size={25} />,
    icon_Instagram: <FaInstagram size={25} />,
    icon_LinkedinIn: <FaLinkedinIn size={25} />,
  },
  {
    name: "Tom Cruise",
    paragraph: "Managing Director",
    img: Emma_Watson,
    icon_Twitter: <CiTwitter size={25} />,
    icon_Instagram: <FaInstagram size={25} />,
    icon_LinkedinIn: <FaLinkedinIn size={25} />,
  },
  {
    name: "Tom Cruise",
    paragraph: "Product Designer",
    img: Will_Smith,
    icon_Twitter: <CiTwitter size={25} />,
    icon_Instagram: <FaInstagram size={25} />,
    icon_LinkedinIn: <FaLinkedinIn size={25} />,
  },
  {
    name: "Tom Cruise",
    paragraph: "Founder & Chairman",
    img: Tom_Cruise,
    icon_Twitter: <CiTwitter size={25} />,
    icon_Instagram: <FaInstagram size={25} />,
    icon_LinkedinIn: <FaLinkedinIn size={25} />,
  },
  {
    name: "Tom Cruise",
    paragraph: "Managing Director",
    img: Emma_Watson,
    icon_Twitter: <CiTwitter size={25} />,
    icon_Instagram: <FaInstagram size={25} />,
    icon_LinkedinIn: <FaLinkedinIn size={25} />,
  },
  {
    name: "Tom Cruise",
    paragraph: "Product Designer",
    img: Will_Smith,
    icon_Twitter: <CiTwitter size={25} />,
    icon_Instagram: <FaInstagram size={25} />,
    icon_LinkedinIn: <FaLinkedinIn size={25} />,
  },
  {
    name: "Tom Cruise",
    paragraph: "Founder & Chairman",
    img: Tom_Cruise,
    icon_Twitter: <CiTwitter size={25} />,
    icon_Instagram: <FaInstagram size={25} />,
    icon_LinkedinIn: <FaLinkedinIn size={25} />,
  },
  {
    name: "Tom Cruise",
    paragraph: "Managing Director",
    img: Emma_Watson,
    icon_Twitter: <CiTwitter size={25} />,
    icon_Instagram: <FaInstagram size={25} />,
    icon_LinkedinIn: <FaLinkedinIn size={25} />,
  },
  {
    name: "Tom Cruise",
    paragraph: "Product Designer",
    img: Will_Smith,
    icon_Twitter: <CiTwitter size={25} />,
    icon_Instagram: <FaInstagram size={25} />,
    icon_LinkedinIn: <FaLinkedinIn size={25} />,
  },
];

export { slider_home_array, categories, links_footer, links_Navbar, sliders };
