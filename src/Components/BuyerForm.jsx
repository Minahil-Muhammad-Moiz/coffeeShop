import { Image } from "../Contants";
import { easeInOut, motion } from "framer-motion";

const BuyerForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, ease:easeInOut, }}
      className="container my-32"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* form Section */}
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-primaryDark">
            Bur our products from anywhere in the world.
          </h3>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Name"
              className="input-style lg:w-[150px]"
            />
            <input type="email" placeholder="Email" className="input-style" />
          </div>
          <div className="flex items-center gap-4 ">
            <input type="text" placeholder="Country" className="input-style" />
            <input
              type="text"
              placeholder="Zipcode"
              className="input-style lg:w-[150px]"
            />
          </div>
          <button className="primary-btn">Order Now</button>
        </div>
        {/* world map section */}
        <div className="col-span-2">
          <img
            src={Image.Map}
            alt="world map"
            className="w-full mx-auto sm:w-[500px]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BuyerForm;
