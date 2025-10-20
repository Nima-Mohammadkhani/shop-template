"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { IconProps } from "@/types/ui";

const sizeMap: Record<string, number> = {
  sm: 16,
  md: 20,
  lg: 28,
};

const Icon: React.FC<IconProps> = ({
  name,
  size = "md",
  color,
  label,
  onClick,
  className = "",
  hoverEffect = false,
}) => {
  const finalSize = typeof size === "number" ? size : sizeMap[size];
  const iconSrc = `/icon/${name}.svg`;

  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center",
        onClick && "cursor-pointer",
        hoverEffect && "hover:opacity-75 transition-opacity",
        className
      )}
   >
      {color ? (
        <span
          aria-hidden
          className={color.startsWith('#') || color.startsWith('rgb') || color.startsWith('var(') ? '' : `text-${color}`}
          style={{
            width: finalSize,
            height: finalSize,
            backgroundColor: color.startsWith('#') || color.startsWith('rgb') || color.startsWith('var(') ? color : 'currentColor',
            WebkitMaskImage: `url(${iconSrc})`,
            maskImage: `url(${iconSrc})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            display: "inline-block",
          }}
        />
      ) : (
        <Image
          src={iconSrc}
          alt={label || name}
          width={finalSize}
          height={finalSize}
          unoptimized
        />
      )}
      {label && <span className="ml-2 text-sm text-gray-700">{label}</span>}
    </span>
  );
};

export default Icon;
