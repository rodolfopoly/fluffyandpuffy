import React from "react";
import { Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { Button } from "flowbite-react";
import CategoryMenu from "../CategoryMenu";
function Nav() {
    const hello = false;
    if (hello) {
      return (
        <Navbar
          fluid={true}
          rounded={true}
        >
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  Bonnie Green
                </span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                Cart
              </Dropdown.Item>
              <Dropdown.Item>
                Saved Items
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                Sign out
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <CategoryMenu/>
          </Navbar.Collapse>
        </Navbar>
      )
    } else {
      return (
        <Navbar
          fluid={true}
          rounded={true}
        >
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Button color="purple">
              Purple
            </Button>
          </div>
          <Navbar.Collapse>
          <CategoryMenu/>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
export default Nav;