import Icon from "../Icon";

type CategoryDetailsProps = {
  category?: string;
};

const detailsByCategory: Record<string, { title: string; links: string[] }> = {
  مبلمان: {
    title: "مبلمان",
    links: ["مبل راحتی", "مبل اداری", "صندلی نهارخوری", "میز جلو مبلی"],
  },
  "دکوراسون داخلی": {
    title: "دکوراسیون داخلی",
    links: ["پرده", "کاغذ دیواری", "تابلو", "آینه"],
  },
  "لوازم آشپزخانه": {
    title: "لوازم آشپزخانه",
    links: ["قابلمه", "فرفره آشپزی", "ظروف", "سرو پذیرایی"],
  },
  "سرویس خواب و حمام": {
    title: "سرویس خواب و حمام",
    links: ["روتختی", "بالش", "حوله", "پادری"],
  },
  "نور پردازی و روشنایی": {
    title: "روشنایی",
    links: ["لوستر", "آباژور", "چراغ دیواری", "ریسه"],
  },
  "لوازم سازماندهی": {
    title: "سازماندهی",
    links: ["نظم دهنده کمد", "باکس", "جاکفشی", "جاکلیدی"],
  },
  "ابزار و تجهیزات خانه": {
    title: "ابزار و تجهیزات خانه",
    links: ["جعبه ابزار", "دریل", "پیچ گوشتی", "نردبان"],
  },
  "فضای باز و باغچه": {
    title: "فضای باز و باغچه",
    links: ["مبلمان باغی", "گلدان", "اب پاش", "چمن مصنوعی"],
  },
  خدمات: {
    title: "خدمات",
    links: ["نصب پرده", "نصب لوستر", "سرویس نظافت", "تعمیرات"],
  },
  "محصولات ویژه": {
    title: "محصولات ویژه",
    links: ["تخفیف دار", "جدیدترین", "پرفروش", "پیشنهادی"],
  },
};

const CategoryDetails = ({ category }: CategoryDetailsProps) => {
  const data = category ? detailsByCategory[category] : undefined;
  return (
    <section className="w-full">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h4 className="font-bold text-primary">
            {data ? data.title : "دسته بندی ها"}
          </h4>
          <Icon name="arrow left" size={30} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
          {(
            data?.links ?? [
              "منتخب مبلمان",
              "منتخب روشنایی",
              "منتخب آشپزخانه",
              "منتخب دکوراسیون",
            ]
          ).map((label, idx) => (
            <a
              key={idx}
              href="#"
              className="text-sm text-neutral-600 hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryDetails;
