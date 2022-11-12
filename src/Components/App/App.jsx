import { Component } from "react";
import  {createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import MasterLayout from "../MasterLayout/MasterLayout";
import Navbar from "../Navbar/Navbar";
import Parent from "../Parent/Parent";
import Portfolio from "../Portfolio/Portfolio";
// import About from "../About/About";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";


export default class App extends Component{
  
    routes = createBrowserRouter([
      {path: "/", element: <MasterLayout/>,errorElement: <NotFound/> ,children:[

        {index:true,element:<Home/>},
        {path:'Portfolio',element:<Portfolio/>},
        // {path:'About',element:<About/>},
        {path:'Contact',element:<Contact/>},
        {path:'Parent',element:<Parent/>},
        
      ]}
    ])
  render(){
    return (
    <>

    <RouterProvider router={this.routes}/>
    
    </>
    );
  
    }
  }
