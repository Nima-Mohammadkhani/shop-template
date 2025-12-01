import Image from "next/image";
import Icon from "./Icon";
import ScrollToTop from "./ScrollToTop";

const socialLinks = [
  {
    name: "Linkedin",
    icon: "Linkedin",
    label: "لینکدین",
    href: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: "Twitter",
    label: "توییتر",
    href: "https://twitter.com",
  },
  {
    name: "Instagram",
    icon: "Instagram",
    label: "اینستاگرام",
    href: "https://instagram.com",
  },
  {
    name: "Youtube",
    icon: "youtoube",
    label: "یوتیوب",
    href: "https://youtube.com",
  },
];

const customerServicesLinks = [
  { text: "پیگیری سفارش", href: "/order-tracking" },
  { text: "شرایط و قوانین", href: "/terms" },
  { text: "روش های ارسال", href: "/shipping" },
  { text: "سوالات متداول", href: "/faq" },
];

const productsLinks = [
  { text: "مبلمان", href: "/products/furniture" },
  { text: "دکوراسیون", href: "/products/decoration" },
  { text: "لوازم آشپزخانه", href: "/products/kitchen" },
  { text: "ابزار خانه", href: "/products/tools" },
  { text: "سرویس خواب", href: "/products/bedroom" },
];

const aboutUsLinks = [
  { text: "معرفی فروشگاه", href: "/about" },
  { text: "تماس با ما", href: "/contact" },
  { text: "همکاری با ما", href: "/cooperation" },
  { text: "وبلاگ", href: "/blog" },
];

const featureBoxes = [
  {
    icon: "truck",
    title: "ارسال سریع",
    description: "در کمترین زمان ممکن",
  },
  {
    icon: "checkmark",
    title: "ضمانت کیفیت",
    description: "محصولات با کیفیت و اصیل",
  },
  {
    icon: "box",
    title: "بسته بندی مناسب",
    description: "محافظت از محصولات شما",
  },
];

const partnerLogos = [
  { src: "/image/logo/1.png", alt: "شریک تجاری ۱" },
  { src: "/image/logo/2.png", alt: "شریک تجاری ۲" },
  { src: "/image/logo/3.png", alt: "شریک تجاری ۳" },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-100 w-full" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-8 mb-8">
          <div className="space-y-4 w-full lg:max-w-lg">
            <div className="mb-4">
              <Image
                src="/image/logo/logo.png"
                alt="زی هوم - فروشگاه آنلاین محصولات خانه"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </div>

            <h2 className="text-lg text-neutral-900 mb-3">
              درباره زی هوم
            </h2>

            <p className="text-sm text-neutral-600 leading-relaxed mb-3">
              فروشگاه ما با ارایه مجموعه ای متنوع از محصولات خانه تجربه ای آسان
              و مطمئن برای خرید آنلاین فراهم کرده است. با ضمانت کیفیت، ارسال
              سریع و پشتیبانی حرفه ای، همراه شما هستیم.
            </p>

            <a
              href="/about"
              className="text-sm text-neutral-700 hover:text-primary transition-colors inline-block mb-4"
              aria-label="مشاهده بیشتر درباره زی هوم"
            >
              مشاهده بیشتر...
            </a>

            <div className="space-y-3 pt-2">
              <p className="text-sm text-neutral-700">
                تلفن پشتیبانی:{" "}
                <a
                  href="tel:+982144349867"
                  className="text-neutral-900 hover:text-primary transition-colors"
                  aria-label="تماس با پشتیبانی"
                >
                  ۴۴۳۴۹۸۶۷-۰۲۱
                </a>
              </p>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <span className="text-sm text-neutral-700">همراه ما باشید</span>
                <nav aria-label="شبکه های اجتماعی">
                  <div className="flex gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 border border-neutral-300 rounded-lg bg-neutral-50 flex items-center justify-center hover:border-primary hover:bg-white transition-colors"
                        aria-label={social.label}
                      >
                        <Icon
                          name={social.icon}
                          size={18}
                          className="text-neutral-700"
                        />
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <nav className="space-y-3 w-full sm:w-auto" aria-label="خدمات مشتریان">
            <h3 className="text-lg font-bold text-neutral-900">
              خدمات مشتریان
            </h3>
            <ul className="space-y-2.5">
              {customerServicesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-primary transition-colors block"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="space-y-3 w-full sm:w-auto" aria-label="محصولات">
            <h3 className="text-lg font-bold text-neutral-900">محصولات</h3>
            <ul className="space-y-2.5">
              {productsLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-primary transition-colors block"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="space-y-3 w-full sm:w-auto" aria-label="درباره ما">
            <h3 className="text-lg font-bold text-neutral-900">
              درباره ما
            </h3>
            <ul className="space-y-2.5">
              {aboutUsLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-primary transition-colors block"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="h-px bg-neutral-300 mb-6"></div>

        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-6 w-full">
          <div className="flex flex-wrap justify-center lg:justify-around items-center flex-1 bg-white rounded-2xl p-4 gap-4">
            {featureBoxes.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2">
                    <Icon name={feature.icon} />
                    <span className="text-sm font-medium">{feature.title}</span>
                  </div>
                  <p className="text-xs text-neutral-600 mt-1">
                    {feature.description}
                  </p>
                </div>
                {index < featureBoxes.length - 1 && (
                  <div className="hidden lg:block h-px w-20 xl:w-40 border-t-2 border-neutral-500 border-dashed" />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between lg:justify-around gap-4 lg:mr-4 flex-wrap">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={60}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto bg-black w-full p-2 sm:p-4 text-sm text-white">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center sm:text-right">
            کلیه حقوق این سایت متعلق به شرکت آریا گستر ( فروشگاه زی هوم) می
            باشد.
          </p>
          <p className="text-center sm:text-left">
            Zihome.com.2025 @ copyright
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
