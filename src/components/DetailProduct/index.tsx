import { IProduct } from "../../interfaces/product";
import { Link } from "react-router-dom";

type DetailProps = {
  data: IProduct;
};

const DetailProduct = ({ data }: DetailProps) => {
  return (
    <>
      <Link
        className=" underline text-base"
        to={"#"}
        onClick={() => history.back()}>
        Back to previous page
      </Link>
      <div className="max-w-md mx-auto p-5 my-5 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl grid grid-cols-2">
        <img className="w-full object-cover" src={data.image} />
        <div className="px-3">
          <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
          <p className="text-red-500 text-lg">
            ${data.price}{" "}
            <span className=" text-gray-400 text-xs">${data.origin_price}</span>
          </p>
          <p className="text-gray-600">
            <strong>Brand: </strong> {data.brand}
          </p>
          <p className="text-gray-600">
            <strong>Mô tả: </strong>
            {data.description}
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
