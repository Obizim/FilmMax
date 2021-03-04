import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="items-center justify-between py-8 px-3 lg:px-14 shadow font-quicksand">
        <div className="flex justify-between items-center">
          <h1 className="text-xl text-red-600">FilmMax</h1>
          <div className="flex items-center">
            <ul className="flex md:space-x-8 space-x-3">
              <Link to="/">
                <li className="cursor-pointer transition hover:text-red-600">
                  movies
                </li>
              </Link>
              <Link to="/tvshows">
                <li className="cursor-pointer transition hover:text-red-600">
                  tvshows
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
