import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-indigo-500">
      <div className="flex items-center h-16  container justify-between">
        <Link to="/" className="font-bold text-slate-100 font-sans">
          By @Martin
        </Link>
        <div>
          <a 
          href="https://www.fiverr.com/martin_devs/create-node-js-reactjs-application"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-100 rounded-full px-4 py-1 text-indigo-500 font-bold shadow-lg hover:bg-slate-200 hover:text-indigo-600">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
