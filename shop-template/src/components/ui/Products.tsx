import Button from "./Button";
import Card, { BlogItem, ProductItem } from "./Card";
import { categoryItem } from "./CategoryCard";

interface Productsprops {
  data: ProductItem[] | BlogItem[];
  category: categoryItem[];
  title: string;
  type?: string;
}

const Products: React.FC<Productsprops> = ({ data, category, title, type }) => {
  return (
    <div className="flex flex-col justify-between gap-8">
      <div className="flex justify-between items-center gap-4">
        <h3 className="text-primary text-lg">{title}</h3>
        <div className="h-px flex-1 w-full bg-neutral-200" />
        <Button title="مشاهده همه" className="text-xs" iconLeft="" />
      </div>

      {type !== "blog" && (
        <nav aria-label={`فیلتر دسته‌بندی برای ${title}`}>
          <div className="flex justify-start items-center gap-2">
            <div className="h-10 w-px bg-primary" aria-hidden="true" />
            {category.map((item) => (
              <Button
                key={item.id}
                title={item.category}
                className="p-2 border-b-2 border-primary rounded-none text-xs sm:text-base"
                aria-label={`فیلتر بر اساس ${item.category}`}
              />
            ))}
          </div>
        </nav>
      )}

      <section aria-label={title}>
        <div
          className="flex overflow-x-auto scroll-container justify-between gap-4 sm:gap-0"
          role="list"
        >
          {data.map((item) => (
            <div key={item.id} role="listitem">
              {type === "blog" ? (
                <Card blogItem={item as BlogItem} type={type} />
              ) : (
                <Card productItem={item as ProductItem} type={type} />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
