import type { NextPage } from "next";
import Head from "next/head";
import Header from "../sections/header";
import Main from "../sections/main";
import Footer from "../sections/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coding Fairy</title>
        <link rel="website icon" href="/bluebutterfly.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-main-grey dark:bg-black">
        <Header />
        <div className="h-full">
          <Main />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
