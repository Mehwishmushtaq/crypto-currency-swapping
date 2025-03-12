import { motion } from "framer-motion"

export function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#F3F4F6] dark:bg-[#111827] z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="text-4xl font-bold text-[#8B5CF6] font-sans"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Crypto Exchange
      </motion.h1>
    </motion.div>
  )
}

