import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { SearchIcon, SearchIcon2 } from "../icon/search";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <nav className="bg-first border-gray-200 h-28 top-0 sticky">
      <div className="max-w-screen-xl h-full flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="md:h-20 h-12 " alt=" Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-fourth">
            Kebron Rents
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-third rounded-lg md:hidden hover:bg-fourth focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            visible ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 text-third mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-first text-2xl dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 rounded md:bg-transparent md:text-third md:p-0  "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 rounded md:bg-transparent md:text-third md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="block py-2 px-3 rounded md:bg-transparent md:text-third md:p-0"
              >
                Categories
              </Link>
            </li>

            <li>
              <a
                href="#contact"
                className="block py-2 px-3 rounded md:bg-transparent md:text-third md:p-0"
              >
                Contact
              </a>
            </li>
            <li>
              <div className="flex h-full min-w-full flex-row md:order-2">
                <button
                  type="button"
                  data-collapse-toggle="navbar-search"
                  aria-controls="navbar-search"
                  aria-expanded={searchVisible}
                  onClick={() => setSearchVisible(!searchVisible)}
                  className="md:hidden block py-2 px-3  hover:bg-fourth rounded md:bg-transparent md:text-third md:p-0"
                >
                  <SearchIcon />
                  <span className="sr-only">Search</span>
                </button>
                <div className="flex w-full ">
                  <div className="p-4 h-full">
                    <input
                      type="text"
                      id="search-navbar"
                      className={`${
                        searchVisible ? "visible" : "hidden"
                      } md:hidden block w-full p-2 ps-10 text-sm text-gray-900 border border-third rounded-lg bg-gray-50 dark:placeholder-gray-400 dark:text-white focus:ring-third focus:border-third`}
                      placeholder="Search..."
                    />
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="md:block hidden w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:outline-none dark:border-gray-600 dark:placeholder-gray-400  focus:ring-third focus:border-third"
                    placeholder="Search..."
                  />
                  <button className="flex items-cente h-20 w-20 bg-yellow-200 hover:bg-blue-500 justify-center pointer-events-none">
                    <SearchIcon2 />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <Link to="/admin/login">
                <button
                  type="button"
                  className=" border border-gray-300 focus:outline-none hover:bg-second focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-third text-first "
                >
                  Log In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
