import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import animatedLogo from "public/mainlogo.gif";
import { useState, useCallback, useEffect } from "react";

const Home: NextPage = () => {
  const supports = [
    "Cambridge",
    "Columbia",
    "Harvard",
    "IBM",
    "IITs",
    "ISEF",
    "MIT",
    "NASA",
    "Stanford",
    "UN",
  ];

  const [selected, setSelected] = useState(0);
  const [switching, setSwitching] = useState(false);

  const incrementSelected = useCallback(() => {
    setSwitching(true);
    setTimeout(() => setSelected((prev) => (prev + 1) % supports.length), 500);
    setTimeout(() => setSwitching(false), 1000);
  }, [supports.length]);

  useEffect(() => {
    const interval = setInterval(incrementSelected, 3000);
    return () => clearInterval(interval);
  }, [incrementSelected]);

  return (
    <>
      <Head>
        <title>NovaCrypt | Home</title>
        <meta name="description" content="Home page for NovaCrypt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="group/main container flex flex-col items-center justify-center gap-12 px-4 py-16 transition-all ">
          <h1 className="text-5xl font-bold text-white delay-100 duration-500 ease-in-out group-hover/main:scale-150 group-hover/main:opacity-0 sm:text-[5rem]">
            NOVA<span className="text-title-blue">CRYPT</span>
          </h1>
          <div className="relative z-auto">
            <Image
              src={animatedLogo}
              alt="Learn More"
              className="relative delay-100 duration-500 ease-in-out group-hover/main:scale-150 group-hover/main:opacity-0"
            />
            <section className="absolute inset-0 left-[13%] right-[13%] grid h-5/6 w-3/4 grid-cols-2 place-content-center gap-4 group-hover/main:place-content-between">
              <div className="group/item opacity-0 group-hover/main:place-self-start group-hover/main:opacity-100 group-hover/main:delay-500 group-hover/main:duration-200">
                <div className="relative grid h-60 w-60 place-items-center rounded-full">
                  <h3 className="text-center text-3xl font-semibold text-white">
                    {" "}
                    Support from: {supports[selected]}{" "}
                  </h3>
                  <div className="relative h-48 w-48">
                    <Image
                      src={`/support/${(
                        supports[selected] ?? ""
                      ).toLowerCase()}.png`}
                      fill
                      className={`h-full w-full object-cover object-center transition-opacity duration-500 ${
                        switching ? `opacity-0` : `opacity-100`
                      }`}
                      alt={supports[selected] ?? "Support"}
                    />
                  </div>
                </div>
              </div>
              <a
                href="https://www.gofundme.com"
                className="group/item opacity-0 group-hover/main:place-self-end group-hover/main:opacity-100 group-hover/main:delay-500 group-hover/main:duration-200"
              >
                <div className="grid h-60 w-60 place-items-center rounded-full bg-violet-600 transition-all duration-500 ease-in-out group-hover/item:scale-110 group-hover/item:bg-violet-800">
                  <h3 className="text-center text-3xl font-bold text-white">
                    Donate
                  </h3>
                </div>
              </a>
              <div className="group/item  col-span-2 place-self-center opacity-0 group-hover/main:opacity-100 group-hover/main:delay-500 group-hover/main:duration-200">
                <Link
                  href="/team"
                  className="grid h-60 w-60 place-items-center rounded-full bg-violet-600 transition-all duration-500 ease-in-out group-hover/item:scale-110 group-hover/item:bg-violet-800"
                >
                  <h3 className="p-4 text-center text-3xl font-bold text-white">
                    Who are we?
                  </h3>
                </Link>
              </div>
            </section>
          </div>
          <h2 className="text-2xl font-bold text-white delay-100 duration-500 ease-in-out group-hover/main:scale-150 group-hover/main:opacity-0">
            A student-led organization dedicated to educating the next
            generation of innovators
          </h2>
        </div>
      </main>
    </>
  );
};

export default Home;
