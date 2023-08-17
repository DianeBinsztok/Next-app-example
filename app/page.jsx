const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            My NextJS app
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center"> Just following a tutorial to learn NextJS ¯\_(ツ)_/¯</span>
        </h1>

    </section>
  )
}
/*
text-center => classe utilitaire de Tailwind => text-align:center;
max-md:hidden => Tailwind => caché sur les écrans larges
head_text => dans globals.css => @apply mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl;
orange_gradient => globals.css => @apply bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent;
*/
export default Home;