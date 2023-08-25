//Pour l'usage des hooks, le composant doit être rendu côté client
"use client";

//Les hooks React:
import{useEffect, useState} from 'react';

//Les méthodes next-auth/react
import {signIn, signOut, getProviders} from 'next-auth/react';


import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {

  const userLoggedIn = true;

  /*LES VARIABLES D'ÉTAT*/

  // - Les fournisseur d'authentification
  const [providers, setProviders] = useState(null);

  // - l'état du dropdown menu sur mobile: fermé par défaut
  const [toggleDropdown, setToggleDropdown] = useState(false);


  /*LES EFFETS qui modifieront les variables d'état*/
  useEffect(()=>{
    const fetchProviders = async ()=>{
      const response = await getProviders();
      setProviders(response);
    };

    fetchProviders();
    
  }, []/*l'effet ne se lance qu'au premier rendu du composant */);


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

        {/* Navigation bureau */}
        <div className='sm:flex hidden'>

          {userLoggedIn ? (
          
          /* Si l'utilisateur est connecté, afficher les boutons 'Create post' et 'Sign out'*/
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-post" className='black_btn'>
              Create post
            </Link>
            <button type='button' className='outline_btn' onClick={signOut}>
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
          ):(
                      
            /* Sinon, afficher un bouton par fournisseur d'authentification*/
              <>
                {providers && 
                  Object.values(providers).map((provider)=>{
                    <button 
                      type='button' 
                      className='black_btn'
                      key={provider.name}
                      onClick={()=>{signIn(provider.id)}}>
                        Sign In
                    </button>
                  })
                }
              </>
              )}
        </div>

        {/* Navigation mobile */}
        <div className='sm:hidden flex relative' >
          {userLoggedIn ? (
            /*Si l'utilisateur est connecté, j'afficherai un dropdown menu avec un toggle*/
            <div className='flex'>
              <Image 
                src="/assets/images/logo.svg"
                alt="profile"
                width={37}
                height={37}
                className='rounded-full'

                /*le setter du state accepte 2 types de paramètre:
                - la valeur à affecter à la variable d'état (ici, toggleDropdown), ou
                - ici: une fonction callback qui renvoie l'inverse de la valeur d'état*/

                onClick={()=>{setToggleDropdown((prev)=>{return !prev;})}}

                /*En React, changer la valeur du state en utilisant la valeur du state précédent:
                setToggleDropdown(!toggleDropdown)}
                n'est pas recommandé et peut créer des effets inattendus.
                Il est préférable d'utiliser un paramètre (prev) pour s'assurer d'avoir la valeur la plus récente de toggleDropdown*/
              />

              {/*Si toggleDropdown est à 'true': afficher le(s) lien(s)*/}
              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={()=> setToggleDropdown(false)}>
                      My profile
                  </Link>
                  <Link
                    href="/create-post"
                    className="dropdown_link"
                    onClick={()=> setToggleDropdown(false)}>
                      Create a new post
                  </Link>
                  <button
                    type='button'
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className='mt-5 w-full black_btn'>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Sinon, afficher un bouton par fournisseur d'authentification*/
            <>
              {providers && 
                Object.values(providers).map((provider)=>{
                  <button 
                    type='button' 
                    className='black_btn'
                    key={provider.name}
                    onClick={()=>{signIn(provider.id)}}>
                      Sign In
                  </button>
                })
              }
            </>
            
          )}
        </div>
    </nav>
  )
}
export default Nav
