import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";

function SideNav() {
  return (
    <nav className="w-18 grid p-1 text-3xl justify-center gap-y-10 h-fit">
      <AiOutlineHome className="mt-4 cursor-pointer" />
      <BsLightningCharge className="cursor-pointer" />
      <MdOutlineSubscriptions className="cursor-pointer" />
      <MdOutlineVideoLibrary className="cursor-pointer" />
    </nav>
  );
}

export default SideNav;
