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
    <section className="flex flex-col justify-center items-center sm:gap-4 text-base bg-white border-2 border-b-4 border-neutral-200 size-42 sm:h-56 sm:w-2xs rounded-2xl shadow-xl">
      <img src={categoryItem.image} alt="" />
      <h3 className="text-sm sm:text-base">{categoryItem.category}</h3>
    </section>
  );
};
export default CategoryCard;
