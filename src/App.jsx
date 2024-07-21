import React from "react";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import BuyerForm from "./Components/BuyerForm";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <BuyerForm />
    </div>
  );
};

export default App;
