import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaYoutube, FaUserCircle } from "react-icons/fa";
import { BiVideoPlus } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardVoice, MdMenu } from "react-icons/md";

function Header() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { keyword } = useParams();

  const handleUpdate = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header className="w-full flex p-2 text-xl items-center mt-3">
      <MdMenu className="text-3xl mr-3" />
      <Link to="/" className="flex items-center">
        <FaYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2">KouTube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="border border-zinc-400 rounded-full w-3/5 ml-5 mr-3 pl-5 pr-2 py-1 flex justify-between items-center"
      >
        <input
          className="bg-transparent w-11/12 border-r border-zinc-600 text-ml"
          type="text"
          placeholder="search.."
          onChange={handleUpdate}
          value={text}
        />
        <button className="flex-1 h-full hover:text-brand font-extrabold">
          <BsSearch className="w-full" />
        </button>
      </form>
      <span className="rounded-full w-9 h-9 flex items-center justify-center text-2xl hover:bg-zinc-300 hover:text-brand cursor-pointer">
        <MdKeyboardVoice />
      </span>
      <div className="flex items-center text-2xl w-1/4 justify-end ">
        <BiVideoPlus className="hover:text-brand cursor-pointer" />
        <IoMdNotificationsOutline className="mx-5 hover:text-brand cursor-pointer" />
        <FaUserCircle className="hover:text-brand cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
