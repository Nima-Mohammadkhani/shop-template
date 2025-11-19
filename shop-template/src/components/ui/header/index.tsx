"use client";
import ProductCategoryButton from "./productCategoryButton";
import Category from "./category";
import CategoryDetails from "./categoryDetails";
import HeaderItems from "./headerItems";
import Icon from "../Icon";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <section className="flex flex-col justify-center items-center w-full bg-white sticky top-0 z-40 shadow-sm">
      <div className="hidden lg:flex justify-center items-center gap-8 w-full max-w-7xl">
       <div>
        <ProductCategoryButton
          onClick={() => setIsOpen((prev) => !prev)}
          className={isOpen ? "text-primary" : ""}
        />
       </div>
        <div className="h-6 w-px bg-neutral-200" />
        <HeaderItems />
      </div>

      <div className="flex lg:hidden justify-between items-center px-4 py-3 border-b border-neutral-200">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 hover:bg-neutral-50 rounded-lg transition-colors"
          aria-label="منوی همبرگری"
        >
          <Icon name="justify" size={24} color="primary" />
        </button>
        
        <h1 className="text-lg font-bold text-primary">فروشگاه</h1>
        
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-neutral-50 rounded-lg transition-colors">
            <Icon name="search" size={20} />
          </button>
          <button className="p-2 hover:bg-neutral-50 rounded-lg transition-colors">
            <Icon name="Shopping" size={20} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="hidden lg:block w-full border-t border-neutral-200">
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

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          <div className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 lg:hidden overflow-y-auto animate-slide-in-right">
            <div className="flex justify-between items-center p-4 border-b border-neutral-200 sticky top-0 bg-white">
              <h2 className="text-lg font-bold text-primary">منو</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-neutral-50 rounded-lg transition-colors"
                aria-label="بستن منو"
              >
                <Icon name="cross" size={24} />
              </button>
            </div>

            <div className="flex flex-col">
              <div className="border-b border-neutral-200 py-4">
                <h3 className="px-4 text-sm font-bold text-neutral-700 mb-3">دسترسی سریع</h3>
                <HeaderItems isMobile onItemClick={() => setIsMobileMenuOpen(false)} />
              </div>

              <div className="py-4">
                <div className="px-4 mb-3">
                  <ProductCategoryButton
                    onClick={() => setIsOpen((prev) => !prev)}
                    className={`${isOpen ? "text-primary" : ""} w-full justify-start`}
                  />
                </div>
                
                {isOpen && (
                  <div className="px-4">
                    <Category
                      onSelect={(name) => {
                        setSelectedCategory(name);
                      }}
                      selectedCategory={selectedCategory}
                    />
                    
                    {selectedCategory && (
                      <div className="mt-4 pt-4 border-t border-neutral-200">
                        <CategoryDetails category={selectedCategory} />
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="border-t border-neutral-200 p-4 mt-auto">
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors">
                  <Icon name="person" size={20} color="primary" />
                  <span className="font-medium">ورود / ثبت نام</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
export default Header;
