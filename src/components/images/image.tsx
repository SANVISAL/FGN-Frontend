import React from "react";

interface CustomImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | "full";
  height?: number | "full";
  fill?: boolean;
  onClick?: () => void;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  fill = false,
  onClick,
}) => {
  return (
    <img
      src={typeof src === "string" ? src : URL.createObjectURL(src)}
      alt={alt}
      className={`w-${fill ? "w-full h-full object0-cover " : ""} ${className}`}
      style={{
        width: width && width != "full" ? `${width}px` : undefined,
        height: height && height != "full" ? `${height}px` : undefined,
        cursor: onClick ? "pointer" : undefined,
      }}
      onClick={onClick}
    />
  );
};

export default CustomImage;
