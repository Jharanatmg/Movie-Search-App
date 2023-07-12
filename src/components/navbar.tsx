import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-2/3 mt-2 h-12 bg-black flex inline gap-5 pl-4 items-center text-white text-xs">
        <a> FILMS </a>
        <a> SERIAL </a>
        <a> GAMES </a>
        <a> CINEMA REPERTORY </a>
        <a> TV PROGRAM </a>
        <a> MAGAZINE </a>
      </div>
      <div className="mt-2 h-12 bg-blue-500 divide-x-2 flex items-center text-sm">
        <a className="p-2">
          {" "}
          <Link to="/Loginpage"> LOGIN </Link>
        </a>
        <a className="p-2">
          {" "}
          <Link to="/Registerpage">REGISTER </Link>{" "}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
