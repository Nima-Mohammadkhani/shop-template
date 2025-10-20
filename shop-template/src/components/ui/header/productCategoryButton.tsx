"use client";

import Button from "../Button";

type ProductCategoryButtonProps = {
  onClick?: () => void;
  className?: string;
};

const ProductCategoryButton = ({
  onClick,
  className,
}: ProductCategoryButtonProps) => {
  return (
    <Button
      title="دسته بندی کالا ها"
      iconRight="justify"
      onClick={onClick}
      className={`font-medium text-primary ${className ?? ""}`}
      iconColorRight="primary"
    />
  );
};
export default ProductCategoryButton;
