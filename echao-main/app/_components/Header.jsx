"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {
    const path = usePathname();

    useEffect(()=>{
        console.log(path);
    }, [])
    return (
        <div className='w-full p-6 px-8 flex justify-between shadow-lg fixed top-0 z-10 bg-[#230D48]'>
            {/* flex container for logo and nav links */}
            <div className='flex items-center justify-between w-full'>
                {/* logo section */}
                {/* <div className='flex items-center'> */}
                    <Image
                        src={'/logo.png'}
                        width={200}
                        height={200}
                        alt='logo'
                        className='cursor-pointer transform transition-transform duration-300 hover:scale-110' />
                {/* </div> */}

                {/* navigation links */}
                <ul className='hidden md:flex flex-grow justify-evenly px-8 gap-10 text-white'>
                    <Link href='/'>
                        <li className={`hover:text-[#E2B13C] font-serif text-lg cursor-pointer ${path == '/' && 'text-[#E2B13C]'}`}>
                            Investments
                        </li>
                    </Link>
                    <Link href='/property'>
                        <li className={`hover:text-[#E2B13C] font-serif text-lg cursor-pointer ${path == '/property' && 'text-[#E2B13C]'}`}>
                            Property Management
                        </li>
                    </Link>
                    <Link href='/renovating'>
                        <li className={`hover:text-[#E2B13C] font-serif text-lg cursor-pointer ${path == '/renovating' && 'text-[#E2B13C]'}`}>
                            Renovating/Building/Flipping
                        </li>
                    </Link>
                    <Link href='/maintenance'>
                        <li className={`hover:text-[#E2B13C] font-serif text-lg cursor-pointer ${path == '/maintenance' && 'text-[#E2B13C]'}`}>
                            Maintenance Requests
                        </li>
                    </Link>
                </ul>

                {/* Login and Register buttons */}
                <div className='flex items-center gap-2'>
                    <Button>Login</Button>
                    <Button variant='outline'><Plus className='h-5 w-5' />Register</Button>
                </div>
            </div>
        </div>
    )
}

export default Header;
