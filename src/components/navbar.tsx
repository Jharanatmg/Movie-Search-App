import React from "react";

function Navbar() {
  return (
    <div className="m-1 h-12 bg-black text-white flex justify-center items-center">
      <div className=" flex inline gap-5 items-center text-xs">
        <a> FILMS </a>
        <a> SERIAL </a>
        <a> GAMES </a>
        <a> CINEMA REPERTORY </a>
        <a> TV PROGRAM </a>
        <a> MAGAZINE </a>
      </div>
    </div>
  );
}

export default Navbar;
