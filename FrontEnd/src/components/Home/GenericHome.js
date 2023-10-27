import React from "react";

import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js'
import Footer from './Footer.js'



export default  class GenericHome extends React.Component
{


    render()
    {
        return(<div className='container'>
               
                    <h1>Welcome to Generic medicine Portal</h1>
                  
<Navbar/>


<table striped bordered hover>
  <tr>
    <td><img src={require('../Images/genericlogo.jpg')} alt="Logo" height="200px" width="400px" /></td>
    <td><img src={require('../Images/m1.jpeg')} alt="Logo" height="200px" width="400px" /></td>
    <td><img src={require('../Images/m2.jpeg')} alt="Logo" height="200px" width="400px" /></td>
  </tr>



  
</table>

<p>

This project focuses on reduction in expenditures without compromising health outcomes. 
The most important benefit of generic medicines is not cost savings, but increased health gain. Developing a 
website which will help customer to buy alternative generic medicines at cheaper rate 
Here if  customers and shoppers want to use this facility and want to buy and sell the generic
 medicine then they can directly register on the site , buy and sell  generic medicines online.
Admin can handle all the activity of portal.

</p>

<hr></hr>






<Footer/>

</div>)
    }


}