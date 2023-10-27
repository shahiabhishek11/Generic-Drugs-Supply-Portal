import styled from "styled-components";


import React from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table'


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


export default class TableDataAdmin extends React.Component
{


  constructor(props)
      {
        super(props);

        this.state ={
          p:[],
          DataisLoaded: false
        };
      }


      componentDidMount=()=>
      {
          fetch("http://localhost:8080/showProduct")
          .then(resp=>resp.json())
          .then((json) => {
            this.setState({
                p: json,
                DataisLoaded: true
            });
        })
      }


      deleteProduct=(p1)=>{
        //console.log(p1)
      

        const reqOptions={
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
              pid:p1.pid
            })
          }
           
        fetch("http://localhost:8080/deleteProduct",reqOptions)
        
        
          }
     
    


        render()
        {

         
   
          return(
            <div>
                

                <Table striped bordered hover size="sm">
    
                <thead>
                  <tr>
    <th scope="row">ProductName</th>
      <th scope="row">Description</th>
      <th scope="row">MRP</th>
      <th scope="row">Generic_Price</th>

      </tr>
      </thead>

      <tbody>
            
        {
         
   this.state.p.map((p1)=>(
   
   
    <tr key={p1.pid}>
                      <td>{p1.pname}</td>
                      <td>{p1.p_desc}</td>
                      <td>{p1.mrp_price}</td>

                      <td>{p1.generic_price}</td>
                      <td>  <Link to="/updateProduct">< input type="button" value="Edit"></input> </Link> </td>
                      <td > <button onClick={this.deleteProduct(p1)}>Delete</button>  </td>
  </tr>



                  
                ))
                

          }
          </tbody>
         </Table>

            </div>
          )
        }
      
      }
