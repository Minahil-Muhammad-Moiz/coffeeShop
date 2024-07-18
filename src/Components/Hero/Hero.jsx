import React from "react";
import { Image } from "../../Assets/Contants";

const Hero = () => {
  return (
    <main style={Image.bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* Navbar Section */}
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl">Black Lifestyle Lovers</h3>
                  <h4 className="text-sm opacity-60 leading-loose">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quo dicta quia veritatis, cum aspernatur pariatur excepturi
                    nihil voluptatum Lorem ipsum dolor.
                  </h4>
                </div>
                <div className="absolute -top-7 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </div>
            </div>
            {/* Hero Image Section */}
            <div className="relative">
              <img
                src={Image.BlackCoffee}
                alt=""
                className=" relative z-40 h-[400px] md:h-[700px] img-shadow "
              />
              {/* Orange Circle Ring  */}
              <div className="absolute top-24 -right-16 border-primary rounded-full z-10 h-[180px] w-[180px] border-[20px]"></div>

              {/* big Text Section */}
              <div className="absolute -top-20 left-[200px] z-[1] ">
                <h1 className="font-bold scale-150 text-[140px] text-darkGray/40 leading-none">
                  Blvck Tumbler
                </h1>
              </div>
            </div>
            {/* third Div Section */}
            <div className="relative text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <div className="relative z-10 space-y-4 top-24 -right-6">
                <h3 className="text-2xl">Black Lifestyle Lovers</h3>
                <h4 className="text-sm opacity-60 leading-loose">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                  dicta quia veritatis, cum aspernatur pariatur excepturi nihil
                  voluptatum Lorem ipsum dolor.
                </h4>
              </div>
              <div className="absolute -top-5 -right-8 w-[250px] h-[190px] bg-darkGray"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
