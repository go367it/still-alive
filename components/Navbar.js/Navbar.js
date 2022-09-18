import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between place-items-center py-2 px-3 sm:px-10 md:px-36">
      <header className=" flex justify-between place-items-center gap-2">
        <Image src='/Images/ninja.png' alt='logo' width='50' height='50'/>
        <h3 className='text-2xl font-bold'>Chota.ninja</h3>
        </header>
      <div>
        <button className="bg-blue-600 px-3 py-2 rounded-lg text-white">
          Sign In/Log IN
        </button>
      </div>
    </div>
  );
};

export default Navbar;
