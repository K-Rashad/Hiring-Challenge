import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../../public/images/Logo";
import { SearchIcon } from "../../public/images/searchIcon";
import Button from "./buttonComponent";

export default function NavBar() {
  const navigation = useNavigate();
  const handleNav = () => {
    navigation("/admin");
  };
  const location = useLocation();
  return (
    <div className="flex border-b justify-between px-6 h-16 w-full">
      {/* left div */}
      <div className="flex items-center font-graphik text-sm text-mainDark gap-10 relative">
        <div className="relative">
          <a href="/">
            {" "}
            <Logo width="50" height="28" />
          </a>
        </div>
        <div className=" gap-7 hidden lg:flex">
          <div>Home</div>
          <div>Features</div>
          <div>Explore Creators</div>
          <div>FAQ</div>
        </div>
      </div>
      {/* right div */}
      <div className="flex items-center gap-3">
        {location.pathname === "/admin" ? (
          <div className="flex items-center gap-2">
            <div className="text-slate-700">Admin</div>
            <div>
              <img
                src="https://xsgames.co/randomusers/avatar.php?g=female"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <div className="relative hidden sm:block">
              <div className="absolute top-2 left-2">
                <SearchIcon width="20" height="20" />
              </div>

              <input
                type="text"
                className="border rounded-full outline-none py-1 pl-10 placeholder:text-slate-400 font-graphik placeholder:text-sm focus:border-mainDark "
                placeholder="Search Creators"
              />
            </div>
            <Button
              buttonDialogue="Sign in"
              isViolet={false}
              isLoading={false}
              isWhite={true}
              additionClassName="text-sm text-black px-4"
              onClick={handleNav}
            />
            <Button
              buttonDialogue="Sign Up"
              isViolet={true}
              isLoading={false}
              isWhite={false}
              additionClassName="px-4"
              onClick={handleNav}
            />
          </div>
        )}
      </div>
    </div>
  );
}
