import Slider from "@/components/slider";
import Card from "@/components/ui/Card";
import CategoryCard from "@/components/ui/CategoryCard";
import Products from "@/components/ui/Products";

const Home = () => {
  const product = [
    {
      id: 1,
      image: "/image/image/product/pic.png",
      name: "قهوه ساز دلونگی",
      model: "N-lITE 203 aIRlINKS",
      star: 4.3,
      price: 2400000,
      off: 30,
    },
    {
      id: 2,
      image: "/image/image/product/pic2.png",
      name: "استند چوبی آشپزخانه",
      model: "N-lITE 203 aIRlINKS",
      star: 4.3,
      price: 2400000,
      off: 30,
    },
    {
      id: 3,
      image: "/image/image/product/pic3.png",
      name: "مبل دو نفره سپنتا",
      model: "Sepanta-01-NDF",
      star: 4.3,
      price: 2400000,
      off: 30,
    },
  ];
  const category = [
    {
      id: 1,
      image: "/image/image/category/pic.png",
      category: "دکوراسیون",
    },
    {
      id: 2,
      image: "/image/image/category/pic2.png",
      category: "لوازم آشپزخانه",
    },
    {
      id: 3,
      image: "/image/image/category/pic3.png",
      category: "نور و روشنایی",
    },
    {
      id: 4,
      image: "/image/image/category/pic4.png",
      category: "لوازم برقی",
    },
  ];
  const popular = [
    {
      id: 1,
      image: "/image/image/product/pic.png",
      name: "قهوه ساز دلونگی",
      model: "N-lITE 203 aIRlINKS",
      star: 4.3,
      price: 2400000,
      off: 30,
    },
    {
      id: 2,
      image: "/image/image/product/pic2.png",
      name: "استند چوبی آشپزخانه",
      model: "N-lITE 203 aIRlINKS",
      star: 4.3,
      price: 2400000,
      off: 30,
    },
    {
      id: 3,
      image: "/image/image/product/pic3.png",
      name: "مبل دو نفره سپنتا",
      model: "Sepanta-01-NDF",
      star: 4.3,
      price: 2400000,
      off: 30,
    },
    {
      id: 4,
      image: "/image/image/product/pic4.png",
      name: "یخچال فریزر امرسان",
      model: "N-lITE 203 aIRlINKS",
      star: 4.3,
      price: 2400000,
      off: 30,
    },
  ];
  return (
    <>
      <Slider />
      <div className="flex flex-col gap-16 mx-auto w-full max-w-7xl px-4 sm:px-0">
        <div className="flex justify-between overflow-x-auto scroll-container gap-4 mt-10">
          <div className="bg-primary border-2 border-b-4 border-neutral-200 rounded-2xl shadow-xl shrink-0 h-56 w-48 sm:h-96 sm:w-2xs"></div>
          {product.map((productItem) => (
            <Card productItem={productItem} key={productItem.id} />
          ))}
        </div>
        <section
          className="flex flex-col gap-8"
          aria-labelledby="categories-heading"
        >
          <h2 id="categories-heading" className="self-center text-xl">
            دسته بندی محصولات
          </h2>
          <div
            className="grid grid-cols-2 gap-6 mx-auto sm:flex flex-wrap justify-between w-full"
            role="list"
          >
            {category.map((categoryItem) => (
              <div key={categoryItem.id} role="listitem">
                <CategoryCard categoryItem={categoryItem} />
              </div>
            ))}
          </div>
        </section>
        <Products
          title={"پرفروش ترین محصولات"}
          category={category}
          popular={popular}
        />
        <Products title={"محبوب ترین"} category={category} popular={popular} />
        <Products
          title={"محبوب ترین"}
          category={category}
          popular={popular}
          type="blog"
        />
      </div>
    </>
  );
};
export default Home;
