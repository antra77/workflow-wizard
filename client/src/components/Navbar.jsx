import { FcReading,FcLock,FcLandscape,FcSettings } from "react-icons/fc";

function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between">
      <div className="text-xl opacity-0 invisible md:visible">
  menu
</div>
      <div className="flex items-center space-x-6">
        <FcReading className=" text-2xl cursor-pointer" />
        <FcLandscape className=" text-2xl cursor-pointer" />
        <FcLock className=" text-2xl cursor-pointer" />
        <FcSettings className=" text-2xl cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;
