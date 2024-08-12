import { useState } from "react";
import { Category_page } from "../components";
import { HiOutlinePhone } from "react-icons/hi";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (e) => {
    const target = e.target;
    setForm((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  return (
    <div className="space-y-20 sm:px-10 max-w-screen-2xl w-[95%] sm:w-[90%] mx-auto">
      <div className="mb-20">
        <Category_page />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1 shadow_contact space-y-7 px-9 py-10 max-w-[340px] ml-0 md:ml-0 xs:ml-10">
          <div className="space-y-5">
            <div className="flex items-center gap-5">
              <div className="bg-red w-12 h-12 rounded-full flex items-center justify-center">
                <HiOutlinePhone color="white" size={30} />
              </div>

              <h3 className="font-semibold">Call To Us</h3>
            </div>

            <p className="text-sm">We are available 24/7, 7 days a week.</p>
            <a href="tel:+8801611112222" className="block text-sm">
              Phone: +8801611112222
            </a>
          </div>

          <hr />

          <div className="space-y-5">
            <div className="flex items-center gap-5">
              <div className="bg-red w-12 h-12 rounded-full flex items-center justify-center">
                <HiOutlinePhone color="white" size={30} />
              </div>

              <h3 className="font-semibold">Write To US</h3>
            </div>

            <p className="text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <a href="mailto:customer@exclusive.com" className="block text-sm">
              Emails: customer@exclusive.com
            </a>
            <a href="mailto:support@exclusive.com" className="block text-sm">
              Emails: support@exclusive.com
            </a>
          </div>
        </div>

        <form className="md:col-span-2 px-4 xs:px-8 py-10 space-y-5">
          <div className="grid grid-cols-12 gap-5">
            <div
              id="red_start"
              className="bg-gray h-12 w-full rounded-md flex items-center col-span-12 xs:col-span-6 sm:col-span-4"
            >
              <input
                onChange={onChange}
                value={form.name}
                required
                type="text"
                name="name"
                id="name"
                className="bg-transparent pl-2 outline-none"
              />
              <label htmlFor="name">
                <span className="text-gray_vetcor">Your Name </span>
                <span className="text-red">*</span>
              </label>
            </div>

            <div
              id="red_start"
              className="bg-gray h-12 w-full rounded-md flex items-center col-span-12 xs:col-span-6 sm:col-span-4"
            >
              <input
                value={form.email}
                onChange={onChange}
                required
                type="text"
                name="email"
                id="email"
                className="bg-transparent pl-2 outline-none"
              />
              <label htmlFor="email" className="pl-2 opacity-50">
                <span className="text-gray_vetcor">Your Email </span>
                <span className="text-red">*</span>
              </label>
            </div>

            <div
              id="red_start"
              className="bg-gray h-12 w-full rounded-md flex items-center col-span-12 xs:col-span-12 sm:col-span-4"
            >
              <input
                onChange={onChange}
                value={form.phone}
                required
                type="text"
                name="phone"
                id="phone"
                className="bg-transparent pl-2 outline-none"
              />
              <label htmlFor="phone" className="pl-2 opacity-50">
                <span className="text-gray_vetcor">Your Phone </span>
                <span className="text-red">*</span>
              </label>
            </div>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              onChange={onChange}
              value={form.message}
              className="w-full min-h-52 max-h-52 p-2 outline-none bg-gray-100 rounded-md bg-gray"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red rounded-md w-52 h-14 text-white"
            >
              Send Massage
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
