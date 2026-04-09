import { motion, type MotionProps } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

type OptimizedImageProps = ComponentPropsWithoutRef<"img"> & MotionProps;

export const OptimizedImage = ({ src, alt, ...props }: OptimizedImageProps) => {
  const isProduction = import.meta.env.PROD;
  const base = typeof src === "string" ? src.replace(/\.(png|jpe?g)$/i, "") : "";

  if (isProduction && base) {
    return (
      // <picture>
      //   <source srcSet={`${base}.avif`} type="image/avif" />
      //   <source srcSet={`${base}.webp`} type="image/webp" />
        <motion.img src={src} alt={alt} loading="lazy" {...props} />
      // </picture>
    );
  }

  return <motion.img src={src} alt={alt} loading="lazy" {...props} />;
};