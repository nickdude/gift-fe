import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from 'react-router-dom';
import SideBar from "./Components/SideBar/SideBar";
import AdminDashboard from "./Pages/AdminPages/AdminDashboard/AdminDashboard";
import AdminLogin from "./Pages/AdminPages/AdminLogin/AdminLogin";
import AdminProducts from "./Pages/AdminPages/AdminProducts/AdminProducts";
import AdminAddProduct from "./Pages/AdminPages/AdminAddProduct/AdminAddProduct";
import AdminEditProduct from "./Pages/AdminPages/AdminEditProduct/AdminEditProduct";
import AdminCategories from "./Pages/AdminPages/AdminCategories/AdminCategories";
import AdminBrands from "./Pages/AdminPages/AdminBrands/AdminBrands";
import AdminCompanies from "./Pages/AdminPages/AdminCompanies/AdminCompanies";
import AdminOrders from "./Pages/AdminPages/AdminOrders/AdminOrders";
import AdminAddCompanies from "./Pages/AdminPages/AdminAddCompanies/AdminAddCompanies";
import AdminEditCompanies from "./Pages/AdminPages/AdminEditCompanies/AdminEditCompanies";
import AdminAddCategories from "./Pages/AdminPages/AdminAddCategories/AdminAddCategories";
import AdminEditCategories from "./Pages/AdminPages/AdminEditCategories/AdminEditCategories";
import AdminEditBrands from "./Pages/AdminPages/AdminEditBrands/AdminEditBrands";
import AdminAddBrands from "./Pages/AdminPages/AdminAddBrands/AdminAddBrands";
import AdminLogout from "./Pages/AdminPages/AdminLogout/AdminLogout";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import B2BHomePage from "./Pages/B2B/B2BHomePage/B2BHomePage";
import Nav from "./Components/Nav/Nav";
import Footer from './Components/Footer/Footer'
import B2BProductPage from "./Pages/B2B/B2BProductPage/B2BProductPage";
import B2BQuoteListPage from "./Pages/B2B/B2BQuoteListPage/B2BQuoteListPage";
import B2BContactUsPage from "./Pages/B2B/B2BContactUsPage/B2BContactUsPage";
import B2CHomePage from "./Pages/B2C/B2CHomePage/B2CHomePage";
import B2CProductPage from "./Pages/B2C/B2CProductPage/B2CProductPage";
import B2CCartPage from "./Pages/B2C/B2CCartPage/B2CCartPage";
import B2CShipping from "./Pages/B2C/B2CShipping/B2CShipping";
import B2EHomePage from "./Pages/B2E/B2EHomePage/B2EHomePage";
import B2EProductPage from "./Pages/B2E/B2EProductPage/B2EProductPage";
import B2ECartPage from "./Pages/B2E/B2ECartPage/B2ECartPage";
import B2EShipping from "./Pages/B2E/B2EShipping/B2EShipping";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";


const checkPathMatch = (paths, pathname) => {
  return paths.some(path => matchPath(path, pathname));
};

const App = () => {

  const location = useLocation();
  const showSidebar = checkPathMatch(['/admin-dashboard', '/products', '/add-product', '/edit-product/:id', '/companies', '/add-companies', '/edit-companies/:id', '/categories', '/add-categories', '/edit-categories/:id', '/brands', '/add-brand', '/edit-brand/:id', '/orders'], location.pathname);
  const showNavB2B = checkPathMatch(['/b2b-home-page', '/b2b-product-page/:id', '/b2b-qoute-page', '/b2b-contact-us-page'], location.pathname);
  const showNavB2C = checkPathMatch(['/','/b2c-product-page/:id','/b2c-cart-page','/b2c-shipping'], location.pathname);
  const showNavB2E = checkPathMatch(['/b2e-home-page','/b2e-product-page/:id','/b2e-cart-page','/b2e-shipping'], location.pathname)
  const hideDiv = checkPathMatch(['/register','/login'],location.pathname)
  return (
    <>

      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {showNavB2B && <Nav/>}
      <Routes>
          <Route path='/b2b-home-page' element={<B2BHomePage />} />
          <Route path='/b2b-product-page/:id' element={<B2BProductPage />} />
          <Route path='/b2b-qoute-page' element={<B2BQuoteListPage />} />
          <Route path='/b2b-contact-us-page' element={<B2BContactUsPage />} />
      </Routes>
      {showNavB2B && <Footer/>}

      {showNavB2C && <Nav color='blue'/>}
      <Routes>
          {/* <Route path='/b2c-home-page' element={<B2CHomePage />} /> */}
          <Route path='/' element={<B2CHomePage />} />
          <Route path='/b2c-product-page/:id' element={<B2CProductPage />} />
          <Route path='/b2c-cart-page' element={<B2CCartPage />} />
          <Route path='/b2c-shipping' element={<B2CShipping />} />
      </Routes>
      {showNavB2C && <Footer/>}

      {showNavB2E && <Nav color='blue'/>}
      <Routes>
          <Route path='/b2e-home-page' element={<B2EHomePage />} />
          <Route path='/b2e-product-page/:id' element={<B2EProductPage />} />
          <Route path='/b2e-cart-page' element={<B2ECartPage />} />
          <Route path='/b2e-shipping' element={<B2EShipping />} />
      </Routes>
      {showNavB2E && <Footer/>}

     
    { !showNavB2B && !showNavB2C && !showNavB2E && !hideDiv &&
    <div className="admin-main-container">
        {showSidebar && <SideBar />}
        <Routes>
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/admin-logout' element={<AdminLogout />} />
          <Route path='/admin-dashboard' element={<PrivateRoute element={AdminDashboard} />} />
          <Route path='/products' element={<PrivateRoute element={AdminProducts} />} />
          <Route path='/add-product' element={<PrivateRoute element={AdminAddProduct} />} />
          <Route path='/edit-product/:id' element={<PrivateRoute element={AdminEditProduct} />} />
          <Route path='/companies' element={<PrivateRoute element={AdminCompanies} />} />
          <Route path='/add-companies' element={<PrivateRoute element={AdminAddCompanies} />} />
          <Route path='/edit-companies/:id' element={<PrivateRoute element={AdminEditCompanies} />} />
          <Route path='/categories' element={<PrivateRoute element={AdminCategories} />} />
          <Route path='/add-categories' element={<PrivateRoute element={AdminAddCategories} />} />
          <Route path='/edit-categories/:id' element={<PrivateRoute element={AdminEditCategories} />} />
          <Route path='/brands' element={<PrivateRoute element={AdminBrands} />} />
          <Route path='/add-brand' element={<PrivateRoute element={AdminAddBrands} />} />
          <Route path='/edit-brand/:id' element={<PrivateRoute element={AdminEditBrands} />} />
          <Route path='/orders' element={<PrivateRoute element={AdminOrders} />} />
        </Routes>
      </div>}
    </>

  );
};

