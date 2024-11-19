import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function PaintDropAnimation({ duration = 1 }) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ height: "0%", y: "-100%" }}
      animate={{ height: "100%", y: "0%" }}
      transition={{
        duration,
        height: { duration: duration * 0.5, ease: "easeOut" },
        y: { duration: duration, ease: [0.45, 0, 0.55, 1] }
      }}
      style={{
        transformOrigin: 'top center',
        pointerEvents: 'none',
        backgroundColor: '#7dd3fc', // sky-300 color
        zIndex: 10
      }}
    >
      <svg
        className="absolute top-0 left-0 right-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{
          transform: 'rotate(180deg)',
          fill: '#7dd3fc' // sky-300 color
        }}
      >
        <path
          fillOpacity="1"
          d="M0,320L48,293.3C96,267,192,213,288,208C384,203,480,245,576,266.7C672,288,768,288,864,277.3C960,267,1056,245,1152,245.3C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </motion.div>
  );
}

PaintDropAnimation.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
};
