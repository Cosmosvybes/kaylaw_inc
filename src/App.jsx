import { useState } from "react";
import {
  Biography,
  Ceo,
  Footer,
  Header,
  Nav,
  Service,
  Social,
} from "./Components";
function App() {
  return (
    <>
      <Nav />
      <Header />
      <Ceo />
      <Biography />
      <Service />
      <Social />
      <Footer />
    </>
  );
}

export default App;
