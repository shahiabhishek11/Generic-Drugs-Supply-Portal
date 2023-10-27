import React from "react";

import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.jsx'
import Footer from '../Home/Footer.js'
import Slider from './Slider'
import Products from './Products'




export default  class CustomerHome extends React.Component{


    render()
    {
        return(<div className='container'>
               
                    <h1>Welcome ,</h1>
                   
<Navbar/>
<Slider/>
<Products/>
<Footer/>

<hr></hr>



</div>)
    }


}