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
    </main>
  );
};

export default TeamPage;
