import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const TeamPage: NextPage = () => {
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

  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <section className="absolute inset-0 top-96 left-[13%] right-[13%] grid h-5/6 w-3/4 grid-cols-2 place-content-between gap-4">
        <div className="group/item place-self-start opacity-100 group-hover/main:opacity-100 group-hover/main:delay-500 group-hover/main:duration-200">
          <div className="relative z-10 grid h-48 w-48 place-items-center rounded-full bg-violet-600 transition-all duration-500 ease-in-out group-hover/item:scale-110 group-hover/item:bg-violet-800">
            <h3 className="relative z-auto text-center text-3xl font-bold text-white ">
              Support from
            </h3>
            <div className="grid grid-cols-2 place-content-center w-full h-full">
              {supports.map((support, idx) => {
                return (
                    <Image
                      src={`/support/${support.toLowerCase()}.png`}
                      height={64}
                    width={64}
                      alt={support}
                        key={idx}
                    />
                );
              })}
            </div>
          </div>
        </div>
        <a
          href="https://www.gofundme.com"
          className="group/item opacity-0 group-hover/main:place-self-end group-hover/main:opacity-100 group-hover/main:delay-500 group-hover/main:duration-200"
        >
          <div className="grid h-48 w-48 place-items-center rounded-full bg-violet-600 transition-all duration-500 ease-in-out group-hover/item:scale-110 group-hover/item:bg-violet-800">
            <h3 className="text-center text-3xl font-bold text-white">
              Donate
            </h3>
          </div>
        </a>
        <div className="group/item  col-span-2 place-self-center opacity-0 group-hover/main:opacity-100 group-hover/main:delay-500 group-hover/main:duration-200">
          <Link
            href="/team"
            className="grid h-48 w-48 place-items-center rounded-full bg-violet-600 transition-all duration-500 ease-in-out group-hover/item:scale-110 group-hover/item:bg-violet-800"
          >
            <h3 className="p-4 text-center text-3xl font-bold text-white">
              Who are we?
            </h3>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
