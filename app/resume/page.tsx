"use client";

import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-8 md:px-12 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-2">
                Resume
              </h1>
              <p className="text-gray-400">Shruthi Yadav</p>
            </div>
            <motion.a
              href="/api/resume-download"
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all duration-200"
              download
            >
              ⬇️ Download PDF
            </motion.a>
          </div>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-lg border border-gray-800 overflow-hidden shadow-2xl"
        >
          <iframe
            src="/api/resume"
            className="w-full h-screen md:h-[800px]"
            title="Resume Preview"
          />
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center text-gray-400 text-sm"
        >
          <p>Can't see the preview? <a href="/api/resume-download" className="text-indigo-400 hover:text-indigo-300">Download the PDF</a></p>
        </motion.div>
      </div>
    </main>
  );
}
