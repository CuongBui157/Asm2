import {
  getProducts,
  addProduct,
  editProduct,
  deleteProduct,
  getProductById,
} from "../action/product";
import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/product";

const initialState: {
  product: {
    message: string;
    data: IProduct[];
  };
  productById: {
    message: string;
    data: object;
  };
} = {
  product: {
    message: "",
    data: [],
  },
  productById: {
    message: "",
    data: {},
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetching
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    // fetching by id
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.productById = action.payload;
    });
    //adding
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.product.data.push(action.payload);
    });
    //updating
    builder.addCase(editProduct.fulfilled, (state, action) => {
      const newProduct = action.payload;
      state.product.data = state.product.data.map((item: IProduct) =>
        item._id === newProduct.id ? newProduct : item
      );
      console.log(newProduct);
    });
    //deleting
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const _id = action.payload;
      state.product.data = state.product.data.filter(
        (item: IProduct) => item._id !== _id
      );
    });
  },
});

export const productReducer = productSlice.reducer;
