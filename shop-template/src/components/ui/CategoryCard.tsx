import Image from "next/image";

export interface categoryItem {
  id: number;
  image: string;
  category: string;
}

interface CategoryCardProps {
  categoryItem: categoryItem;
}
const CategoryCard: React.FC<CategoryCardProps> = ({ categoryItem }) => {
  return (
    <article className="flex flex-col justify-center items-center sm:gap-4 text-base bg-white border-2 border-b-4 border-neutral-200 size-42 sm:h-56 sm:w-2xs rounded-2xl shadow-xl">
      <div className="relative w-full flex-1 flex items-center justify-center">
        <Image 
          src={categoryItem.image} 
          alt={`تصویر دسته‌بندی ${categoryItem.category}`}
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
      <h3 className="text-sm sm:text-base pb-2">{categoryItem.category}</h3>
    </article>
  );
};
export default CategoryCard;
