"use client";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-evenly items-center mx-[50px] h-screen">
        <div className="w-1/2 flex flex-col z-10">
          <div className="black w-full text-[3rem] text-[#ff0099] uppercase font-bold">
            <Typewriter
              options={{
                strings: [
                  "INVENTUM_2K24 !",
                  "CURSOR_2k24 !",
                  "IGNITION_2k24 !",
                  "ELEKTRA_2K24 !"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <h1 className="text-[80px] font-bold uppercase text-[#000] heading">
              ANITS FEST
            </h1>
            <div>
              <p className="font-semibold max-w-[400px]">
                Dive into a world of creativity and innovation! Experience Memes
                Mania, ML Hackathon, Poster Presentation, Live Quiz, Web Design,
                Code Rush,
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div className="absolute"
        
        >
          <div>
          <img src="bg.svg" alt="" className="opacity-[0.6] h-[900px]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="w-[803px] z-10"
        >
          <img src="anits.png" alt="hero"/>
        </motion.div>

      </div>
        <div className="h-[120px] bg-[#ff0099] flex justify-center items-center">
          <marquee behavior="" direction="">
            <div className="flex gap-24 justify-center ">
            <h1 className="text-[30px] font-bold text-[#fff]">INVENTUM_2K24</h1>
            <h1 className="text-[30px] font-bold text-[#fff]">CURSOR_2k24</h1>
            <h1 className="text-[30px] font-bold text-[#fff]">IGNITION_2k24</h1>
            <h1 className="text-[30px] font-bold text-[#fff]">ELEKTRA_2K24</h1>
            </div>
          </marquee>
        </div>
    </>
  );
};

export default HeroSection;
