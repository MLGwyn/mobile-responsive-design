import { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
    <nav className="flex justify-center bg-violet-100 shadow-md px-4 py-2">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <div className="flex items-center text-4xl text-violet-900 font-stint">
          <img
            src="https://static-task-assets.react-formula.com/899963.png"
            className="w-24 mr-2"
          />
          Hasher
        </div>
        <div className="hidden md:flex">
          <button className="text-xl text-violet-900 text-medium mx-4">
            Home
          </button>
          <button className="text-xl text-violet-900 text-medium mx-4">
            About
          </button>
          <button className="text-xl text-violet-900 text-medium mx-4">
            Contact
          </button>
          <button>
            <i className="fa-solid fa-magnifying-glass mx-4 text-2xl text-red-800"></i>
          </button>
        </div>
        <button
          className="flex md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <i className="fa-solid fa-bars text-4xl text-violet-900 mx-4" />
        </button>
      </div>
    </nav>
  {
    isMobileMenuOpen && 
      <div className="fixed top-0 right-0 flex flex-col bg-violet-950 pt-12 pb-4 rounded-bl-lg">
        <button className="flex text-2xl text-violet-300 pl-6 py-4 pr-20">Home</button>
        <button className="flex text-2xl text-violet-300 pl-6 py-4 pr-20">About</button>
        <button className="flex text-2xl text-violet-300 pl-6 py-4 pr-20">Contact</button>
        <button onClick={()=> setIsMobileMenuOpen(false)}><i className="fa-regular fa-circle-xmark absolute top-0 right-0 text-4xl text-violet-400 p-6"></i></button>
      </div>

}
  
</>)
};

export default NavBar;
