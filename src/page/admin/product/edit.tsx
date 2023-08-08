import { Link, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../../../interfaces/product";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { editProduct, getProductById } from "../../../action/product";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminProductEdit = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { productById } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [id, dispatch]);

  const { register, handleSubmit, reset } = useForm<IProduct>({
    defaultValues: productById.data,
  });
  const onSubmit: SubmitHandler<IProduct> = (data: IProduct) => {
    try {
      dispatch(editProduct(data));
      const result = window.confirm(
        "Đã sửa sản phẩm thành công, bạn có muốn quay lại trang product list?"
      );
      if (result) {
        navigate("../product");
      } else {
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex justify-between py-3">
        <h3 className=" text-lg">Update product</h3>
        <Link className=" underline" to={"../product"}>
          Back to List
        </Link>
      </div>
      <div className="max-w-xl mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="name">
              Name:
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="price">
              Price:
            </label>
            <input
              {...register("price")}
              type="number"
              id="price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="origin-price">
              Origin-price:
            </label>
            <input
              {...register("origin_price")}
              type="number"
              id="origin-price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="image">
              Image:
            </label>
            <input
              {...register("image")}
              type="text"
              id="image"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="description">
              Description:
            </label>
            <textarea
              {...register("description")}
              id="description"
              rows={3}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="brand">
              Brand:
            </label>
            <input
              {...register("brand")}
              type="text"
              id="brand"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminProductEdit;
