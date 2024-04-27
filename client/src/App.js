import Home from "./routes/Home/Home.jsx";
import ListPage from "./routes/ListPage/ListPage.jsx";
import SinglePage from "./routes/SinglePage/SinglePage.jsx";
import Layout from "./routes/Layout/Layout.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },{
          path:"/list",
          element:<ListPage/>
        },{
          path:"/:id",
          element:<SinglePage/>
        }
      ]
    },
  ]);
  return (
   
  <RouterProvider router={router} />
  );
}

export default App;
