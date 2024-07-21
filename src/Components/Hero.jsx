import React from "react";
import { Image } from "../Contants";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main style={Image.bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* Navbar Section */}
          <Navbar />
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Jet Chalice
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl">Black Lifestyle Lovers</h3>
                  <h4 className="text-sm opacity-60 leading-loose">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quo dicta quia veritatis, cum aspernatur pariatur excepturi
                    nihil voluptatum Lorem ipsum dolor.
                  </h4>
                </div>
                <div className="absolute -top-7 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* Hero Image Section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={Image.BlackCoffee}
                alt=""
                className=" relative z-30 h-[400px] md:h-[700px] img-shadow "
              />
              {/* Orange Circle Ring  */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute top-24 -right-16 border-primary rounded-full z-10 h-[180px] w-[180px] border-[20px]"
              ></motion.div>

              {/* big Text Section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-20 left-[200px] z-[1] "
              >
                <h1 className="font-bold scale-150 text-[140px] text-darkGray/40 leading-none">
                  Jet Chalice
                </h1>
              </motion.div>
            </div>
            {/* third Div Section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="relative text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28 hidden lg:block"
            >
              <div className="relative z-10 space-y-4 top-24 -right-6">
                <h3 className="text-2xl">Black Lifestyle Lovers</h3>
                <h4 className="text-sm opacity-60 leading-loose">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                  dicta quia veritatis, cum aspernatur pariatur excepturi nihil
                  voluptatum Lorem ipsum dolor.
                </h4>
              </div>
              <div className="absolute -top-5 -right-8 w-[250px] h-[190px] bg-darkGray"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
