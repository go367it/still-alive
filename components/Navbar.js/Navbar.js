import Image from "next/image";
import Container from "../uiComponents/Container.js";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <div className="w-full flex justify-between place-items-center py-2">
        <Link href='/'>
          <header className=" flex justify-between place-items-center gap-2 cursor-pointer">
            <Image src="/Images/ninja.png" alt="logo" width="50" height="50" />
            <h3 className="text-2xl font-bold">Chota.ninja</h3>
          </header>
        </Link>
        <div>
          <Link href="/login">
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-white cursor-pointer hover:bg-blue-500 transform duration-300">
              Sign In/Log IN
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
