import '@styles/globals.css'

export const metadata = {
  title: 'NextJS example',
  description: 'A NextJS app example',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
