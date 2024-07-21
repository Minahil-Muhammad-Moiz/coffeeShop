import React from "react";
import { CompanyDetail, footerLinks, Image } from "../Contants";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { easeIn, motion } from "framer-motion";

const Footer = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        ease: "easeIn Out",
      },
    },
  };

  const containerVariants = {
    hidden: { opaciy: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        staggerChildren: 0.4,
      },
    },
  };
  return (
    <footer className="contaier bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white ">
      <div className="container">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {/* companny details Section */}
        <motion.div variants={cardVariants} className="container space-y-4">
          <h1 className="text-2xl font-bold">Coders Coffee</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            natus molestias dignissimos facilis ratione excepturi laboriosam
            alias voluptas dolor aut.
          </p>
          <ul className="text-sm">
            {CompanyDetail.map((item) => (
              <li className="flex gap-2 items-center">
                <div>{<item.icon />}</div>
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* Footer Links Section  */}
        <motion.div variants={cardVariants} className="container space-y-4">
          <h1 className="text-2xl font-bold">Quick Links</h1>
          <ul>
            {footerLinks.map((link) => (
              <li className="my-1 cursor-pointer">{link}</li>
            ))}
          </ul>
        </motion.div>
        {/* Social Links Section  */}
        <motion.div variants={cardVariants} className="container space-y-4">
          <h1 className="text-2xl font-bold">Social Links</h1>
          <ul className="flex items-center gap-3 text-3xl">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTelegram />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
          <h5 className="text-2xl">Payment Method</h5>
          <img src={Image.Credits} alt="credits" width={400} />
        </motion.div>
      </motion.div>
      </div>
      {/* Copyright */}
      <div className="container mt-8 ">
        <div className="container border-white border-t-2 text-center pt-8">
          Copyright © 2024 Company Name. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
