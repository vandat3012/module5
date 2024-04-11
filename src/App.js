
import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import ProductApp from "./product/ProductApp";
import CreateProduct from "./product/CreateProduct";
import EditProduct from "./product/EditProduct";
import Information from "./product/Information";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <Routes>
        <Route path={""} element={<ProductApp/>}></Route>
        <Route path={"products/create"} element={<CreateProduct/>}></Route>
        <Route path={"products/edit/:id"} element={<EditProduct/>}></Route>
        <Route path={"products/:id"} element={<Information/>}></Route>
      </Routes>
    </>
  );
}

export default App;
