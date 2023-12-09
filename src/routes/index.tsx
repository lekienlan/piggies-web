/* eslint-disable max-lines */

import { AnimatePresence, motion } from 'framer-motion';
import Home from 'pages/home';
import { createBrowserRouter } from 'react-router-dom';

export const AnimatedRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 }
        }}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '',
        element: (
          <AnimatedRoute>
            <Home />
          </AnimatedRoute>
        )
      }
    ]
  }
]);

export default router;
