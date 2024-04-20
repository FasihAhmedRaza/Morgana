import dynamic from "next/dynamic";
import Link from "next/link";

const words = `We specialize in crafting tailored strategies designed to propel
people toward a brighter future. One strategy at a time.
`;
const TextGenerateEffect = dynamic(() => import("./ui/text-generate-effect"));

const HeroSection = () => {
  return (
    <main className="dark:bg-black bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] py-10 md:py-20">
      <header className="h-5 sm:h-5 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between"></div>
      </header>
      <div className="dark:bg-black-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16 lg:py-40">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 lg:ml-40">
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              MORGANA
              <span className="text-4xl sm:text-4xl text-blue-500">
                VALUE FOR THE FUTURE
              </span>
            </h1>
            <div className="text-sm sm:text-base mt-5">
              {<TextGenerateEffect words={words} />}
            </div>
            <div className="flex mt-8 gap-4">
              <Link
                href="/login"
                className="inline-flex w-full sm:w-auto h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-slate-600 hover:text-white"
              >
                Get started
              </Link>

              <Link
                href="/about"
                className="inline-flex w-full sm:w-auto h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-slate-600 hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden sm:block sm:w-2/3 lg:w-3/5 relative md:mb-0 z-0">
            <img
              src="/courses/bg.png"
              className="max-w-lg md:max-w-xl m-auto -mt-40"
              style={{ animation: "slide 5s infinite alternate" }} // Inline style for animation
              alt="Background"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
