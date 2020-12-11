import React, { useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(true);

  return (
    <div>
      <nav class="fixed w-full items-center justify-between bg-gray-900 text-gray-100 py-6 px-14 shadow-md">
        <div class="flex justify-between items-center">
          <img src="" alt="Logo" class="h-auto w-24" />
          <button
            onClick={() => setOpen(!isOpen)}
            class="lg:hidden md:hidden"
            aria-label="Open Menu"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-8 h-8"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div class="hidden md:flex lg:flex items-center">
            <ul class="md:flex space-x-8 text-xl">
              <li className="cursor-pointer">Movies</li>
              <li className="cursor-pointer">TV shows</li>
              <li className="cursor-pointer">Actors</li>
            </ul>
          </div>
        </div>
        {!isOpen && (
          <aside class="md:hidden lg:hidden transform top-0 left-0 w-52 bg-gray-900 fixed h-full overflow-auto ease-in-out transition-all duration-900 z-30">
            <span class="flex w-full items-center py-7 border-b">
              <img
                src="/logos/fox-hub.png"
                alt="Logo"
                class="h-auto w-32 mx-auto"
              />
            </span>
            <span class="flex items-center py-4 px-6 cursor-pointer border-b">
              <span>Movies</span>
            </span>

            <span class="flex items-center py-4 px-6 cursor-pointer border-b">
              <span>TV shows</span>
            </span>
            <span class="flex items-center py-4 px-6 cursor-pointer border-b">
              <span>Actors</span>
            </span>
          </aside>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
