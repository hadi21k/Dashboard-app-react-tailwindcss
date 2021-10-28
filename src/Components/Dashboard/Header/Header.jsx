import { useEffect, useRef, useState } from "react";
import { HomeIcon } from "@heroicons/react/solid";
import HeaderForm from "./HeaderForm";
import {
  MenuIcon,
  UserCircleIcon,
  CogIcon,
  BellIcon,
  MenuAlt1Icon,
} from "@heroicons/react/solid";
import { useShownContext } from "../../../Hooks/context";
import NotificationSection from "./NotificationSection";

const Header = ({ sectionName }) => {
  const { isSigned } = useShownContext();
  const { isShown, setIsShown } = useShownContext();
  const [showNoti, setShowNoti] = useState(false);
  const makeShowNoti = () => {
    setShowNoti((prevShow) => !prevShow);
  };
  return (
    <div className="min-h-[92px] relative bg-white rounded-xl shadow-lg">
      <div className="flex flex-col items-start justify-between h-full px-4 py-6 space-y-4 sm:space-y-0 sm:items-center sm:flex-row ">
        <div className="flex flex-col space-y-1 title">
          <div className="flex items-center space-x-[3px]">
            <HomeIcon className="w-5 h-5 text-gray-600" />
            <h3 className="text-sm font-semibold text-gray-600">
              {sectionName}
            </h3>
          </div>
          <div className="text-base font-bold text-gray-700">{sectionName}</div>
        </div>
        <div className="flex flex-col items-start h-full space-y-4 sm:space-x-6 sm:items-center sm:flex-row">
          <HeaderForm />
          <div className="flex items-center space-x-[15px] ml-1">
            <div className="md:flex hidden items-center space-x-[1px] cursor-pointer transition-all duration-500 transform hover:-translate-x-1 signin">
              <UserCircleIcon className="w-5 h-5 text-gray-700 " />
              <h3 className="text-sm font-semibold text-gray-700">
                {isSigned ? "Sign out" : "Sign in"}
              </h3>
            </div>
            <div className="flex items-center space-x-2">
              {isShown ? (
                <MenuIcon
                  onClick={() => setIsShown(!isShown)}
                  className="block w-5 h-5 text-gray-700 transition-all duration-500 transform cursor-pointer lg:hidden"
                />
              ) : (
                <MenuAlt1Icon
                  onClick={() => setIsShown(!isShown)}
                  className="block w-5 h-5 text-gray-700 transition-all duration-500 transform cursor-pointer lg:hidden"
                />
              )}
              <CogIcon className="w-5 h-5 text-gray-700 transition-all duration-500 transform cursor-pointer hover:rotate-[360deg]" />
              <BellIcon
                onClick={makeShowNoti}
                className="w-5 h-5 text-gray-700 transition-all duration-500 transform cursor-pointer hover:-translate-y-1"
              />
            </div>
          </div>
        </div>
      </div>
      <NotificationSection showNoti={showNoti} />
    </div>
  );
};

export default Header;
