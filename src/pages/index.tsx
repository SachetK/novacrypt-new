import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from 'public/mainlogo.gif'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NovaCrypt | Home</title>
        <meta name="description" content="Home page for NovaCrypt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen h-full flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-bold text-white sm:text-[5rem]">
            NOVA<span className="text-title-blue">CRYPT</span>
          </h1>
          <h2 className="text-2xl font-bold text-white">
            A student-led organization dedicated to educating the next
            generation of innovators
          </h2>
          <div className="group/main relative">
            <div
                className="relative z-40"
            >
              <Image
                src={logo}
                alt="Learn More"
              />
            </div>
            <button
              type="button"
              className="absolute w-fit m-full z-auto rounded-md bg-title-blue px-3 py-2 text-white transition-all duration-500 ease-in-out hover:bg-opacity-80 group-hover/main:-translate-x-[400%] group-hover/main:-translate-y-[400%]"
            >
              Learn More
            </button>
            <button
              type="button"
              className="absolute w-fit m-full z-auto rounded-md bg-title-blue px-3 py-2 text-white transition-all duration-500 ease-in-out hover:bg-opacity-80 group-hover/main:translate-x-[400%] group-hover/main:-translate-y-[400%]"
            >
              Learn
            </button>
            <button
              type="button"
              className="absolute w-fit m-full z-auto rounded-md bg-title-blue px-3 py-2 text-white transition-all duration-500 ease-in-out hover:bg-opacity-80 group-hover/main:translate-y-[600%]"
            >
              Learn third
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
