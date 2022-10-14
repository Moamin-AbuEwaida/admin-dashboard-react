import './app.css'
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from './pages/home/Home';
import NewUser from './pages/newUser/NewUser';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path='' element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productsId" element={<Product />} />
          {/* <Route path="/newproduct" element={<NewProducts />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