export default App;



// import React from "react";
// import './App.css'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import SideBar from "./Components/SideBar/SideBar";
// import AdminDashboard from "./Pages/AdminPages/AdminDashboard/AdminDashboard";
// import AdminLogin from "./Pages/AdminPages/AdminLogin/AdminLogin";
// import AdminProducts from "./Pages/AdminPages/AdminProducts/AdminProducts";
// import AdminAddProduct from "./Pages/AdminPages/AdminAddProduct/AdminAddProduct";
// import AdminEditProduct from "./Pages/AdminPages/AdminEditProduct/AdminEditProduct";
// import AdminCategories from "./Pages/AdminPages/AdminCategories/AdminCategories";
// import AdminBrands from "./Pages/AdminPages/AdminBrands/AdminBrands";
// import AdminCompanies from "./Pages/AdminPages/AdminCompanies/AdminCompanies";
// import AdminOrders from "./Pages/AdminPages/AdminOrders/AdminOrders";
// import AdminAddCompanies from "./Pages/AdminPages/AdminAddCompanies/AdminAddCompanies";
// import AdminEditCompanies from "./Pages/AdminPages/AdminEditCompanies/AdminEditCompanies";
// import AdminAddCategories from "./Pages/AdminPages/AdminAddCategories/AdminAddCategories";
// import AdminEditCategories from "./Pages/AdminPages/AdminEditCategories/AdminEditCategories";
// import AdminEditBrands from "./Pages/AdminPages/AdminEditBrands/AdminEditBrands";
// import AdminAddBrands from "./Pages/AdminPages/AdminAddBrands/AdminAddBrands";
// import AdminLogout from "./Pages/AdminPages/AdminLogout/AdminLogout";

// function App() {
//   const adminLinks = [
//     { to: "/dashboard", text: "Dasboard" },
//     { to: "/categories", text: "Categories" },
//     { to: "/brands", text: "Brands" },
//     { to: "/products", text: "Products" },
//     { to: "/companies", text: "Companies" }
//   ]

// const contacts = [
//     { to: "/time", text: "10:00 - 07:00", iconClass: "fas fa-clock space" },
//     { to: "/contact", text: "+91 9920334444", iconClass: "fas fa-phone space" },
//     { to: "/mail", text: "Mail", iconClass: "fas fa-envelope space" }
// ];
//   return (
//    <>
  
//      <Router>
//       <div className="admin-main-container">
//        <SideBar/>
//         <Routes>
//             <Route path='/' element={<AdminLogin/>}/> 
//             <Route path='/logout' element={<AdminLogout/>}/> 
//             <Route path='/dashboard' element={<AdminDashboard/>}/> 

//             <Route path='/products' element={<AdminProducts/>}/> 
//             <Route path='/add-product' element={<AdminAddProduct/>}/> 
//             <Route path='/edit-product' element={<AdminEditProduct/>}/> 

//             <Route path='/companies' element={<AdminCompanies/>}/> 
//             <Route path='/add-companies' element={<AdminAddCompanies/>}/> 
//             <Route path='/edit-companies/:id' element={<AdminEditCompanies/>}/> 

//             <Route path='/categories' element={<AdminCategories/>}/> 
//             <Route path='/add-categories' element={<AdminAddCategories/>}/> 
//             <Route path='/edit-categories/:id' element={<AdminEditCategories/>}/> 

