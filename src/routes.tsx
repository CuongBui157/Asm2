import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import Dashboard from "./page/admin/dashboard";
import AdminProductList from "./page/admin/product/list";
import AdminProductAdd from "./page/admin/product/add";
import AdminProductEdit from "./page/admin/product/edit";

export const router = createBrowserRouter([
  { path: "/", element: <LayoutWebsite /> },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      { index: true, element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "product", element: <AdminProductList /> },
      { path: "product/add", element: <AdminProductAdd /> },
      { path: "product/edit", element: <AdminProductEdit /> },
    ],
  },
  { path: "*", element: "Not Found Page" },
]);
