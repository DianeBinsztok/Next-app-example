import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {

  const userLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href='/' className='flex gap-2 flex-center'>
            <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={30}
            height={30}
            className='object-contain'/>
            <p className='logo_text'>Home</p>
        </Link>

         {/* Pour créer un nouveau post */}
         <div className='sm:flex hidden'>

          {/* Condition ternaire: 
          si userLoggedIn => afficher le lien 
          sinon => afficher les balises vides<></>*/}
          {userLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-post" className='black_btn'>
              Create post
            </Link>
            <button type='button' className='outline_btn'>
              Sign out
            </button>

            <Link href="/profile">
            <Image 
            src="/assets/images/logo.svg"
            alt="profile"
            width={37}
            height={37}
            className='rounded-full'/>
            </Link>
          </div>
          ):(<></>)}
         </div>
    </nav>
  )
}
export default Nav
