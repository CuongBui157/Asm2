import { IProduct } from "../../interfaces/product";

type CardProps = {
  data: IProduct;
};

const Card = ({ data }: CardProps) => {
  return (
    <div key={data._id} className=" w-64 rounded-lg p-4 overflow-hidden shadow-lg">
      <img src={data.image} className="w-full rounded-md object-cover" />
      <div className="py-2 h-28">
        <div className="font-bold text-lg mb-1">
          {data.name}
        </div>
        <p className="text-red-500 text-base">
          ${data.price}
          <del className=" ml-1 text-xs text-gray-500">
            ${data.origin_price}
          </del>
        </p>
      </div>
    </div>
  );
};

export default Card;
