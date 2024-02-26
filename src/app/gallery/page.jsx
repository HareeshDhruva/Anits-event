"use client"
import { motion} from "framer-motion";
const page = () => {
  return (
    <div>
      <div>
        <h1 className="text-center my-10 text-[50px] uppercase font-bold text-[#ff0099]">Gallery</h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 mx-[50px]"
        initial={{ x:-100 }}
        transition={{ duration: 2 }}
        whileInView={{ x: 0 }}
      >
        <motion.div className="col-span-1 row-span-2 flex justify-center items-center">
            <img src="talentExpo.png" alt="" />
        </motion.div>
        <div className="col-span-1 row-span-1 flex justify-center items-center">
            <img src="web.png" alt="" />
        </div>
        <div className="col-span-1 row-span-1 flex justify-center items-center">
            <img src="coding.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center my-12">
        <img src="reverse coding.png" alt="" />
      </div>
      <div className="flex justify-evenly mx-[50px] my-12">
      <div className="flex justify-center items-center">
            <img src="ml.png" alt="" />
        </div>
        <div className="flex justify-center items-center">
            <img src="pixelperfect.png" alt="" />
        </div>
      </div>


      <div className="flex justify-evenly mx-[50px] my-12">
      <div className="flex justify-center items-center">
            <img src="quize.png" alt="" />
        </div>
        <div className="flex justify-center items-center">
            <img src="projectExpo.png" alt="" />
        </div>
      </div>

      <div className="flex justify-evenly mx-[50px] my-12">
      <div className="flex justify-center items-center">
            <img src="vlog.png" alt="" />
        </div>
        <div className="flex justify-center items-center">
            <img src="presentation.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default page
