import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'NextJS example',
  description: 'A NextJS app example',
};
 
export default function RootLayout({ children }) {
 return (
  /* Tout le contenu du body sera encapsulé dans le Provider */
    <html lang="en">
      <body>
        <Provider>
        <div className='main'>
          <div className='gradient'/>
        </div>
        
        <main className='app'>
        <Nav/>
              { children }
        </main>
        </Provider>
      </body>
    </html>
  )
}
// Le composant Nav est ajouté directement au Layout car il ne changera pas d'une page à l'autre