import styled from "styled-components";
import { popularProducts } from "./data";
import Product from "./Product";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


export default class Products extends React.Component
{

   
 
  
  constructor(props)
      {
        super(props);
        
        this.state ={
          p:[],
          cart:[],
          DataisLoaded: false
        };
      }


      componentDidMount=()=>
      {
          fetch("http://localhost:8080/showAllProductStock")
          .then(resp=>resp.json())
          .then((json) => {
           // console.log(json)
            this.setState({
                p: json,
                DataisLoaded: true
            });
        })
      }


     AddtoCart=(p1)=>{

      let cart=this.state.cart;

      cart.push(p1);
      //this.setState(...this.state,cart);//spread old state 
     // console.log(this.state);

       
    
      }

      ViewCart=()=>{
       // console.log(this.state.cart);
        sessionStorage.setItem("cart",JSON.stringify(this.state.cart));
      }

     
        render()
        {

          const { DataisLoaded, p } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
    
          return(
            <div>
              <Container>
            
        {
                p.map((p1)=>(
                  <table>
                    
                    <tr key={p1.psid}>
                      <td>{p1.product.pname}</td>
                    </tr>
                    <tr>
                  
                    </tr>

                    <tr>
                    <td><b>Description:</b>{p1.product.p_desc}</td>
                    </tr>
                    <tr>
                    <td>Generic Price:{p1.product.generic_price}</td>
                    </tr>

                    <tr>
                    <td>Market Price:{p1.product.mrp_price}</td>
                    </tr>
                    <tr>
                    <td><input type="button" value="Add to Cart" onClick={()=>this.AddtoCart(p1)} /></td>
                    </tr>
                    <hr/>
                  </table>
                ))

          }
          <hr/>

         <Link to="/ViewCart"> <input type="button" value="ViewCart" onClick={()=>this.ViewCart()} /></Link>
          </Container>

            </div>
          )
        }
      
}



