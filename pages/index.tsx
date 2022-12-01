import type { NextPage } from "next";
import Head from "next/head";
import Header from "../sections/header";
import Main from "../sections/main";
import Footer from "../sections/footer";

const Home: NextPage = () => {
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
