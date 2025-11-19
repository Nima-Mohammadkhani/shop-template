const Baner = () => {
  return (
    <section className="flex justify-center items-center w-full bg-black">
      <div className="flex justify-between items-center text-white w-full max-w-7xl py-2 text-sm">
      <div className="flex gap-3 items-center">
        <span>خرید بیش از یک میلیون تومان ارسال رایگان</span>
        <span className="text-neutral-400">|</span>
        <span>خدمات رایگان</span>
      </div>
      <div className="flex gap-3 items-center">
        <span>%۵۰ تخفیف</span>
        <span className="text-neutral-400">|</span>
        <span>فروش بهاره</span>
      </div>
      </div>
    </section>
  );
};
export default Baner;
