import { useEffect } from "react";
import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { getProducts } from "../action/product";
import { IProduct } from "../interfaces/product";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div>
        <img
          className="mx-auto"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-5TOf9d3nCRsAi4fTqjrfuWn6RkvxZI6MK2JJ0nQmRtm91nS3caI-fHTM-_ts25Le5oQG7GeyN0KHgSm2jE4twTqcebDnys27bTjbnZDZExc8JvyiYFJddw3977JxbbjIC6UfMQzmDL7ZZkWRxEWdqzFkJt5W3Z-4KNPO2WWWQi6RuHxyE3L3GltL/s1383/Thiet%20ke%20Anh%20bia%20banner%20shop%20gia%20re(3).jpg"
        />
      </div>
      <div className=" p-6">
        <h1 className=" mb-4 text-2xl font-bold">Sản phẩm mới</h1>
        <div className="grid grid-cols-5 gap-4">
          {product.data?.slice(0, 5).map((item: IProduct) => {
            return (
              <>
                <Link to={`product/${item._id}/detailproduct`}>
                  <Card data={item} />
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
