import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [visible, setVisible] = useState(false);

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
              <a
                href="#about"
                className="block py-2 px-3 rounded md:bg-transparent md:text-third md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <Link
                to="/cities"
                className="block py-2 px-3 rounded md:bg-transparent md:text-third md:p-0"
              >
                Cities
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
              <div className="flex h-full min-w-full flex-row md:order-2"></div>
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
