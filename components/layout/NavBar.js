import { usePathname } from "next/navigation";

// component
import Image from "next/image";
import Container from "@/components/Container";
import Flex from "@/components/Flex";
import Link from "next/link";

// image
import Sun from "@/public/sun.png";
import Logo from "@/public/logo.png";

// icon
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaUser,
  FaSearch,
} from "react-icons/fa";

// nav data
const NavData = [
  { name: "Home", path: "/" },
  { name: "Fashion", path: "/fashion" },
  { name: "Travel", path: "/travel" },
  { name: "Technology", path: "/technology" },
  { name: "Lifestyle", path: "/lifestyle" },
  { name: "Features", path: "/features" },
  { name: "Education", path: "/education" },
  { name: "Pages+", path: "/pages" },
  { name: "Sports", path: "/sports" },
];

// const socialData
const socialData = [
  {
    icon: (
      <FaFacebookF className="hover:text-primary duration-500 hover:-translate-y-1" />
    ),
    path: "/",
  },
  {
    icon: (
      <FaTwitter className="hover:text-primary duration-500 hover:-translate-y-1" />
    ),
    path: "/",
  },
  {
    icon: (
      <FaLinkedinIn className="hover:text-primary duration-500 hover:-translate-y-1" />
    ),
    path: "/",
  },
  {
    icon: (
      <FaWhatsapp className="hover:text-primary duration-500 hover:-translate-y-1" />
    ),
    path: "/",
  },
  {
    icon: (
      <FaInstagram className="hover:text-primary duration-500 hover:-translate-y-1" />
    ),
    path: "/",
  },
];

export default function NavBar() {
  return (
    <header>
      <main>
        {/* header top  */}
        <div className="bg-brandOne p-2">
          <Container>
            <Flex className="justify-between items-center">
              {/* left side  */}
              <div className="text-white text-[10px] font-medium w-5/12">
                <Flex className="items-center">
                  <p className="p-1 bg-gray-400 rounded mr-2">Trending</p>
                  <p className="p-1">
                    Every success is helped by someone behind the people
                  </p>
                </Flex>
              </div>
              {/* right side  */}
              <div className="w-6/12">
                <Flex className="justify-end items-center">
                  <div className="w-1/12">
                    <Image src={Sun} alt="weather" />
                  </div>
                  <div className="w-8/12">
                    <Flex>
                      <p className="text-white">Dhaka 36*</p>
                      <p className="text-white">Monday-July 2, 2023</p>
                    </Flex>
                  </div>
                </Flex>
              </div>
            </Flex>
          </Container>
        </div>
        {/* header bottom  */}
        <div>
          <div className="py-9 bg-header">
            <Container>
              {/* logo, add & social icon  */}
              <Flex className="items-center">
                {/* logo */}
                <div className="w-3/12">
                  <Link href="/">
                    <Image src={Logo} alt="logo" />
                  </Link>
                </div>
                {/* add */}
                <div className="w-6/12 bg-gray-500 h-20 text-center rounded-lg">
                  add
                </div>
                {/* icon */}
                <div className="w-3/12">
                  <Flex className="justify-between">
                    <div className="w-1/2">
                      <Flex className="gap-4 p-3">
                        {socialData.map((icon, i) => (
                          <Link href={icon.path} key={i} className="text-[30px]">
                            {icon.icon}
                          </Link>
                        ))}
                      </Flex>
                    </div>
                    {/* account */}
                    <div className="ml-5 bg-gray-400 rounded-[50%] p-3">
                      <FaUser className="text-[30px]" />
                    </div>
                  </Flex>
                </div>
              </Flex>
            </Container>
          </div>
          {/* menu */}
          <div className="bg-headerBottom">
            <Container>
              <nav>
                <ul className="py-6">
                  <Flex className=" justify-between">
                    {/* menu item  */}
                    <Flex>
                      {NavData.map((val, i) => (
                        <Link href={val.path} key={i} className="px-4 font-semibold text-brandOne hover:text-primary text-[17px]">
                          {val.name}
                        </Link>
                      ))}
                    </Flex>
                    {/* search icon */}
                    <div>
                      <FaSearch className="cursor-pointer text-2xl" />
                    </div>
                  </Flex>
                </ul>
              </nav>
            </Container>
          </div>
        </div>
      </main>
    </header>
  );
}
