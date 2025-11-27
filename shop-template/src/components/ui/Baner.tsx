const Baner = () => {
  return (
    <section className="flex justify-center items-center w-full bg-black">
      <div className="flex flex-row flex-wrap justify-between items-center text-white w-full max-w-7xl px-3 md:px-0 py-2 text-xs sm:text-sm gap-2 sm:gap-0">
        <div className="flex gap-2 sm:gap-3 items-center">
          <span className="whitespace-nowrap">خرید بیش از یک میلیون تومان ارسال رایگان</span>
          <span className="text-neutral-400 hidden sm:inline">|</span>
          <span className="whitespace-nowrap">خدمات رایگان</span>
        </div>
        <div className="flex gap-2 sm:gap-3 items-center">
          <span className="whitespace-nowrap">%۵۰ تخفیف</span>
          <span className="text-neutral-400 hidden sm:inline">|</span>
          <span className="whitespace-nowrap">فروش بهاره</span>
        </div>
      </div>
    </section>
  );
};
export default Baner;
