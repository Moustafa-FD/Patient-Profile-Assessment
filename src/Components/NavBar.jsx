import logo from './../assets/logo.svg';
import { House, ChevronLeft, ScrollText, LogOut } from 'lucide-react';

export default function NavBar(){


    return(
        <div className="flex flex-col w-[5vw] bg-[#845CC0] h-100vh items-center pt-10 gap-10 pb-10">
            <img src={logo} alt="" className='w-14 clickableWithScale ' />

            <div className="pt-12 flex flex-col gap-12 ">
                <House size={38} strokeWidth={1.2} className='clickableWithScale'/>
                <ChevronLeft size={38} strokeWidth={1.2} className='clickableWithScale'/>
                <ScrollText size={38} strokeWidth={1.2} className='clickableWithScale'/>
            </div>
                
            <LogOut size={38} strokeWidth={1.2} className='mt-auto clickableWithScale'/>
        </div>
    )
}