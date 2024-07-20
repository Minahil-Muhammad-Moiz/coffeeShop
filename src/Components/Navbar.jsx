import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { CgFacebook, CgInstagram, CgTwitter } from "react-icons/cg";

const Navbar = () => {
  const [Sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = ()=>{
    const winScroll = window.scrollY
    if (winScroll>50){
      setScrolled(true)
    } else{
      setScrolled(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)

    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
    
  })

  const handleSidebar = () => {
    setSidebar(!Sidebar);
  };

  return (
    <nav className="text-white">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.8,
        }}
        className={`fixed top-0 left-0 right-0 w-full py-4 container z-40 ${scrolled && 'transition-all duration-700 ease-in-out bg-zinc-700 opacity-80'}`}
      >
        <div className="flex justify-between items-center">
          {/* logo Section */}
          <h1 className="text-2xl font-semibold uppercase">
            <span className="text-primary">Coders</span> Coffee.
          </h1>
          {/* Hamburger Section */}
          <GiHamburgerMenu
            className="cursor-pointer text-3xl"
            onClick={handleSidebar}
          />
        </div>
      </motion.div>
      {Sidebar && (
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="fixed h-full w-36 bg-primaryDark top-0 right-0 z-20 opacity-90"
        >
          <div className="flex flex-col items-center justify-center h-full w-full text-center text-white">
            <div className="h-20 w-[1px] bg-white"></div>
            <div className="border-2 text-2xl rounded-full p-2 mt-4 cursor-pointer">
              <CgFacebook />
            </div>
            <div className="border-2 text-2xl rounded-full p-2 mt-4 cursor-pointer">
              <CgInstagram />
            </div>
            <div className="border-2 text-2xl rounded-full p-2 mt-4 mb-4 cursor-pointer">
              <CgTwitter />
            </div>
            <div className="h-20 w-[1px] bg-white"></div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
