import type { NextPage } from "next";
import Head from "next/head";
import Header from "../sections/header";
import Main from "../sections/main";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
