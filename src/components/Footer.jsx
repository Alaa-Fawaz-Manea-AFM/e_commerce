import { PiTwitterLogoBold } from "react-icons/pi";
import { links_footer } from "../constant/constant";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { app_store_apple, google_play, QrCode, send } from "../assets";

const Footer = () => (
  <footer className="bg-black max-w-screen-2xl mx-auto space-y-20 text-white p-10 ss:p-16 mt-32">
    <div className="flex flex-wrap items-start justify-between gap-12">
      <div className="space-y-5">
        <h1 className="text-2xl font-bold">Exclusive</h1>

        <h2 className="text-xl font-medium">Subscribe</h2>
        <p>Get 10% off your first order</p>

        <form className="bg-black border-2 border-gray flex items-center gap-2 px-3 py-2 rounded-md">
          <input
            type="email"
            required
            id="email_footer"
            name="email_footer"
            className="w-full p-1 bg-transparent outline-none border-none"
            placeholder="Enter your email"
          />
          <label htmlFor="email_footer">
            <img src={send} alt="send" className="w-7 h-7 cursor-pointer" />
          </label>
        </form>
      </div>

      <div>
        <h2 className="text-xl font-medium">Support</h2>
        <ul className="space-y-2 mt-2">
          <li>
            111 Bijoy sarani, Dhaka, <br />
            DH 1515, Bangladesh.
          </li>
          <li>
            <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
          </li>
          <li>
            <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
          </li>
        </ul>
      </div>

      {links_footer.map((item) => (
        <div key={item.title}>
          <h2 className="text-xl font-medium">{item.title}</h2>
          <ul className="space-y-2 mt-2">
            {item.links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="space-y-5">
        <h1 className="text-xl font-medium">Download App</h1>

        <div className="space-y-2">
          <p>Save $3 with App New User Only</p>

          <div className="flex items-center gap-2">
            <img
              src={QrCode}
              alt="QrCode"
              className="object-cover cursor-pointer w-20"
            />
            <div className="flex flex-col items-center">
              <img
                src={google_play}
                alt="google-play"
                className="object-cover cursor-pointer w-32 h-12"
              />
              <img
                src={app_store_apple}
                alt="app-store-apple"
                className="object-cover cursor-pointer w-28 h-12"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <FaFacebookF color="white" size={25} />
          <PiTwitterLogoBold color="white" size={25} />
          <FaInstagram color="white" size={25} />
          <FaLinkedinIn color="white" size={25} />
        </div>
      </div>
    </div>
    <p className="opacity-50 text-center">
      &copy; Copyright Rimel 2022. All right reserved
    </p>
  </footer>
);

export default Footer;
