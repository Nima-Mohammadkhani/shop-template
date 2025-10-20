import Icon from "../Icon";
import ProductCategoryButton from "./productCategoryButton";

const Header = () => {
  const headerItems = [
    { id: 1, name: "شگفت انگیز ها", link: "/", icon: "stars-light-sparkle-1" },
    { id: 2, name: "ترند ترین ها", link: "/", icon: "star" },
    { id: 3, name: "پرفروش ترین ها", link: "/", icon: "cup" },
    { id: 4, name: "محبوب ترین ها", link: "/", icon: "Heart" },
    { id: 5, name: "سوالات شما", link: "/" },
  ];
  return (
    <section className="flex justify-center items-center gap-8 bg-white w-full sticky top-0 z-50">
      <ProductCategoryButton />
      <div className="h-6 w-px bg-neutral-500" />
      <div className="flex gap-8 w-full max-w-7xl py-4">
        {headerItems.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            {item.icon && <Icon name={item.icon} />}
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Header;
