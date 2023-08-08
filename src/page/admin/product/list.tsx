import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../store/hook";
import { useEffect } from "react";
import { deleteProduct, getProducts } from "../../../action/product";
import { IProduct } from "../../../interfaces/product";

const AdminProductList = () => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(product);
  return (
    <>
      <div className="flex justify-between py-3">
        <h3 className=" text-lg">Product List</h3>
        <Link className=" underline" to={"add"}>
          Add new product
        </Link>
      </div>
      <div className="shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-4 text-left font-medium text-gray-700">
                #
              </th>
              <th className="py-3 px-4 text-left font-medium text-gray-700">
                Name
              </th>
              <th className="py-3 px-4 text-left font-medium text-gray-700">
                Price
              </th>
              <th className="py-3 px-4 text-left font-medium text-gray-700">
                Image
              </th>
              <th className="py-3 px-4 text-left font-medium text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {product.data?.map((item: IProduct, index: number) => {
              return (
                <>
                  <tr className="border-b border-gray-200" key={item._id}>
                    <td className="py-3 px-4 text-gray-700">{index + 1}</td>
                    <td className="py-3 px-4 text-gray-700">{item.name}</td>
                    <td className="py-3 px-4 text-gray-700">${item.price}</td>
                    <td className="py-3 px-4 text-gray-700">
                      <img
                        className=" w-10 h-10 rounded"
                        src={item.image}
                        alt=""
                      />
                    </td>
                    <td className=" flex items-center gap-2">
                      <Link
                        className="hover:text-white"
                        to={`${item._id}/edit`}>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 mt-3 rounded">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          const result = window.confirm("Bạn có chắc là xóa ?");
                          if (result) {
                            dispatch(deleteProduct(item));
                          } else {
                            return;
                          }
                        }}
                        type="submit"
                        className="btn btn-remove bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 mt-3 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default AdminProductList;
