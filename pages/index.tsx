import type { NextPage } from "next";
import Head from "next/head";
import Header from "../sections/header";
import Main from "../sections/main";
import Footer from "../sections/footer";

const Home: NextPage = () => {
  return (
    <div className="">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
