"use client";
import { useState } from "react";
import Icon from "../Icon";
import Button from "../Button";

const ProductCategoryButton = () => {
  const [categoryDetails, setCategoryDetails] = useState<boolean>(false);

  return (
    <Button
      title="دسته بندی کالا ها"
      iconRight="justify"
      onClick={() => setCategoryDetails(true)}
      className="font-medium text-primary"
      iconColorRight="primary"
    />
  );
};
export default ProductCategoryButton;
