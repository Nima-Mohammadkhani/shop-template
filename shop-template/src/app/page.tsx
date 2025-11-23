import Slider from "@/components/slider";
import Card from "@/components/ui/Card";

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
  return (
    <section className="flex flex-col gap-16">
      <Slider />
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex justify-between w-full max-w-7xl">
          <div className="bg-primary border-2 border-b-4 border-neutral-200 rounded-2xl shadow-xl h-96 w-2xs"></div>
          {product.map((productItem) => (
            <Card productItem={productItem} key={productItem.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Home;
