import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { getProductById } from "../action/product";
import { useParams } from "react-router-dom";
import DetailProduct from "../components/DetailProduct";

const DetailProductPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { productById } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [id, dispatch]);

  return <DetailProduct data={productById.data} />;
};

export default DetailProductPage;
