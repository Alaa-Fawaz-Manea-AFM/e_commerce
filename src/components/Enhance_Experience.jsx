import { JBL_BOOMBOX_2_HERO_020_x1 } from "../assets";

const Enhance_Experience = () => (
  <div className="grid items-center grid-cols-1 md:grid-cols-2 bg-black rounded-md text-white max-w-screen-2xl min-h-[500px] ss:p-10">
    <div className="h-96 mx-auto flex flex-col max-sm:items-center justify-around">
      <p className="text-green font-semibold">Categories</p>
      <h1 className="text-3xl md:text-5xl">
        Enhance Your <br /> Music Experience
      </h1>

      <div className="flex items-center max-sm:justify-center flex-wrap gap-5 text-black">
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center flex-col">
          <span className="font-semibold">23</span>
          <p className="text-xs">Hours</p>
        </div>
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center flex-col">
          <span className="font-semibold">23</span>
          <p className="text-xs">Hours</p>
        </div>
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center flex-col">
          <span className="font-semibold">23</span>
          <p className="text-xs">Hours</p>
        </div>
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center flex-col">
          <span className="font-semibold">23</span>
          <p className="text-xs">Hours</p>
        </div>
      </div>

      <button name="Buy Now!" className="px-12 py-3 rounded-md bg-green w-fit">
        Buy Now!
      </button>
    </div>
    <div className="h-[420px] w-full">
      <img
        src={JBL_BOOMBOX_2_HERO_020_x1}
        alt="JBL_BOOMBOX_2_HERO_020_x1"
        className="object-cover"
      />
    </div>
  </div>
);

export default Enhance_Experience;
