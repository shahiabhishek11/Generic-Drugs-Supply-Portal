import React from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';
import Navbar from './Navbar';

class AddUnit extends React.Component
{

            constructor(props)
            {
                super(props);
                this.state={

                    u_desc:"",
                                    
                   
                   
                    company:{}
                }
              
            }

            handleInput=(ev)=>{
                    
                const nm=ev.target.name;
                let val=ev.target.value;
                const type=ev.target.type;
               
                
                    val=ev.target.value;
                

               this.setState({[nm]:val})

            console.log(this.state)
            }


            submitData=(ev)=>{
              
                ev.preventDefault();

                const reqOptions={
                    method:'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },

                    body: JSON.stringify({
                        u_desc:this.state.u_desc,
                       

                    })
                }
                fetch("http://localhost:8080/insertUnit",reqOptions)
                .then(res=>res.json())
                .then(data=>this.setState({product:data}))
             
            }

           
            render()
            {

                return(
                    <div className="container"
                   
                       >
<Navbar/>
<hr/>
                        <h3>Insert Unit</h3>

                        <form>
               
                
                <div className="form-group">
                    <label></label>
                    <label></label>
                    <label></label>

                    <input type="text" name="u_desc" onChange={this.handleInput} className="form-control" placeholder="Unit" />
                </div>
               

                <label></label>
                    <label></label>


                <input  type="submit"  value="Insert"   onClick={this.submitData} className="btn btn-primary btn-block"/>
              

            </form>
            <hr/>
            <Footer/>
             </div>
                )
            }
}


export default AddUnit;
        