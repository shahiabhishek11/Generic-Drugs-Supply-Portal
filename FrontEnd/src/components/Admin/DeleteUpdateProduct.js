import React from 'react';
import { Link } from "react-router-dom";

class DeleteUpdateProduct extends React.Component
{

            constructor(props)
            {
                super(props);
                this.state={

                    pname:"",
                    pdesc:"",
                    unit_id:[],
                    cid:[],
                    mrp_price:"",
                    generic_price:"",
                     
                    product:{}
                }
              
            }
            handleInput=(ev)=>{
                    
                const nm=ev.target.name;
                let val=ev.target.value;
                const type=ev.target.type;

                console.log(type) 
                 if(type==='select-one')
                 {
                     alert("hi")
                    val=ev.target.value; 
                    
                    console.log(JSON.stringify(val)) 
                    this.setState({selectedCid:val})
                 }
                else
                {
                    val=ev.target.value;
                    this.setState({[nm]:val})
                }
             
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
                        pname:this.state.pname,
                        p_desc:this.state.pdesc,
                        unit_id:this.state.unit_id,
                        cid:this.state.cid,
                        mrp_price:this.state.mrp_price,
                        generic_price:this.state.generic_price,

                    })
                }
               
                fetch("http://localhost:8080/updateProduct",reqOptions)
                .then(res=>res.json())
                .then(data=>this.setState({product:data}))


                fetch("http://localhost:8080/deleteProduct",reqOptions)
                .then(res=>res.json())
                .then(data=>this.setState({product:data}))




             
            }


                        componentDidMount=()=>{
                fetch("http://localhost:8080/showCompany")
                .then(resp => resp.json())
                .then(data => this.setState({cid : data}))

                fetch("http://localhost:8080/showUnit")
                .then(resp => resp.json())
                .then(data => this.setState({unit_id : data}))


                
            }

           
           
            render()
            {

                return(
                    <div className="container" >

                        <h3> ----Update Product---- </h3>

                        <form>
               
               
                
                <div className="form-group">
                    <label></label>

                    <div className="form-group">
                
                <label for="cid">Choose a company:</label>

                   <select name="cid" id ="cid" onChange={this.handleInput} >
                     
                     {
                         this.state.cid.map(cid =>
                         {
                            return( <option value={cid}>{ cid.cname}</option>)

                         })


                     }

                    </select>
                    </div>

                    <input type="text" name="pname" onChange={this.handleInput} className="form-control" placeholder="Product Name" />
                </div>
                <div className="form-group">
                    <label></label>
                    <input type="text"  name="pdesc" onChange={this.handleInput}  className="form-control" placeholder="Product Descroption" />
                </div>

                <div className="form-group">
                
                <label for="unit_id">Choose a Unit:</label>

                   <select name="unit_id" id ="unit_id"  onChange={this.handleInput}>
                     
                     {
                         this.state.unit_id.map(unit_id =>
                         {
                            return( <option value={unit_id}>{ unit_id.u_desc}</option>)

                         })


                     }

                    </select>
                    </div>


                <div className="form-group">
                    <label></label>
                    <input type="text"  name="mrp_price" onChange={this.handleInput}  className="form-control" placeholder="Market Price" />
                </div>
                <div className="form-group">
                    <label></label>
                    <input type="text"  name="generic_price" onChange={this.handleInput}    className="form-control" placeholder="Generic Price" />
                </div>
               


                <label></label>
                    <label></label>


                <input  type="submit"  value="Update"   onClick={this.submitData} className="btn btn-primary btn-block"/>
              

            </form>
             </div>
                )
            }
}


export default DeleteUpdateProduct;
        

        

        