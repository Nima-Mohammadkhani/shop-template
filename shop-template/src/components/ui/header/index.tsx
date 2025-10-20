"use client";
import ProductCategoryButton from "./productCategoryButton";
import Category from "./category";
import CategoryDetails from "./categoryDetails";
import HeaderItems from "./headerItems";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  return (
    <section className="flex flex-col w-full bg-white sticky top-0 z-50">
      <div className="flex justify-center items-center gap-8 w-full">
        <ProductCategoryButton
          onClick={() => setIsOpen((prev) => !prev)}
          className={isOpen ? "text-primary" : ""}
        />
        <div className="h-6 w-px bg-neutral-200" />
        <HeaderItems />
      </div>

      {isOpen && (
        <div className="w-full border-t border-neutral-200">
          <div className="mx-auto max-w-7xl py-6 flex gap-6">
            <div className="w-64 shrink-0">
              <Category
                onSelect={(name) => setSelectedCategory(name)}
                selectedCategory={selectedCategory}
              />
            </div>
            <div className="flex-1">
              <CategoryDetails category={selectedCategory} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Header;
