"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HeroImageProps } from "@/types/common";

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  priority = false,
  hideBelowWidth = 1024,
  fill = false,
  width,
  height,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsVisible(window.innerWidth >= hideBelowWidth);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [hideBelowWidth]);

  return (
    <>
      {isVisible && (
        <Image
          priority={priority}
          src={src}
          alt={alt}
          className={className}
          {...(fill
            ? { fill: true }
            : { width: width ?? 500, height: height ?? 300 })}
        />
      )}
    </>
  );
};

export default HeroImage;
