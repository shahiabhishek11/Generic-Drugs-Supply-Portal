import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import GenericHome from './components/Home/GenericHome';
import Login from './components/login/Login';
import RegisterForm from './components/registration/register';
import CustomerHome from './components/customer/CustomerHome';
import ProductInsert from './components/Admin/Admin';
import AddCompany from './components/Admin/AddCompany';
import DeleteUpdateProduct from './components/Admin/DeleteUpdateProduct';
import AddUnit from './components/Admin/AddUnit';

import ViewCart from './components/customer/ViewCart';
import Home from './components/Admin/Home';
import ShopperDashboard from './components/shopper/ShopperDashboard';
import ShipperDashboard from './components/shipper/ShipperDashboard';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<GenericHome/>}/>
          <Route exact path="/ViewCart" element={<ViewCart></ViewCart>}/>
          <Route exact path="/customerhome" element={<CustomerHome/>}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<RegisterForm />}/>
          <Route exact path="/adminhome" element={<Home/>}/>
          <Route exact path="/shopper" element={<ShopperDashboard/>}/>
          <Route exact path="/shipper" element={<ShipperDashboard/>}/>
          <Route exact path="/product" element={<ProductInsert/>}/>
          <Route exact path="/company" element={<AddCompany/>}/>
          <Route exact path="/updateProduct" element={<DeleteUpdateProduct/>}/>
          
          <Route exact path="/unit" element={<AddUnit/>}/>
          
          <Route path="*" element={<div>404</div>}/>
         
        </Routes>
    </Router>
  );
}

export default App;
