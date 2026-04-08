import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, Minimize2, X, Sparkles } from "lucide-react";

export const AIWidget = () => {
  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  // ✅ FIX: better event handling
  useEffect(() => {
    const handler = () => {
      console.log("AI OPEN EVENT TRIGGERED"); // debug
      setOpen(true);
    };

    window.addEventListener("openAI", handler);

    return () => {
      window.removeEventListener("openAI", handler);
    };
  }, []);

  return (
    <>
      {/* ✅ Floating AI Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-[#f97316] text-white px-5 py-3 rounded-full shadow-xl hover:scale-110 transition-all z-[9999] flex items-center gap-2 font-bold"
      >
        <Sparkles size={18} />
        AI
      </button>

      {/* ✅ AI Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-0 right-0 bg-white shadow-2xl z-[9999] flex flex-col border ${
              fullscreen
                ? "w-full h-full"
                : "w-[30%] h-[80%] rounded-tl-3xl"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-[#1e3a8a] text-white">
              <h3 className="font-bold">Vidya AI</h3>

              <div className="flex gap-3">
                <button onClick={() => setFullscreen(!fullscreen)}>
                  {fullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>

                <button onClick={() => setOpen(false)}>
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* AI iframe */}
            <iframe
              src="https://vidya-learn-wise.lovable.app/"
              className="flex-1 w-full border-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};