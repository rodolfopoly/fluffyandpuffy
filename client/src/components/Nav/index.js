import React from "react";
import { Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { Avatar } from "flowbite-react";
import CategoryMenu from "../CategoryMenu";
import Login from "../../pages/Login";
import logo from '../../assets/fluffyandpuffy-logo.png'
import Cart from "../Cart";
import Auth from "../../utils/auth";
import loginImage from '../../assets/la duena.PNG'
import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from "@apollo/client";
import { UPDATE_CURRENT_USER } from "../../utils/actions";
import { QUERY_USER } from "../../utils/queries";
import { useEffect } from "react";

function Nav(item) {

  const [state, dispatch] = useStoreContext();
  const { user } = state;
  const { data } = useQuery(QUERY_USER);
  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_CURRENT_USER,
        user: data.user
      })
    }
  }, [data, dispatch])

  function displayUser() {
    return user.username;
  }
  function displayUserEmail() {
    return user.email;
  }


  if (Auth.loggedIn()) {
    return (
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="/">
          <img
            src={logo}
            class="h-20 sm:h-2"
            alt="Fluffy and Puffy Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<Avatar alt="User settings" img={loginImage} rounded={true} />}
          >
            <Dropdown.Header>
              <span className="block font-semibold uppercase text-sm ">
                {displayUser()}
              </span>
              <span className="block truncate text-sm font-medium">
                {displayUserEmail()}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Cart/>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
            onClick={() => Auth.logout()}>
              Sign out
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <CategoryMenu />
        </Navbar.Collapse>
      </Navbar>
    )
  } else {
    return (
      <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" class="flex items-center">
            <img src={logo} class="sm:h-8 lg:h-20 md:h-12 h-12" alt="Fluffy and Puffy Logo" />
          </a>
          <div class="flex gap-2 md:order-2">
            <button><Login /></button>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <CategoryMenu />
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Nav;