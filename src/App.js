//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

  
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
  

//core
import "primereact/resources/primereact.css";

//icons
import "primeicons/primeicons.css";                    

import 'primeflex/primeflex.css';
                             
import './App.css';

import '../src/primestylings.css';


import Landing_page from './landing_page';
import Login from './login';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Switch from "react-router-dom";
import {UserAuthContextProvider} from "./context/UserAuthContext";
import Home from './home';
import ProtectedRoute from './components/protected';
import { UseUserAuth } from './context/UserAuthContext';
//import Men_products from './menproducts';
//import Women_products from './womenproducts';
//import Routes_men_products from "./menproducts";
import Men_products from './menproducts';
import { ProductDisplay } from './menproducts';
import { MenProductDetails } from './menproducts';
//import Routes_women_products from './womenproducts';
import Women_products from './womenproducts.js';
import { ProductDisplayWomen } from './womenproducts.js';
import Cart_screen from './cart_screen';
import Billing_protected_route from './components/billing_protected_route';
import Billing_screen from './admin_cart';
import BasicDemo from './components/products';
import ProductScreen from './productScreen';
//import { Bill_screen } from './cart_screen';
//import {Men_products} from './menproducts';





function App() {
  return (
    <Router>
      <UserAuthContextProvider>
      <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Landing_page/>}/>
            <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path="/cart" element={<ProtectedRoute><Cart_screen/></ProtectedRoute>}/>
            <Route path="/billing" element={<Billing_protected_route><Billing_screen/></Billing_protected_route>}/>
            <Route exact path="/men" element={<Men_products/>}/>
            <Route exact path="/men/:id" element={<ProductDisplay/>}/>
            <Route exact path="/product/:id" element={<ProductScreen/>} />
            <Route exact path="/women" element={<Women_products/>}/>
            <Route exact path="/women/:id" element={<ProductDisplayWomen/>} />
      </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
