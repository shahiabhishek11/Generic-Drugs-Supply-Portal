import React from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';
import Navbar from './Navbar';

class AddCompany extends React.Component
{

            constructor(props)
            {
                super(props);
                this.state={

                    cname:"",
                                    
                   
                   
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
                        cname:this.state.cname,
                       

                    })
                }
                fetch("http://localhost:8080/insertCompany",reqOptions)
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
                        <h3>Insert Company</h3>

                        <form>
               
                
                <div className="form-group">
                    <label></label>
                    <label></label>
                    <label></label>

                    <input type="text" name="cname" onChange={this.handleInput} className="form-control" placeholder="Company Name" />
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


export default AddCompany;
        