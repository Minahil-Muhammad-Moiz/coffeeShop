import { Service } from "../Assets/Contants";
import { motion } from "framer-motion";

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
    hidden: { opaciy: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div className="container my-16 space-y-4 flex flex-col justify-center items-center w-full">
      <div className="text-center space-y-4 mx-4">
        <h2 className="text-5xl font-bold text-primary ">Refreshing Coffees</h2>
        <p className=" text-zinc-500 mx-auto md:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni
          consequuntur tempore atque mollitia ea quisquam ratione quidem, est
          ab!
        </p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className=" w-full flex flex-wrap justify-evenly items-center gap-6"
      >
        {Service.map((item) => (
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center justify-center text-center w-60 space-y-4 hover:scale-[1.1] duration-300 cursor-pointer"
          >
            <img
              src={item.image}
              alt="Coffee Item"
              width={200}
              height={200}
              className="img-shadow2"
            />
            <h4 className=" text-2xl font-extrabold text-primary">
              {item.title}
            </h4>
            <p className="text-zinc-700">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
