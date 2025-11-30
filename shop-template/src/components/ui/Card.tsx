import { toPersianNumber } from "@/lib/utils";
import Icon from "./Icon";
import Image from "next/image";
import React from "react";

export interface ProductItem {
  id: number;
  image: string;
  name: string;
  model: string;
  star: number;
  price: number;
  off: number;
}

export interface BlogItem {
  id: number;
  image: string;
  title: String;
  subtitlte: string;
  date: string;
}

interface CardProps {
  productItem?: ProductItem;
  blogItem?: BlogItem;
  type?: string;
}

const Card: React.FC<CardProps> = ({ productItem, type, blogItem }) => {
  if (type === "blog" && blogItem) {
    return (
      <article className="flex flex-col justify-around border-2 border-b-4 border-neutral-200 rounded-2xl shadow-xl size-56 sm:h-96 sm:w-2xs">
        <div className="relative h-1/2 sm:h-2/3 w-full">
          <Image
            src={blogItem.image}
            alt={blogItem.title.toString()}
            fill
            className="object-cover rounded-t-2xl"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 bg-neutral-200 p-4">
          <h2 className="text-xs sm:text-sm">{blogItem.title}</h2>
          <h3 className="text-xs">{blogItem.subtitlte}</h3>
          <div className="flex justify-between items-center">
            <h4 className="text-sm">{toPersianNumber(blogItem.date)}</h4>
            <Icon name="arrow left-3" className="text-neutral-600" />
          </div>
        </div>
      </article>
    );
  }

  if (!productItem) return null;

  const discount = (productItem.price * productItem.off) / 100;
  const finalPrice = productItem.price - discount;
  return (
    <article className="flex flex-col justify-around p-4 bg-white border-2 border-b-4 border-neutral-200 rounded-2xl shadow-xl size-56 sm:h-96 sm:w-2xs">
      <div className="relative h-1/2 w-full">
        <Image
          src={productItem.image}
          alt={`تصویر محصول ${productItem.name} مدل ${productItem.model}`}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-1 justify-between sm:pt-4">
        <div className="flex justify-between items-center gap-4 sm-gap-0">
          <div className="flex flex-col flex-1 gap-1">
            <h3 className="text-sm sm:text-base whitespace-nowrap">
              {productItem.name}
            </h3>
            <h3 className="text-xs sm:text-sm whitespace-nowrap">
              {toPersianNumber(productItem.model)}
            </h3>
          </div>
          <div className="flex items-center gap-1 text-xs sm:text-sm">
            <h4>{toPersianNumber(productItem.star)}</h4>
            <Icon name="vector" className="text-warning-500" />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-xs sm:text-sm">
          <h4 className="self-end">
            {toPersianNumber(productItem.price.toLocaleString())}
          </h4>
          <div className="flex justify-between items-center">
            <div className="rounded-3xl bg-primary-500 text-white px-4 py-1">
              {toPersianNumber(productItem.off)}%
            </div>
            <h4>{toPersianNumber(finalPrice.toLocaleString())}</h4>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Card;
