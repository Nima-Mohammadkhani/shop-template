import Icon from "../Icon";

const HeaderItems = () => {
  const headerItems = [
    { id: 1, name: "شگفت انگیز ها", link: "/", icon: "stars-light-sparkle-1" },
    { id: 2, name: "ترند ترین ها", link: "/", icon: "star" },
    { id: 3, name: "پرفروش ترین ها", link: "/", icon: "cup" },
    { id: 4, name: "محبوب ترین ها", link: "/", icon: "Heart" },
    { id: 5, name: "سوالات شما", link: "/" },
  ];

  return (
    <div className="flex gap-8 w-full max-w-7xl py-4">
      {headerItems.map((item) => (
        <div key={item.id} className="flex items-center gap-2 cursor-pointer">
          {item.icon && <Icon name={item.icon} />}
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default HeaderItems;
