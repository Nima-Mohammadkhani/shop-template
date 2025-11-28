import { toPersianNumber } from "@/lib/utils";
import Icon from "./Icon";

export interface ProductItem {
  id: number;
  image: string;
  name: string;
  model: string;
  star: number;
  price: number;
  off: number;
}

interface CardProps {
  productItem: ProductItem;
}

const Card: React.FC<CardProps> = ({ productItem }) => {
  const discount = (productItem.price * productItem.off) / 100;
  const finalPrice = productItem.price - discount;
  return (
    <section className="flex flex-col justify-around p-4 bg-white border-2 border-b-4 border-neutral-200 rounded-2xl shadow-xl size-56 sm:h-96 sm:w-2xs">
      <img src={productItem.image} alt="" className="h-1/2 object-cover" />
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
            <Icon name="vector" color="warning-500"/>
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
    </section>
  );
};
export default Card;
