import React from 'react';

//Composants React intégrés:
import Link from 'next/link';
import Image from 'next/image'; //Optimise automatiquement les images



const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href='/' className='flex gap-2 flex-center'>
            <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={30}
            height={30}
            className='object-contain'/>
        </Link>
    </nav>
  )
}
export default Nav