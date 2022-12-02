import type { NextPage } from "next";
import Head from "next/head";
import Header from "../sections/header";
import Main from "../sections/main";
import Footer from "../sections/footer";

const Home: NextPage = () => {
  return (
    <div className="bg-main-grey dark:bg-black">
      <Header />
      <div className="h-screen">
        <Main />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
