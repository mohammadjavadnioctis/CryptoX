import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {Link, useNavigate} from 'react-router-dom'
import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const navigate = useNavigate();
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to={'/'}>
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {/* {["بازار", "خرید و فروش", "آموزش ها", "دارایی ها"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))} */}
        
       
        <li 
        // onClick={() => { navigate("")}} 
        
        className=" py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          بازار
        </li>
        <li 
        // onClick={() => { navigate("/dashboard/funds")}}
         className=" py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          والت
        </li>
        <li 
        // onClick={() => { navigate("/signup")}}
         className=" py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          ثبت نام
        </li>
        <li 
        // onClick={() => { navigate("/signin") }}
         className=" py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          ورود
        </li>
         <li 
         onClick={() => { navigate("/trade/btcusdt")}}
         className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
        خرید  فروش
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["بازار", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
