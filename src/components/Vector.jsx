import {
  customer_service,
  FREE_AND_FAST_DELIVERY,
  MONEY_BACK_GUARANTEE,
} from "../assets";

const Vector = () => (
  <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-10">
    <div className="flex items-center flex-col gap-2">
      <div className="p-3 w-fit rounded-full bg-gray_vetcor">
        <img
          src={FREE_AND_FAST_DELIVERY}
          alt="FREE AND FAST DELIVERY"
          className="w-14"
        />
      </div>

      <h2 className="font-semibold text-xl">FREE AND FAST DELIVERY</h2>
      <p className="text-sm">Free delivery for all orders over $140</p>
    </div>
    <div className="flex items-center flex-col gap-2">
      <div className="p-3 w-fit rounded-full bg-gray_vetcor">
        <img src={customer_service} alt="CUSTOMER SERVICE" className="w-14" />
      </div>

      <h2 className="font-semibold text-xl">24/7 CUSTOMER SERVICE</h2>
      <p className="text-sm">Friendly 24/7 customer support</p>
    </div>
    <div className="flex items-center flex-col gap-2">
      <div className="p-3 w-fit rounded-full bg-gray_vetcor">
        <img
          src={MONEY_BACK_GUARANTEE}
          alt="MONEY BACK GUARANTEE"
          className="w-14"
        />
      </div>

      <h2 className="font-semibold text-xl">MONEY BACK GUARANTEE</h2>
      <p className="text-sm">We reurn money within 30 days</p>
    </div>
  </div>
);

export default Vector;
