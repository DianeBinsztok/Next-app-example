import NextAuth from "next-auth/next";

// Importer tous les fournisseurs d'authentification nécessaires
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import GithubProvider from 'next-auth/providers/github';

/*
La fonction de configuration NextAuth prend en paramètre un objet de configuraion.
Cet objet permet de lister tous les fournisseurs et les identifiants de mon appli sur chacun de ces fournisseurs.
Mon application doit donc être inscrite sur leurs services. 
ex: sur console.cloud.google.com
Une fois l'appli inscrite, je récupère ses identifiants.
J'enregistre les identifiants de mon appli dans le fichier .env dans les variables GOOGLE_ID, GOOGLE_CLIENT_SECRET, etc.
*/
const handler = NextAuth({
    // I - Les providers
    providers:[
        GoogleProvider({
            clientId:'process.env.GOOGLE_ID',
            clientSecret:'process.env.GOOGLE_CLIENT_SECRET',
        }),
        FacebookProvider({
            clientId:'process.env.FACEBOOK_ID',
            clientSecret:'process.env.FACEBOOK_CLIENT_SECRET',
        }),
        GithubProvider({
            clientId:'process.env.GITHUB_ID',
            clientSecret:'process.env.GITHUB_CLIENT_SECRET',
        }),
    ],
});

export {handler as GET, handler, handler as POST}