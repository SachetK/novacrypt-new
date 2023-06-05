import type { NextPage } from "next";
import Head from "next/head";

const TeamPage: NextPage = () => {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <Head>
        <title>NovaCrypt | Team</title>
        <meta name="description" content="Team page for NovaCrypt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container flex flex-col items-center justify-center gap-12 px-4 py-16 font-jost">
        <article className="grid grid-cols-2 grid-flow-col">
          
        </article>
      </section>
    </main>
  );
};

export default TeamPage;
