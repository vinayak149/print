
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function PaintDropAnimation({ color = 'bg-sky-300', duration = 1 }) {
  return (
    <motion.div
      className={`absolute inset-0 ${color}`}
      initial={{ height: 0 }}
      animate={{ height: '100%' }}
      transition={{ duration, ease: 'easeInOut' }}
      style={{ overflow: 'hidden', transform: 'rotate(180deg)'}}  
    >
      <svg
        className="absolute bottom-0 left-0 right-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"   
      >
        <path
          fill="skyblue"
          fillOpacity="1"
          d="M0,128L48,154.7C96,181,192,235,288,240C384,245,480,203,576,181.3C672,160,768,160,864,170.7C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </motion.div>
  );
}

PaintDropAnimation.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
};
