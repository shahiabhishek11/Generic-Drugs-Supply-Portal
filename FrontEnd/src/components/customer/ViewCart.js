import React from "react";
import Navbar from "./Navbar";


export default class ViewCart extends React.Component
{
    constructor(props)
    {
      super(props);
        this.state=
        {
            cart:[],
            total:[],
            totalamt:"0",
            orders:{},
             date1 : "2022-04-16",
             pstatus:"pending",
             ostatus:"pending",
             itemList:[]
             
        }
    }

    componentDidMount=()=>
    {
        let cartString=sessionStorage.getItem("cart");
        if(cartString != undefined)
        {
            let cart=JSON.parse(cartString )
            let total=cart.map((p)=>p.product.generic_price)
            let totalamt=total.reduce((a,b)=>a+b,0);
            this.setState({cart,total,totalamt})
        }
    }
    
    
    calculatetotal=(i,value)=>{
        
        this.state.itemList.push( {
                
            "product": {
                "pid": this.state.cart[i].product.pid,
                "pname":this.state.cart[i].product.pname ,
                "p_desc": this.state.cart[i].product.p_desc,
                "unit": this.state.cart[i].product.unit,
                "mrp_price": this.state.cart[i].product.mrp_price,
                "generic_price":this.state.cart[i].product.generic_price,
                "comapny": this.state.cart[i].product.company
            },
            "qty":this.state.cart[i].qty
        });
       
        let unittotal=this.state.cart[i].product.generic_price
        let totalvalue=value*unittotal;
        let total=this.state.total;
        total[i]=totalvalue;
        let totalamt=total.reduce((a,b)=>a+b,0);
        this.setState({total,totalamt})


    }


    submit=(ev)=>{
              
    
       // console.log(this.state.cart[0].product);
        //console.log(this.state.cart[0].qty);
        console.log(this.state.itemList)
        ev.preventDefault();

        const reqOptions={
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },

            body: JSON.stringify({
               odate:this.state.date1,
                customer:JSON.parse(localStorage.getItem("loggeduser")),
                shopper:this.state.cart[0].shopper,
                price:this.state.totalamt,
                pstatus:this.state.pstatus,
                ostatus:this.state.ostatus,
                orderItemList: this.state.itemList
                  
                
            })
        }
        console.log(reqOptions)
        fetch("http://localhost:8080/saveorder",reqOptions)
        .then(res=>res.json())
        .then(data=>this.setState({orders:data}))
     
    }






    Remove=(p1)=>{
        console.log(p1);
        //sessionStorage.removeItem(p1);
        const obj=this.state.cart.filter(item=>item.product===p1);
       
    }


    render()
    {

        return(
            <div>
                <h1>View Cart</h1>
                <table>
                    <tr>
                    <th>
                        pid
                    </th>
                    <th>
                        Product
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Qty
                    </th>

                    <th>
                        Total
                    </th>
                    </tr>
                    {
                    this.state.cart.map((p1,i)=>{

                        return(<tr>
                            <td>{i+1}</td>
                            <td>{p1.product.pname}</td>
                            <td>{p1.product.generic_price}</td>
                            <td><input type="number" min="1"  onChange={(e)=>this.calculatetotal(i,e.target.value)}/></td>
                            <td>{this.state.total[i]}</td>
                            <td><button onClick={() => this.Remove(p1)}>Remove</button></td>
                        </tr>)
                    })
                }

                <tr>
                    <td colSpan={4}>Total Amount : {this.state.totalamt}</td>
                </tr>
                
                    <tr>
                       {/**<input type="button" value="Confirm Cart" onClick={()=>this.submit}  ></input> */} 
                       <td> <button onClick={this.submit}>Confirm Cart</button></td>
                    </tr>
                </table>




                
            </div>
        )

    }

}