import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaVuejs, FaNodeJs, FaPhp, FaPython, FaDatabase } from "react-icons/fa";
import { SiMysql, SiPostgresql } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial : { 
        y: -10 
    },
    animate : {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >   
            Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
        >
            <FaHtml5 className="text-7xl text-orange-600"/>
        </motion.div>
        <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
        >
            <FaCss3Alt className="text-7xl text-blue-600"/>
        </motion.div>
        <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
        >
            <FaJsSquare className="text-7xl text-yellow-500"/>
        </motion.div>
        <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
        >
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
        >
            <FaVuejs className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4"
        >
            <FaNodeJs className="text-7xl text-green-600"/>
        </motion.div>
        <motion.div
            variants={iconVariants(7)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4"
        >
            <FaPhp className="text-7xl text-indigo-600"/>
        </motion.div>
        <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4"
        >
            <FaPython className="text-7xl text-yellow-400"/>
        </motion.div>
        <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4"
        >
            <SiMysql className="text-7xl text-blue-500"/>
        </motion.div>
        <motion.div
            variants={iconVariants(7)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4"
        >
            <SiPostgresql className="text-7xl text-blue-700"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies