import React from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';
import Navbar from './Navbar';

class ProductInsert extends React.Component
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
                    selectedUnit:{},   
                    selectedCid:{},                 
                   
                   
                    product:{}
                }
              
            }

            handleInput=(ev)=>{
                    
                const nm=ev.target.name;
                let val=ev.target.value;
                const type=ev.target.type;

                 
                 if(type==='select-one')
                 {
                   if(nm==='unit_id'){
                        val=ev.target.value;
                        const uid=val;
                        const unit = this.state.unit_id.find(item=> item.unit_id=== parseInt(uid));
                        
                        this.setState({selectedUnit: unit})

                   }
                   else{
                    val=ev.target.value; 
                    const cid1 = ev.target.value;
                     const user = this.state.cid.find(u => u.cid === parseInt(cid1));
                    this.setState({selectedCid:user})}
                 }
                else
                {
                    val=ev.target.value;
                    this.setState({[nm]:val})
                }
             
          
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
                        unit_id:this.state.selectedUnit,
                        cid:this.state.selectedCid,
                        mrp_price:this.state.mrp_price,
                        generic_price:this.state.generic_price,

                    })
                }
                fetch("http://localhost:8080/insertProduct",reqOptions)
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
                    <div className="container" 
                    >
<Navbar/>
<hr/>
                        <h3> ---Adding Product--- </h3>
                       
                        <form>
               
               
                
                <div className="form-group">
                    <label></label>

                    <div className="form-group">
                
                <label for="cid">Choose a company:</label>

                   <select name="cid" id ="cid" onChange={this.handleInput} >
                     
                     {
                         this.state.cid.map(cid =>
                         {
                            return( <option value={cid.cid}>{ cid.cname}</option>)

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
                            return( <option value={unit_id.unit_id}>{ unit_id.u_desc}</option>)

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


                <input  type="submit"  value="Insert"   onClick={this.submitData} className="btn btn-primary btn-block"/>
              

            </form>
<hr/>
            <Footer/>
             </div>
                )
            }
}


export default ProductInsert;
        