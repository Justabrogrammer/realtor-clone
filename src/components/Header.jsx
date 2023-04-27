import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10 text-gray-400 border-b-3 border-transparent">
            <li
              className={`py-3 text-sm font-semibold ${
                pathMatchRoute("/") && "text-black border-b-2 border-red-500"
              } cursor-pointer`}
              onClick={() => navigate("/")}>
              Home
            </li>
            <li
              className={`py-3 text-sm font-semibold ${
                pathMatchRoute("/offers") &&
                "text-black border-b-2 border-red-500"
              } cursor-pointer`}
              onClick={() => navigate("/offers")}>
              Offers
            </li>
            <li
              className={`py-3 text-sm font-semibold ${
                pathMatchRoute("/sign-in") &&
                "text-black border-b-2 border-red-500"
              } cursor-pointer`}
              onClick={() => navigate("/sign-in")}>
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
