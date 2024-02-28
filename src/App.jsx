import { useState } from "react";
import { Ceo, Footer, Header, Nav, Service, Social } from "./Components";
function App() {
  return (
    <>
      <Nav />
      <Header />
      <Ceo />
      <Service />
      <Social />
      <Footer />
    </>
  );
}

export default App;
