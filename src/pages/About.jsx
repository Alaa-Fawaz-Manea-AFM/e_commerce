import { CiShop } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Category_page, Silder, Vector } from "../components";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";
import { portrait_two_african } from "../assets";

const About = () => (
  <div className="space-y-20 mb-20 max-w-screen-2xl w-[95%] sm:w-[90%] mx-auto">
    <Category_page />

    <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-items-center ml-auto gap-10">
      <div className="space-y-10 md:col-span-2 max-w-[525px] max-h-[536px] w-11/12">
        <h1 className="text-[54px]">Our Story</h1>
        <div className="space-y-5">
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>

          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
      </div>

      <div className="md:col-span-3 max-w-[705px] h-[609px] rounded-md overflow-hidden">
        <img
          src={portrait_two_african}
          alt="portrait-two-african"
          className="object-cover"
        />
      </div>
    </div>

    <div className="flex flex-wrap gap-10 justify-center">
      <div className="border-2 border-gray_vetcor w-[270px] h-[230px] rounded-md flex flex-col items-center justify-center hover:bg-red hover:text-white group">
        <div className="p-3 bg-gray_vetcor group-hover:bg-gray/50 rounded-full">
          <div className="w-12 h-12 rounded-full group-hover:bg-white bg-black">
            <CiShop
              size={30}
              className="m-auto h-full text-white group-hover:text-black"
            />
          </div>
        </div>

        <b className="text-[32px] font-bold">10.5k</b>
        <p className="">Sallers active our site</p>
      </div>

      <div className="border-2 border-gray_vetcor w-[270px] h-[230px] rounded-md flex flex-col items-center justify-center hover:bg-red _transition hover:text-white group">
        <div className="p-3 bg-gray_vetcor group-hover:bg-gray/50 rounded-full">
          <div className="w-12 h-12 rounded-full group-hover:bg-white bg-black">
            <PiCurrencyCircleDollarBold
              size={30}
              className="m-auto h-full text-white group-hover:text-black"
            />
          </div>
        </div>

        <b className="text-[32px] font-bold">33k</b>
        <p className="">Mopnthly Produduct Sale</p>
      </div>

      <div className="border-2 border-gray_vetcor w-[270px] h-[230px] rounded-md flex flex-col items-center justify-center hover:bg-red _transition hover:text-white group">
        <div className="p-3 bg-gray_vetcor group-hover:bg-gray/50 rounded-full">
          <div className="w-12 h-12 rounded-full group-hover:bg-white bg-black">
            <LiaShoppingBagSolid
              size={30}
              className="m-auto h-full text-white group-hover:text-black"
            />
          </div>
        </div>

        <b className="text-[32px] font-bold">45.5k</b>
        <p className="">Customer active in our site</p>
      </div>

      <div className="border-2 border-gray_vetcor w-[270px] h-[230px] rounded-md flex flex-col items-center justify-center hover:bg-red _transition hover:text-white group">
        <div className="p-3 bg-gray_vetcor group-hover:bg-gray/50 rounded-full">
          <div className="w-12 h-12 rounded-full group-hover:bg-white bg-black">
            <FaSackDollar
              size={30}
              className="m-auto h-full text-white group-hover:text-black"
            />
          </div>
        </div>

        <b className="text-[32px] font-bold">25k</b>
        <p className="">Anual gross sale in our site</p>
      </div>
    </div>

    <Silder />

    <div className="my-10">
      <Vector />
    </div>
  </div>
);

export default About;
