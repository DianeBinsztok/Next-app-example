import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
  title: 'NextJS example',
  description: 'A NextJS app example',
};
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>
        
        <main className='app'>
        <Nav/>
              { children }
        </main>
      </body>
    </html>
  )
}
// Le composant Nav est ajouté directement au Layout car il ne changera pas d'une page à l'autre