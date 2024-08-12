const Countdown = () => (
  <div className="flex items-end gap-1 -mb-2">
    <div className="">
      <span className="text-xs font-medium block">Days</span>
      <b className="text-[32px] font-bold">03</b>
    </div>
    <b className="text-xl mb-3 text-red">:</b>
    <div className="">
      <span className="text-xs font-medium block">Hours</span>
      <b className="text-[32px] font-bold">23</b>
    </div>
    <b className="text-xl mb-3 text-red">:</b>
    <div className="">
      <span className="text-xs font-medium block">Minutes</span>
      <b className="text-[32px] font-bold">19</b>
    </div>
    <b className="text-xl mb-3 text-red">:</b>
    <div>
      <span className="text-xs font-medium block">Seconds</span>
      <b className="text-[32px] font-bold">56</b>
    </div>
  </div>
);

export default Countdown;
