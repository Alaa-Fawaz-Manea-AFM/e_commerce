import {
  perfume,
  playStation_5,
  speakers,
  womens_Collections,
} from "../assets";
import Subtitle from "./Subtitle";

const Arrival = () => (
  <>
    <Subtitle category="Featured" title="New Arrival" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="w-full h-[600px] relative rounded-md bg-black flex-1">
        <img src={playStation_5} alt="playStation_5" />

        <div className="absolute bottom-8 left-8 text-white space-y-5">
          <h2 className="font-semibold text-2xl">PlayStation 5</h2>
          <p className="text-sm font-normal">
            Black and White version of the PS5 <br /> coming out on sale.
          </p>
          <button
            className="border-b-2 border-white/50 font-medium"
            name="Shop Now"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="grid grid-rows-1 ss:grid-rows-2 gap-5 w-full h-full ss:h-[600px]">
        <div className="relative rounded-md max-h-[570px]">
          <img
            src={womens_Collections}
            alt="women’s_Collections"
            className="object-cover scale-x-[-1]"
          />

          <div className="absolute bottom-8 left-8 text-white space-y-5">
            <h2 className="font-semibold text-2xl">Women’s Collections</h2>
            <p className="text-sm font-normal">
              Featured woman collections that <br />
              give you another vibe.
            </p>
            <button
              className="border-b-2 border-white/50 font-medium"
              name="Shop Now"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col ss:flex-row gap-5">
          <div className="relative bg-black flex-1 rounded-md max-h-[284px]">
            <img
              src={speakers}
              alt="speakers"
              className="object-contain scale-75"
            />

            <div className="absolute bottom-8 left-8 text-white space-y-5">
              <h2 className="font-semibold text-2xl">Speakers</h2>
              <p className="text-sm font-normal">Amazon wireless speakers</p>
              <button
                className="border-b-2 border-white/50 font-medium"
                name="Shop Now"
              >
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative bg-black flex-1 rounded-md max-h-[284px]">
            <img src={perfume} alt="perfume" className="object-contain" />

            <div className="absolute bottom-8 left-8 text-white space-y-5">
              <h2 className="font-semibold text-2xl">Perfume</h2>
              <p className="text-sm font-normal">GUCCI INTENSE OUD EDP</p>
              <button
                className="border-b-2 border-white/50 font-medium"
                name="Shop Now"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Arrival;
