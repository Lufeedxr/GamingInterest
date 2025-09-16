import { useState } from "react";
import React from 'react';
import Header from './head'
import Banner01 from './banner1'
import Banner02 from './banner5'
import Banner03 from './banner3'
import Product from './product'
import Footer from './foot'
import Lgg from './lg'
import Abmnext from "./abmnext";

function App() {
  const [page, setPage] = useState("home");
  return (
    <>
     <Header setPage={setPage} />
      {page === "home" ? (
        <>
          <Banner01/>
          <Banner02/>
          <Banner03/>
          <Product/>
          <Lgg/>
      </>

  ) : page === "abmnext" ? (
    <Abmnext />
  
   ): null}
      <Footer />
    </>
  )
}
export default App