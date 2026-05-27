"use client";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const NumberAnimated = ({ numberProps }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Triggers when 50% of the element is in view
    triggerOnce: true, // Trigger animation only once
  });

  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? numberProps : 0, // Animation starts when in view
    delay: 500,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <div ref={ref}>
      <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    </div>
  );
};

export default NumberAnimated;
