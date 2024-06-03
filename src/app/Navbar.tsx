
'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownMenu, Avatar, DropdownTrigger, Dropdown, Input} from "@nextui-org/react";
import {AcmeLogo} from "./logo/AcmeLogo.jsx";
import {SearchIcon} from './logo/SearchIcon.jsx';
import IconNotificationsOutline from './logo/Notification.jsx';
import IconMenu from './icons/MenueIcon.jsx'
import Icon093Drawer from './icons/DrawerIcon.jsx'
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <div>
      <div className=" bg-white h-80">
        <h1 className="">lkdfnckl</h1>
      </div>
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <div className="flex gap-4 items-center">
      <Button isIconOnly color="primary" variant="flat" aria-label="Take a photo">
        <IconMenu />
      </Button>    
    </div>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">LOGO</p>
        </NavbarBrand>
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem> */}
        <Input
        
          classNames={{
            base: "max-w-full lg:min-w-[50rem] md:min-w-[30rem]  sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>

      {/* eee */}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarContent as="div" className="items-center" justify="end">
        {/* <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        /> */}

<div className="flex gap-4 items-center">
      <Button isIconOnly color="primary" aria-label="Like">
        <IconNotificationsOutline />
      </Button>    
      <Button isIconOnly color="primary" variant="bordered" aria-label="Take a photo">
        <Icon093Drawer />
      </Button>
      <Button isIconOnly color="primary" variant="bordered" aria-label="Take a photo">
        <ThemeSwitcher />
      </Button>
    </div>
    
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="nobita"
              size="sm"
              src="https://i.pinimg.com/736x/bf/eb/a8/bfeba832a872fef7b0426e3c314041d9.jpg"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
    </div>
  );
}
