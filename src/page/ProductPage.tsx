import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { getProducts } from "../action/product";
import { IProduct } from "../interfaces/product";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.product);

  React.useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(product);

  return (
    <>
      <h1 className=" p-6 text-2xl font-bold">Product List</h1>
      <div className=" grid grid-cols-5 gap-4">
        {product.data?.map((item: IProduct) => {
          return (
            <>
              <Link to={`${item._id}/detailproduct`}>
                <Card data={item} />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductPage;
