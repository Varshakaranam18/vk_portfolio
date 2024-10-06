"use client";

import Lottie from "lottie-react";

const AnimationLottie = ({ animationData, width = '95%' }) => {
  return (
    <Lottie 
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width }}
    />
  );
};

export default AnimationLottie;
