const StartWorkHomeBanner = () => {
  return (
    <section className="bg-gray-950 text-white">
      <div className="mx-auto px-4 py-16 lg:flex lg:items-center">
        <div className="mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-primary-text sm:text-6xl ">
            <span className="text-5xl mb-5 font-bold sm:text-7xl">start work </span>
            <br />
            <br className="md:hidden" />
            <strong className="font-extrabold text-gray-100 sm:block mt-[20px]"> احصل على وظيفة أحلامك الآن. </strong>
          </h1>

         

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary-text px-24 py-3 text-md font-bold hover:text-white text-white hover:bg-primary-text-hover duration-400 sm:w-auto"
              href="#"
            >
              ابدأ الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartWorkHomeBanner;
