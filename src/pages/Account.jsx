import { useEffect } from "react";
import { Category_page } from "../components";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/MyState";

const Account = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return navigate("/");
  }, [user]);

  return (
    <div className="space-y-5 max-w-screen-2xl w-[95%] sm:w-[90%] mx-auto">
      <div className="mb-20 flex items-center justify-between">
        <Category_page />
      </div>
      <div className="grid grid-cols-4 max-md:items-center justify-between gap-10">
        <div className="col-span-4 md:col-span-1 space-y-2 max-sm:ml-10">
          <div>
            <h2 className="font-medium">Manage My Account</h2>

            <ul className="text-black/50 ml-10 mt-3">
              <li className="text-red">My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium">My Orders</h2>

            <ul className="text-black/50 ml-10 mt-3">
              <li>My Orders</li>
              <li>My Cancellations</li>
            </ul>
          </div>
          <h2 className="font-medium">My WishList</h2>
        </div>

        <div className="shadow_contact py-10 px-5 ss:px-20 col-span-4 md:col-span-3 max-w-[870px] min-h-[630px]">
          <h2 className="text-red font-medium text-xl">Edit Your Profile</h2>

          <form className="space-y-5 mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-5">
              <div>
                <label htmlFor="First Name">First Name</label>
                <div className="bg-gray p-3 rounded-md">
                  <input
                    type="text"
                    name="name"
                    id="First Name"
                    required
                    value={user?.name}
                    placeholder="MD"
                    className="bg-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Last Name">Last Name</label>
                <div className="bg-gray p-3 rounded-md">
                  <input
                    type="text"
                    name="name"
                    id="Last Name"
                    value={user?.lastName}
                    required
                    placeholder="Rimel"
                    className="bg-transparent"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-5">
              <div>
                <label htmlFor="email">Email</label>
                <div className="bg-gray p-3 rounded-md">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user?.email}
                    required
                    placeholder="rimel1111@gmail.com"
                    className="bg-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="name">Address</label>
                <div className="bg-gray p-3 rounded-md">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={user?.address}
                    required
                    placeholder="Kingston, 5236, United State"
                    className="bg-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="Password_Changes">Password Changes</label>
              <div className="bg-gray p-3 rounded-md">
                <input
                  type="password"
                  name="Current Passwod"
                  id="Current_Passwod"
                  required
                  placeholder="Current Passwod"
                  className="bg-transparent"
                />
              </div>
            </div>

            <div className="bg-gray p-3 rounded-md">
              <input
                type="password"
                name="New Passwod"
                required
                placeholder="New Passwod"
                className="bg-transparent"
              />
            </div>
            <div className="bg-gray p-3 rounded-md">
              <input
                type="password"
                name="Confirm New Passwod"
                required
                placeholder="Confirm New Passwod"
                className="bg-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-5 justify-center items-center xs:justify-end">
              <button>Cancel</button>
              <button className="bg-red text-white h-14 w-[214px] rounded-md">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
