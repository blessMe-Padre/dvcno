import styles from './style.module.css';

const SvgComponent = ({ className, item }) => {
  const strokeClass =
    item.className === 'light-blue'
      ? styles.light_blue_stroke
      : item.className === 'green'
      ? styles.green_stroke
      : item.className === 'yellow'
      ? styles.yellow_stroke
      : item.className === 'violet'
      ? styles.violet_stroke
      : '';


  return (
    <svg
      className={`${styles.history_decor_without_year} ${strokeClass}`} // Combine class names
      width="63"
      height="65"
      viewBox="0 0 63 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.00008 2.04532C21.974 0.282198 63.343 10.0074 61.0278 63.013"
        stroke="currentColor" // Use currentColor
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SvgComponent;

