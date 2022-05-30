import React from 'react';
import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import NavbarItem from './NavbarItem';

import logo from './../images/logo.png';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className='w-full flex md: justify-center  items-center p-4'>

            <ul className='text-white md:flex hiddent list-none flex-row justify-betwen items-center flex-initial'>
                  {["Market", "Exchange", "Tutorials", "Wallet"].map((item, index)=>(<NavbarItem key={item + index} title={item}/>))}

                 <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]' >
                     Login
                 </li>
            </ul>
            <div className="flex relative">
                {toggleMenu
                ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=>setToggleMenu(false)} /> 
                : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=>setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <ul>
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={()=> setToggleMenu(false)} />
                        </li>
                        {["Market", "Exchange", "Tutorials", "Wallet"].map((item, index)=>(<NavbarItem key={item + index} title={item} classProps ="my-2 text-lg" />))}
                    </ul>
                )}
            </div>
        </nav>
    );
}
export default Navbar;