import { usePathname } from "next/navigation";

// component
import Image from "next/image";
import Container from "@/components/Container";
import Flex from "@/components/Flex";
import Link from "next/link";

// image
import Sun from "@/public/sun.png";
import Logo from "@/public/logo.png";

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
        {/* header top  */}
        <div></div>
      </main>
    </header>
  );
}
