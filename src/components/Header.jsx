// import React from 'react'
import Logo from './../assets/img/Logo.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv} from 'react-icons/hi2'
import HeaderItem from './HeaderItem'
import{ HiDotsVertical, HiPlus, } from 'react-icons/hi'
import { useState } from 'react'
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            id: 1,
            name: 'HOME',
            icon:HiHome
        },
        {
            id: 2,
            name: 'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            id: 3,
            name: 'WATCH LIST',
            icon:HiPlus
        },
        {
            id: 4,
            name: 'ORIGINALS',
            icon:HiStar
        },
        {
            id: 5,
            name: 'MOVIES',
            icon:HiPlayCircle
        },
        {
            id: 6,
            name: 'SERIES',
            icon:HiTv
        }
    ]
    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex gap-8 items-center'>
                <img src={Logo} className='w-[80px] md:w-[115px] object-cover'/>
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <HeaderItem key={item.id} name={item.name} Icon={item.icon}/>
                    ))}
                </div>
                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem key={item.id} name={''} Icon={item.icon}/>
                    ))}
                    <div className='md:hidden' onClick={()=> setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical}/>
                        {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                            {menu.map((item, index) => index > 2 && (
                                <HeaderItem key={item.id} name={item.name} Icon={item.icon}/>
                            ))}
                        </div>: null}
                    </div>
                </div>
            </div>
            <div className="relative w-10 h-10 overflow-hidden bg-[#549aad] rounded-full dark:bg-gray-600">
                <svg className="absolute w-12 h-12 text-gray-900 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
        </div>
    )
}

export default Header