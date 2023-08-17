const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">My NextJS app</h1>
    </section>
  )
}
/*
text-center => classe utilitaire de Tailwind => text-align:center;
head_text => dans globals.css => @apply mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl;
*/
export default Home;