//             <Route path='/brands' element={<AdminBrands/>}/>
//             <Route path='/add-brand' element={<AdminAddBrands/>}/>
//             <Route path='/edit-brand/:id' element={<AdminEditBrands/>}/>

//             <Route path='/orders' element={<AdminOrders/>}/> 
            

//         </Routes>
//       </div>
//       {/* <SideBar/> */}
//         {/* <Routes> */}
//         {/* <Route path='/' element={<AdminLogin/>}/> 
//         <Route path='/dashboard' element={<AdminDashboard/>}/>  */}


//           {/* <Route path='/' element={<AdminLogin/>}/> */}
//           {/* <Route path='/admin-dashboard' 
//               element={<>
//                         <Nav color='blue' links={adminLinks} contacts={contacts}/>
//                         <AdminDashboard/>
//                        </>}/>


//           <Route path='/categories' 
//               element={<>
//                         <Nav color='blue' links={adminLinks} contacts={contacts}/>
//                         <Categories/>
//                        </>}/>
//           <Route path='/create-category' 
//               element={<>
//                         <Nav color='blue' links={adminLinks} contacts={contacts}/>
//                         <CreateCategories/>
//                        </>}/>
//           <Route path='/edit-category/:id' 
//               element={<>
//                         <Nav color='blue' links={adminLinks} contacts={contacts}/>
//                         <EditCategories/>
//                        </>}/>

          
//           <Route path='/brands' 
//               element={<>
//                         <Nav color='blue' links={adminLinks} contacts={contacts}/>
//                         <Brands/>
//                        </>}/>
//           <Route path='/create-brand' 
//               element={<>
//                         <Nav color='blue' links={adminLinks} contacts={contacts}/>
//                         <CreateBrand/>
//                        </>}/>
//           <Route path='/edit-brand/:id' 
//               element={<>
//                         <Nav color='blue' links={adminLinks} contacts={contacts}/>
//                         <EditBrand/>
//                        </>}/>

          
//           <Route path='/products' 
//               element={<>
//                         <Nav color='blue' links={adminLinks} contacts={contacts}/>
//                         <Products/>
//                        </>}/>
//           <Route path='/create-product' 
//               element={<>
//                         <Nav color='blue' links={adminLinks} contacts={contacts}/>
//                         <CreateProduct/>
//                        </>}/>
//           <Route path='/edit-product/:id' 
//               element={<>
//                         <Nav color='blue' links={adminLinks} contacts={contacts}/>
//                         <EditProduct/>
//                        </>}/>
                    
//           <Route path='/companies' 
//               element={<>
//                         <Nav color='blue' links={adminLinks} contacts={contacts}/>
//                         <Companies/>
//                        </>}/>
//           <Route path='/create-company' 
//               element={<>
//                         <Nav color='blue' links={adminLinks} contacts={contacts}/>
//                         <CreateCompany/>
//                        </>}/>
//           <Route path='/edit-company/:id' 
//               element={<>
//                         <Nav color='blue' links={adminLinks} contacts={contacts}/>
//                         <EditCompany/>
//                        </>}/> */}


//           {/* <Route path='/admin-login' element={<AdminLogin/>}/> */}
//           {/* <Route element={<Nav color='blue' links={adminLinks} contacts={contacts}/>}> */}
//             {/* <Route path='/admin-dashboard' element={<AdminDashboard />} />
//             <Route path='/register-user' element={<RegisterUser />} />
//             <Route path='/bb-product-page' element={<BBProductPage />} /> */}
//           {/* </Route> */}


//           {/* <Route path='/' element={<BBHomePage/>}/>
//           <Route path='/product-page' element={<BBProductPage/>}/>
//           <Route path='/quote-list-page' element={<BBQuoteListPage/>}/>
//           <Route path='/product-range-page' element={<BBProductRangePage/>}/>
//           <Route path='/contact-us-page' element={<BBContactUsPage/>}/>

//           <Route path='/sign-in' element={<BERegister/>}/>
//           <Route path='/log-in' element={<BELoginPage/>}/>
//           <Route path='/shipping' element={<BEShippingPage/>}/>
//           <Route path='/ ' element={<YourCart/>}/>
//           <Route path='/qoute-list' element={<BBQuoteListPage/>}/>
//           <Route path='/get-in-touch' element={<GetInTouch/>}/>
//           <Route path='/product-detail' element={<ProductPage/>}/>
//           <Route path='/b-product-detail' element={<BBProductPage/>}/>
//           <Route path='/b-product-detail' element={<BBProductPage/>}/>
//           <Route path='/b-home-page' element={<BBHomePage/>}/>
//           <Route path='/home-page' element={<HomePage/>}/> */}


//           {/* <Route path='/admin-login' element={<AdminLogin/>}/>
//           <Route path='/admin-dashboard' element={<AdminDashboard/>}/> */}

//             {/* Private Routes with Nav */}
      
          
//         {/* </Routes> */}
//      </Router>
//    </>
//   );
// }

// export default App;
