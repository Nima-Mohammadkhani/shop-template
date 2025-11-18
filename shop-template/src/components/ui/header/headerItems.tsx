import Icon from "../Icon";

type HeaderItemsProps = {
  isMobile?: boolean;
  onItemClick?: () => void;
};

const HeaderItems = ({ isMobile = false, onItemClick }: HeaderItemsProps) => {
  const headerItems = [
    { id: 1, name: "شگفت انگیز ها", link: "/", icon: "stars-light-sparkle-1" },
    { id: 2, name: "ترند ترین ها", link: "/", icon: "star" },
    { id: 3, name: "پرفروش ترین ها", link: "/", icon: "cup" },
    { id: 4, name: "محبوب ترین ها", link: "/", icon: "Heart" },
    { id: 5, name: "سوالات شما", link: "/", icon: "question-cross-circle" },
  ];

  if (isMobile) {
    return (
      <div className="flex flex-col gap-1">
        {headerItems.map((item) => (
          <a
            key={item.id}
            href={item.link}
            onClick={onItemClick}
            className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-50 rounded-lg transition-colors"
          >
            {item.icon && <Icon name={item.icon} size={20} />}
            <span className="text-sm">{item.name}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-8 w-full max-w-7xl py-4">
      {headerItems.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
        >
          {item.icon && <Icon name={item.icon} />}
          <h3>{item.name}</h3>
        </a>
      ))}
    </div>
  );
};

export default HeaderItems;
