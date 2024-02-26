"use client"
import { motion} from "framer-motion";
const page = () => {
  return (
    <div>
      <div>
        <h1 className="text-center my-10 text-[50px] uppercase font-bold text-[#ff0099]">Gallery</h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 mx-[50px]">
        <motion.div className="col-span-1 row-span-2 flex justify-center items-center"
          initial={{ x:-400 }}
          transition={{ duration: 2 }}
          whileInView={{ x: 0 }}
        >
            <img src="talentExpo.png" alt="" />
        </motion.div>
        <motion.div className="col-span-1 row-span-1 flex justify-center items-center"
        initial={{ y:-200 }}
        transition={{ duration: 2 }}
        whileInView={{ y: 0 }}
        >
            <img src="web.png" alt="" />
        </motion.div>
        <motion.div className="col-span-1 row-span-1 flex justify-center items-center"
           initial={{ y:200 }}
           transition={{ duration: 2 }}
           whileInView={{ y: 0 }}
        >
            <img src="coding.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="flex justify-center items-center my-12"
       initial={{ opacity:0,scale:0}}
       transition={{ duration:2,ease:"easeInOut"}}
       whileInView={{ opacity: 1 ,scale:1}}
      >
        <img src="reverse coding.png" alt="" />
      </motion.div>
      <div className="flex justify-evenly mx-[50px] my-12">
      <motion.div className="flex justify-center items-center"
       initial={{ x:200 }}
       transition={{ duration: 2 }}
       whileInView={{ x: 0 }}
      >
            <img src="ml.png" alt="" />
        </motion.div>
        <motion.div className="flex justify-center items-center"
         initial={{ x:-200 }}
         transition={{ duration: 2 }}
         whileInView={{ x: 0 }}
        >
            <img src="pixelperfect.png" alt="" />
        </motion.div>
      </div>

      <div className="flex justify-evenly mx-[50px] my-12">
      <motion.div className="flex justify-center items-center"
       initial={{ x:-200 }}
       transition={{ duration: 2 }}
       whileInView={{ x: 0 }}
      >
            <img src="quize.png" alt="" />
        </motion.div>
        <motion.div className="flex justify-center items-center"
         initial={{ x:200 }}
         transition={{ duration: 2 }}
         whileInView={{ x: 0 }}
        >
            <img src="projectExpo.png" alt="" />
        </motion.div>
      </div>

      <div className="flex justify-evenly mx-[50px] my-12">
      <motion.div className="flex justify-center items-center"
       initial={{ x:200 }}
       transition={{ duration: 2 }}
       whileInView={{ x: 0 }}
      >
            <img src="vlog.png" alt="" />
        </motion.div>
        <motion.div className="flex justify-center items-center"
         initial={{ x:-200 }}
         transition={{ duration: 2 }}
         whileInView={{ x: 0 }}
        >
            <img src="presentation.png" alt="" />
        </motion.div>
      </div>
    </div>
  )
}

export default page
