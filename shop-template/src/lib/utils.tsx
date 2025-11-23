import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | false | null)[]) {
  return twMerge(clsx(inputs));
}

export const toPersianNumber = (input: string | number): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let str = input?.toString();

  for (let i = 0; i < 10; i++) {
    str = str?.replace(new RegExp(englishDigits[i], "g"), persianDigits[i]);
  }

  return str;
};
