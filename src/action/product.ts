import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../interfaces/product";

export const getProducts = createAsyncThunk("product/getAll", async () => {
  try {
    const { data } = await axios.get(`http://localhost:8000/product`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getProductById = createAsyncThunk(
  "product/getById",
  async (id: string) => {
    try {
      const { data } = await axios.get(`http://localhost:8000/product/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/add",
  async (product: IProduct) => {
    try {
      const { data } = await axios.post(
        `http://localhost:8000/product`,
        product
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editProduct = createAsyncThunk(
  "product/edit",
  async (product: IProduct) => {
    try {
      const productCopy = { ...product };
      delete productCopy._id;
      const { data } = await axios.put(
        `http://localhost:8000/product/${product._id}`,
        productCopy
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (product: IProduct) => {
    try {
      await axios.delete(`http://localhost:8000/product/${product._id}`);
      return product._id;
    } catch (error) {
      console.log(error);
    }
  }
);
