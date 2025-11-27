"use client";

import { useState, useRef, useEffect } from "react";
import Input from "./Input";
import Icon from "./Icon";
import Image from "next/image";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const relatedProducts = [
    { name: "لیوان چینی", category: "آشپزخانه" },
    { name: "لیوان فلزی", category: "آشپزخانه" },
    { name: "لیوان سرامیکی", category: "آشپزخانه" },
    { name: "لیوان پلاستیکی", category: "آشپزخانه" },
  ];

  const popularSearches = [
    "سرویس ارکوپال",
    "میز عسلی",
    "سطل",
    "تخت خواب",
    "بشقاب",
    "جارو برقی",
    "صندلی فلزی",
    "تلوزیون",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="flex justify-center items-center w-full bg-white border-b border-neutral-200">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-7xl px-4 md:px-0 py-3 sm:py-4 gap-3 sm:gap-4">
        <div className="hidden sm:block shrink-0">
          <Image
            src={"/image/logo/logo.png"}
            alt="لوگو"
            width={120}
            height={40}
            className="h-8 md:h-10 w-auto object-contain"
            priority
          />
        </div>

        <div
          className="flex-1 relative w-full sm:max-w-2xl lg:max-w-5xl"
          ref={searchRef}
        >
          <div className="relative w-full">
            <Input
              className="rounded-lg w-full p-2 sm:p-2.5 text-sm sm:text-base"
              placeholder="جستجو"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              rightIcon={<Icon name="search" className="pt-1" size={18} />}
            />
          </div>

          {isSearchOpen && (
            <div className="absolute top-full z-50 left-0 right-0 mt-2 bg-white border border-neutral-200 rounded-lg shadow-lg max-h-[400px] sm:max-h-[500px] overflow-y-auto">
              {searchQuery && (
                <div className="p-3 sm:p-4 border-b border-neutral-200">
                  <h3 className="text-xs sm:text-sm font-semibold text-neutral-700 mb-2 sm:mb-3">
                    کالاهای مربوط به {searchQuery}
                  </h3>
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    {relatedProducts.map((product, index) => (
                      <button
                        key={index}
                        className="flex items-center gap-2 sm:gap-3 p-2 hover:bg-neutral-50 rounded-lg text-right transition-colors"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <Icon name="search" size={14} className="shrink-0" />
                        <div className="flex-1 min-w-0">
                          <span
                            className={`block text-xs sm:text-sm ${
                              product.name === "لیوان فلزی"
                                ? "text-red-600 font-medium"
                                : "text-neutral-700"
                            }`}
                          >
                            {product.name}
                          </span>
                          <span className="text-xs text-neutral-500 mr-2">
                            در دسته بندی {product.category}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-3 sm:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-neutral-700 mb-2 sm:mb-3">
                  جستجو پر طرفدار
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-neutral-100 hover:bg-neutral-200 rounded-lg text-xs sm:text-sm text-neutral-700 transition-colors"
                      onClick={() => {
                        setSearchQuery(search);
                        setIsSearchOpen(false);
                      }}
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex justify-center items-center hover:bg-neutral-50 rounded-lg transition-colors">
            <Icon name="Shopping" size={24} />
          </div>

          <div className="h-6 w-px bg-neutral-300" />

          <button className="flex items-center gap-2 hover:bg-neutral-50 rounded-lg transition-colors">
            <Icon name="person" size={20} />
            <span className="text-sm font-medium">ثبت نام | ورود</span>
            <Icon name="arrow down" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
export default SearchBar;
