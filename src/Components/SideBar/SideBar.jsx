import { useShownContext } from "../../Hooks/context";
import SideBarContent from "./SideBarContent";
const SideBar = () => {
  const { isShown } = useShownContext();
  return (
    <div
      className={`fixed top-0 ease-in-out bottom-0 flex z-10 lg:left-0 flex-col min-h-screen overflow-y-scroll transition-all duration-500 bg-gray-100 ${
        isShown ? "left-0" : "-left-80"
      } `}
    >
      <SideBarContent />
    </div>
  );
};

export default SideBar;
