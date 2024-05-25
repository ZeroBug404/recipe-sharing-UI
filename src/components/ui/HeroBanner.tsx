import hero from "../../assets/hero-dish.png";

const HeroBanner = () => {
  return (
    <section className="relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 mt-28">
        {/* Content */}
        <div className="flex flex-1 flex-col items-center lg:items-start overflow-hidden">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 font-bold text-3xl md:text-4xl lg:text-6xl text-center lg:text-left mb-2 py-2 slideUp">
            Learn. Cook. Share.
            <br />
            Cooking Made Easy.
          </h2>
          <div className="overflow-hidden">
            <p className="font-thin text-xl md:text-3xl text-center lg:text-left slideUp">
              Say goodbye to long and frustrating
            </p>
            <p className="font-thin text-xl md:text-3xl text-center lg:text-left slideUp">
              food blogs and recipe videos. Access
            </p>
            <p className="font-thin text-xl md:text-3xl text-center lg:text-left slideUp">
              our recipe cards to prepare any dish
            </p>
            <p className="font-thin text-xl md:text-3xl text-center lg:text-left slideUp">
              in minutes.
            </p>
          </div>
          <div className="flex mt-6 gap-6">
            <a href="#search-dish-call">
              <button
                type="button"
                // className="bg-[#21286a] hover:bg-blue-700 text-white text-lg font-regular py-2 px-4 rounded transition duration-500 ease-in-out transform"
                className="text-white border-2 bg-[#21286a] hover:bg-[white] hover:border-[#21286a] hover:text-[#21286a] text-lg font-regular py-2 px-4 rounded transition duration-500 ease-in-out transform"
              >
                See Recipes
              </button>
            </a>
            <a href="#search-dish-call">
              <button
                type="button"
                className="border-2 border-[#21286a] text-[#21286a] hover:bg-[#21286a] hover:text-white text-lg font-regular py-2 px-4 rounded transition duration-500 ease-in-out transform"
              >
                Add Recipes
              </button>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full fadeInRotate"
            src={hero}
            alt="Hero Dish"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
