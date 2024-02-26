// "use client"
// import { motion} from "framer-motion";

// const GridComponents = () => {
//   return (
//     <div className="mx-[50px]">
//       <h1 className="uppercase flex justify-center text-[3rem] font-bold heading">
//         <hr className="bgone w-[30%] m-auto " />
//           gallery
//         <hr className="bgone w-[30%] m-auto" />
//       </h1>
//       <div className="w-full h-[800px] grid grid-cols-3 grid-rows-2 gap-4 mb-20">
//         <motion.div className="col-span-1 row-span-2 flex"
//           initial={{ x:-100 }}
//           transition={{ duration: 2 }}
//           whileInView={{ x: 0 }}
//         >
//           <div className="flex">
//             <img
//               src="https://as2.ftcdn.net/v2/jpg/05/42/89/57/1000_F_542895751_DGSpHpIUslNH4jswB2iRPQt9NBP4K2ik.jpg"
//               alt="ok"
//               className="object-cover"
//             />
//           </div>
//         </motion.div>
//         <motion.div className="col-span-1 row-span-1 ring-1 flex"
//          initial={{ y:-100 }}
//          transition={{ duration: 2 }}
//          whileInView={{ y: 0 }}
//         >
//           <div className="flex">
//             <img
//               src="https://as2.ftcdn.net/v2/jpg/05/66/56/39/1000_F_566563917_jXSZJe1nMDIhzYquIKNHWYstmJVDY6RX.jpg"
//               alt="ok"
//               className="object-cover"
//             />
//           </div>
//         </motion.div>
//         <motion.div className="grid-cols-1 grid-rows-1 ring-1 flex"
//           initial={{ x:100 }}
//           transition={{ duration: 2 }}
//           whileInView={{ x: 0 }}
//         >
//           <div className="flex">
//             <img
//               src="https://as1.ftcdn.net/v2/jpg/01/85/19/30/1000_F_185193047_c0LipsI1gbWxHqKvDKJlMoCJKM5lxSoP.jpg"
//               alt="ok"
//               className="object-cover"
//             />
//           </div>
//         </motion.div>
//         <motion.div className="col-span-2 row-span-1 ring-1 overflow-clip"
//           initial={{ y:100 }}
//           transition={{ duration: 2 }}
//           whileInView={{ y: 0 }}
//         >
//           <div className="flex">
//             <img
//               src="https://as2.ftcdn.net/v2/jpg/05/60/58/67/1000_F_560586710_VmIHNuH6TcdLHIn3cEuIDDAcCYBhkIL0.jpg"
//               alt="ok"
//               className="object-cover"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default GridComponents;
