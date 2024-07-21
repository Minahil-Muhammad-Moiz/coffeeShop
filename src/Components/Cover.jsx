import React from "react";
import { Image } from "../Assets/Contants";
import {motion } from 'framer-motion'

const Cover = () => {
  return (
    <div className="container my-14 ">
      <div
        style={Image.Cover}
        className="sm:min-h-[400px] rounded-xl sm:flex sm:justify-end sm:items-center py-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: "100",
            damping: 10,
            delay: 0.3,
          }}
        >
          <div className="flex flex-col justify-center items-center mx-auto text-center space-y-2">
            <h4 className="text-2xl font-bold ">Download the app</h4>
            <p className="text-lg mx-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, doloremque!
            </p>
            <div className="flex gap-4">
              <img
                src={Image.AppStore}
                alt="app store"
                width={150}
                className="cursor-pointer"
              />
              <img
                src={Image.PlayStore}
                alt="play store"
                width={150}
                className="cursor-pointer "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cover;
