import React from "react";
import { useHistory } from "react-router";
import { useShownContext } from "../../Hooks/context";
import { CubeTransparentIcon, XIcon } from "@heroicons/react/solid";
import {
  HomeIcon,
  TableIcon,
  CreditCardIcon,
  PuzzleIcon,
  ShieldCheckIcon,
  UserCircleIcon,
  UserIcon,
  UserAddIcon,
} from "@heroicons/react/solid";
import DocumentationSection from "./DocumentationSection";
const SideBarContent = () => {
  const history = useHistory();
  const { isShown, setIsShown } = useShownContext();
  return (
    <>
      <div className="flex items-center px-8 py-4 space-x-3 cursor-pointer title">
        <CubeTransparentIcon className="icon" />
        <h1 className="text-base font-bold text-gray-500">Soft UI Dashboard</h1>
        <div className="flex items-center justify-end p-1 cursor-pointer group close">
          {isShown && (
            <XIcon
              onClick={() => setIsShown(!isShown)}
              className="w-4 h-4 text-black group-hover:text-red-600 transition-all duration-500 group-hover:rotate-[360deg] transform"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col px-2 py-2 space-y-1 list-none links">
        <li
          onClick={() => {
            setIsShown(false);
            history.push("/dashboard");
          }}
          className="flex items-center px-5 py-3 space-x-4 font-semibold transition-all duration-500 cursor-pointer group rounded-xl hover:bg-white"
        >
          <div className="flex items-center justify-center w-10 h-10 text-gray-700 transition-all duration-500 bg-white shadow-3xl group-hover:text-white group-hover:bg-blue-600 rounded-xl">
            <HomeIcon className="w-5 h-5" />
          </div>
          <h3 className="text-sm">Dashboard</h3>
        </li>
        <li
          onClick={() => {
            history.push("/tables");
            setIsShown(false);
          }}
          className="flex items-center px-5 py-3 space-x-4 font-semibold transition-all duration-500 cursor-pointer group hover:bg-white rounded-xl"
        >
          <div className="flex items-center justify-center w-10 h-10 text-gray-700 transition-all duration-500 bg-white shadow-3xl group-hover:text-white group-hover:bg-blue-600 rounded-xl">
            <TableIcon className="w-5 h-5" />
          </div>
          <h3 className="text-sm">Tables</h3>
        </li>
        <li className="flex items-center px-5 py-3 space-x-4 font-semibold transition-all duration-500 cursor-pointer group hover:bg-white rounded-xl">
          <div className="flex items-center justify-center w-10 h-10 text-gray-700 transition-all duration-500 bg-white shadow-3xl group-hover:text-white group-hover:bg-blue-600 rounded-xl">
            <CreditCardIcon className="w-5 h-5" />
          </div>
          <h3 className="text-sm">Billing</h3>
        </li>
        <li className="flex items-center px-5 py-3 space-x-4 font-semibold transition-all duration-500 cursor-pointer group hover:bg-white rounded-xl">
          <div className="flex items-center justify-center w-10 h-10 text-gray-700 transition-all duration-500 bg-white shadow-3xl group-hover:text-white group-hover:bg-blue-600 rounded-xl">
            <PuzzleIcon className="w-5 h-5" />
          </div>
          <h3 className="text-sm">Virtual Reality</h3>
        </li>
        <li className="flex items-center px-5 py-3 space-x-4 font-semibold transition-all duration-500 cursor-pointer group hover:bg-white rounded-xl">
          <div className="flex items-center justify-center w-10 h-10 text-gray-700 transition-all duration-500 bg-white shadow-3xl group-hover:text-white group-hover:bg-blue-600 rounded-xl">
            <ShieldCheckIcon className="w-5 h-5" />
          </div>
          <h3 className="text-sm">RTL</h3>
        </li>
      </div>
      <div className="px-4 acount-page">
        <div>
          <h3 className="text-base text-gray-500">Account Page</h3>
        </div>
        <div className="flex flex-col mt-2 space-y-2 list-none links">
          <li className="flex items-center w-full px-3 py-4 space-x-3 font-semibold transition-all duration-500 cursor-pointer rounded-xl group hover:bg-white">
            <div className="flex items-center justify-center w-10 h-10 transition-all duration-500 bg-white shadow-3xl group-hover:text-white group-hover:bg-blue-600 rounded-xl">
              <UserCircleIcon className="w-5 h-5" />
            </div>
            <h3 className="text-sm">Profile</h3>
          </li>
          <li className="flex items-center w-full px-3 py-4 space-x-3 font-semibold transition-all duration-500 cursor-pointer rounded-xl group hover:bg-white">
            <div className="flex items-center justify-center w-10 h-10 transition-all duration-500 bg-white shadow-3xl group-hover:text-white group-hover:bg-blue-600 rounded-xl">
              <UserIcon className="w-5 h-5" />
            </div>
            <h3 className="text-sm">Sign In</h3>
          </li>
          <li className="flex items-center w-full px-3 py-4 space-x-3 font-semibold transition-all duration-500 cursor-pointer rounded-xl group hover:bg-white">
            <div className="flex items-center justify-center w-10 h-10 transition-all duration-500 bg-white shadow-3xl group-hover:text-white group-hover:bg-blue-600 rounded-xl">
              <UserAddIcon className="w-5 h-5" />
            </div>
            <h3 className="text-sm">Sign Up</h3>
          </li>
        </div>
      </div>
      <div className="px-5 py-3 mt-2">
        <DocumentationSection />
      </div>
      <div className="px-5 py-3">
        <button className="flex items-center justify-center w-full py-2 font-semibold text-white uppercase transition-all duration-500 bg-gradient-to-r rounded-xl from-blue-500 to-blue-700">
          Upgrade to Pro
        </button>
      </div>
    </>
  );
};

export default SideBarContent;
