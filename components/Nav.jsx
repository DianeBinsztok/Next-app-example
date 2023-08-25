//Pour l'usage des hooks, le composant doit être rendu côté client
"use client";

//Les hooks React:
import{useEffect, useState} from 'react';
/*
Permet d'ajouter un état réactif à un composant fonctionnel.
L'état permet au composant de garder en mémoire et modifier des données qui peuvent changer, déclenchant un nouveau rendu du composant

 - Dans un composant classe, l'état est une propriété this.state de la classe. C'est un objet unique mais qui peut stocker plusieurs variables. Il est modifié avec la méthode this.setState()

 - Dans un composant fonctionnel, l'état est géré par des variables déclaratives gérées par React.
 Alors qu'un composant classe n'a qu'une propriété de state, un composant fonctionnel peut avoir autant de variables d'état que nécessaire, avec leur setters. ex: const [count, setCount] = useState(0)
*/


//Les méthodes next-auth/react
import {signIn, signOut, getProviders} from 'next-auth/react';


import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {

  const userLoggedIn = true;

  /*
  useState() prend pour argument l'état initial du composant (ici à null)
  useState() renvoie un tableau de deux éléments:
  - l'état actuel: l'objet providers, qui peut contenir plusiquers valeurs
  - la fonction pour mettre cet état à jour: setProviders()
  */
  const [providers, setProviders] = useState(null);

/*
  Initialisation des providers.
  
  useEffect est un hook React qui permet d'effectuer des "effets secondaires" dans des composants
  (modification du DOM, écoute d'événements, récupération de données, etc.).
  
  useEffect prend deux arguments:
  - Une fonction callback qui définit l'effet à réaliser.
  - Un tableau de dépendances (optionnel) liste les conditions pour que l'effet s'applique. L'effet sera réexécuté chaque fois qu'une valeur dans ce tableau change.

  Ici:
  1. Je définis la fonction asynchrone fetchProviders.
  2. fetchProviders appelle getProviders() (importée depuis next-auth/react) et attend sa réponse.
  3. Une fois cette réponse obtenue, elle est passée au setter d'état setProviders pour mettre à jour l'état des providers.
  
  Une fois définie, j'appelle fetchProviders immédiatement (useEffect ne gère pas les fonctions asynchrones. Pour éviter que useEffect renvoie une Promesse, je définis d'abord la fonction avant de l'appeler (au lieu de l'appeler directement) */

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

          {/* Condition ternaire: 
          si userLoggedIn => afficher le lien 
          sinon => afficher les balises vides<></>*/}
          {userLoggedIn ? (
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
              <>
              {/* Je vérifie que j'ai accès aux providers*/}
                {providers && 
                  /* Si j'ai accès aux providers: 
                  - la méthode Object.values() renvoie un tableau des valeurs contenues dans l'objet providers
                  - map(): pour chaque provider du tableau, je retourne un bouton
                  Chaque provider étant lui-même un objet, j'aurai accès à ses propriétés 'id' et'name'

                  Le bouton n'apparaîtra pas tant que je n'aurai pas configuré les providers avec la fonction utilitaire NextAuth
                  */
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
              className='rounded-full'/>
            </div>
          ) : (

            /*Sinon, le bouton de connection: */
            
            <>
              {/* Je vérifie que j'ai accès aux providers*/}
                {providers && 
                  /* Si j'ai accès aux providers: 
                  - la méthode Object.values() renvoie un tableau des valeurs contenues dans l'objet providers
                  - map(): pour chaque provider du tableau, je retourne un bouton
                  Chaque provider étant lui-même un objet, j'aurai accès à ses propriétés 'id' et'name'

                  Le bouton n'apparaîtra pas tant que je n'aurai pas configuré les providers avec la fonction utilitaire NextAuth
                  */
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
