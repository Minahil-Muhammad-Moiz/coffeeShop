import React from "react";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import BuyerForm from "./Components/BuyerForm";
import Cover from "./Components/Cover";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <BuyerForm />
      <Cover />
    </div>
  );
};

export default App;
