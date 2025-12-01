import Slider from "@/components/slider";
import Card from "@/components/ui/Card";
import CategoryCard from "@/components/ui/CategoryCard";
import Products from "@/components/Products";
import Image from "next/image";
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
  const blog = [
    {
      id: 1,
      image: "/image/blog/1.png",
      title: "چه رنگهایی در اتاق خواب کاربرد دارد؟",
      date: "9 آذر 1404",
      subtitlte: "میزان نور طبیعی و تأثیری که رنگ‌ها بر روحیه دارند دارد",
    },
    {
      id: 2,
      image: "/image/blog/2.png",
      title: "چه رنگهایی در اتاق خواب کاربرد دارد؟",
      date: "9 آذر 1404",
      subtitlte: "میزان نور طبیعی و تأثیری که رنگ‌ها بر روحیه دارند دارد",
    },
    {
      id: 3,
      image: "/image/blog/3.png",
      title: "چه رنگهایی در اتاق خواب کاربرد دارد؟",
      date: "9 آذر 1404",
      subtitlte: "میزان نور طبیعی و تأثیری که رنگ‌ها بر روحیه دارند دارد",
    },
    {
      id: 4,
      image: "/image/blog/4.png",
      title: "چه رنگهایی در اتاق خواب کاربرد دارد؟",
      date: "9 آذر 1404",
      subtitlte: "میزان نور طبیعی و تأثیری که رنگ‌ها بر روحیه دارند دارد",
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
        <div className="-m-4 sm:m-0">
          <Image
            src={"/image/banner/banner.png"}
            width={1224}
            height={252}
            alt="کاملترین کالکشن ابزار آشپزخانه"
            className="mx-auto"
          />
        </div>
        <Products
          title={"پرفروش ترین محصولات"}
          category={category}
          data={popular}
        />
        <div className="flex flex-wrap justify-between gap-4">
          <Image
            src={"/image/banner/banner2.png"}
            width={600}
            height={346}
            alt="خریــــد اعتباری!"
          />
          <Image
            src={"/image/banner/banner3.png"}
            width={600}
            height={346}
            alt="خریــــد اعتباری!"
          />
        </div>
        <Products title={"محبوب ترین"} category={category} data={popular} />
        <div className="-m-4 sm:m-0">
          <Image
            src={"/image/banner/banner4.png"}
            width={1224}
            height={252}
            alt="کاملترین کالکشن وسایل چوبی"
            className="w-full"
          />
        </div>

        <Products
          title={"خواندنی ها"}
          category={category}
          data={blog}
          type="blog"
        />
      </div>
    </>
  );
};
export default Home;
