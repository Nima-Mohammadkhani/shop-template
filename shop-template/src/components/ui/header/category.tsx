"use client";

import { useState } from "react";
import Button from "../Button";

type CategoryProps = {
  selectedCategory?: string;
  onSelect?: (name: string) => void;
};

const Category = ({ selectedCategory, onSelect }: CategoryProps) => {
  const [internalSelected, setInternalSelected] = useState<string | undefined>(
    selectedCategory
  );

  const effectiveSelected = selectedCategory ?? internalSelected;

  const categoryItem = [
    { id: 1, name: "مبلمان", icon: "sofa" },
    { id: 2, name: "دکوراسون داخلی", icon: "curtains-blinds" },
    { id: 3, name: "لوازم آشپزخانه", icon: "stove-induction-pot" },
    { id: 4, name: "سرویس خواب و حمام", icon: "chair-stand" },
    { id: 5, name: "نور پردازی و روشنایی", icon: "sofa" },
    { id: 6, name: "لوازم سازماندهی", icon: "box" },
    { id: 7, name: "ابزار و تجهیزات خانه", icon: "tools-wench-ruler" },
    { id: 8, name: "فضای باز و باغچه", icon: "bench-tree-cloud" },
    { id: 9, name: "خدمات", icon: "building-wall-bricks" },
    { id: 10, name: "محصولات ویژه", icon: "tage offer" },
  ];

  return (
    <section className="flex flex-col gap-4">
      {categoryItem.map((item) => (
        <Button
          key={item.id}
          title={item.name}
          iconRight={item.icon}
          onClick={() => {
            setInternalSelected(item.name);
            onSelect?.(item.name);
          }}
          className="flex justify-start"
          textClassName={item.name === effectiveSelected ? "text-primary" : ""}
          iconColorRight={item.name === effectiveSelected ? "primary" : ""}
        />
      ))}
    </section>
  );
};
export default Category;
