import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/pages/ItemDetailContainer";

const Navigation = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <ItemListContainer />,
    },

    {
      path: "/product/:idProduct",
      element: <ItemListContainer />,
    },
    {
      path: "/item/:id",
      element: <ItemDetailContainer />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Navigation;
