"use client";

import { motion } from "framer-motion";

/**
 * Animated spinner with teal/orange gradient
 */
export function LoadingSpinner({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className="w-10 h-10 rounded-full border-4 border-slate-200 dark:border-slate-700 border-t-orange-600 dark:border-t-orange-400"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

/**
 * Shimmer skeleton for table rows
 */
export function SkeletonRow({
  columns = 4,
  className = "",
}: {
  columns?: number;
  className?: string;
}) {
  return (
    <div className={`flex gap-4 py-3 px-4 ${className}`}>
      {Array.from({ length: columns }).map((_, i) => (
        <motion.div
          key={i}
          className="h-4 bg-slate-200 dark:bg-slate-700 rounded flex-1 relative overflow-hidden"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Shimmer skeleton for cards
 */
export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 ${className}`}
    >
      {/* Header */}
      <motion.div
        className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-4 relative overflow-hidden"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Body lines */}
      {[100, 80, 60].map((width, i) => (
        <motion.div
          key={i}
          className="h-4 bg-slate-200 dark:bg-slate-700 rounded mb-3 relative overflow-hidden"
          style={{ width: `${width}%` }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        </motion.div>
      ))}

      {/* Footer */}
      <motion.div
        className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mt-6 relative overflow-hidden"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
      </motion.div>
    </div>
  );
}
