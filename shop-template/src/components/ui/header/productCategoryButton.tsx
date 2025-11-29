"use client";

import Button from "../Button";

type ProductCategoryButtonProps = {
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
  "aria-expanded"?: boolean;
};

const ProductCategoryButton = ({
  onClick,
  className,
  "aria-label": ariaLabel,
  "aria-expanded": ariaExpanded,
}: ProductCategoryButtonProps) => {
  return (
    <Button
      title="دسته بندی کالا ها"
      iconRight="justify"
      onClick={onClick}
      className={`font-medium text-primary ${className ?? ""}`}
      iconColorRight="primary"
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
    />
  );
};
export default ProductCategoryButton;
