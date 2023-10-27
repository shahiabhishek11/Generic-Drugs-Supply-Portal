/*import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';


export default class Login extends React.Component{

            constructor(props)
            {
                super(props);
                this.state={
                    uid:"",
                    pwd:"",
                    errors:{
                        uiderror:"",
                        pwderror:""
                    },
                    uidvalid:false,
                    pwdvalid:false,
                    formvalid:false
                }

            }

            handleInput=(ev)=>{
                const emailregexp=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const nm=ev.target.name;
                const val=ev.target.value;
                const pwdreg=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
               
                let errors=this.state.errors;
                let uidflag=this.state.uidvalid;
                let pwdflag=this.state.pwdvalid;

                switch(nm)
                {
                    case 'uid':

                    if(!emailregexp.test(val))
                    {
                        errors.uiderror="Invalid";
                        uidflag=false;
                    }
                    else
                    {
                        errors.uiderror=" ";
                        uidflag=true;
                    }
                        break;

                    case 'pwd':
                        if(!pwdreg.test(val))
                        {
                            errors.pwderror=" Password length between 6 and 16 "
                            pwdflag=false;

                        }
                        else{
                            errors.pwderror="";
                            pwdflag=true;
                        }
                        break;

                }

                this.setState({errors,[nm]:val,uidvalid:uidflag,pwdvalid:pwdflag},()=>{this.setState({formvalid: this.state.uidvalid && this.state.pwdvalid})});

              
            }


            submitForm=()=>{
                alert("Form get Submitted")
            }


    render()
    {
        return(<div className='container'>
               
                    <h1>Welcome to Generic medicine Portal</h1>
                <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label></label>
                    <input type="text" name="uid" value={this.state.uid} onChange={this.handleInput} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                <label></label>
                    <input type="password" name="pwd"  value={this.state.pwd} onChange={this.handleInput} className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <input type="submit" value="Login" disabled={!this.state.formvalid} onClick={this.submitForm} className="btn btn-primary btn-block"/>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                    <br/>
                   Don't have Account? <Link to="/register ">Register Here</Link>
                </p>
            </form>
           



        </div>)
    }
}*/




import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Link } from 'react-router-dom';
import {useState} from "react/cjs/react.development"
import { useNavigate } from "react-router-dom";
import myStore from '../Home/store';

export default function Login(){

    let navigate= useNavigate();
     
     const [errormsg,setErrormsg] = useState("");
     const[state,setState]=useState({
         urid :" ",
         pwd : " "
     });
    const handleInput=(ev)=>{
        setState((state)=>({
          ...state,
          [ev.target.name] : ev.target.value

        }));
    }

    const submitData=(ev)=>{
          ev.preventDefault();
          const req= {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    userid: state.urid,
                    password: state.pwd
                })
        }

        fetch("http://localhost:8080/CheckLogin", req)
        .then(resp => resp.text())
        .then(data => {
            if(data.length != 0 )
            {
                const json = JSON.parse(data);
                // set session user
                sessionStorage.setItem("user", data);

                
                if(json.usertype === "customer")
                {
                    localStorage.setItem("loggeduser", JSON.stringify(json));
                    myStore.dispatch({type:'LOGGEDIN'});
                    navigate('/customerhome');
                }

                else if(json.usertype === "shopper")
                {
                    localStorage.setItem("loggeduser", JSON.stringify(json));
                    myStore.dispatch({type:'LOGGEDIN'});
                     navigate('/shopper');
                }
                else if(json.usertype === "admin")
                { console.log(json.usertype);
                    localStorage.setItem("loggeduser", JSON.stringify(json));
                    myStore.dispatch({type:'LOGGEDIN'});
                   
                     navigate('/adminhome');
                }
                else
                {
                    localStorage.setItem("loggeduser", JSON.stringify(json));
                    myStore.dispatch({type:'LOGGEDIN'});
                     navigate('/shipper');
                }
                /*if(json.usertype)
                {
                    console.log(json.usertype);
                    localStorage.setItem("loggeduser", JSON.stringify(json));
                    myStore.dispatch({type:'LOGGEDIN'});
                    navigate('/adminhome');
                } */

            
                /*else if(json.users.usertype){
                
                    if(json.users.usertype === "customer")
                    {
                        localStorage.setItem("loggeduser", JSON.stringify(json));
                        myStore.dispatch({type:'LOGGEDIN'});
                        navigate('/customerhome');
                    }

                    else if(json.users.usertype === "shopper")
                    {
                        localStorage.setItem("loggeduser", JSON.stringify(json));
                        myStore.dispatch({type:'LOGGEDIN'});
                         navigate('/shopperhome');
                    }
                    else
                    {
                        localStorage.setItem("loggeduser", JSON.stringify(json));
                        myStore.dispatch({type:'LOGGEDIN'});
                         navigate('/shipperhome');
                    }*/
                }
               else
                        setErrormsg('Wring ID/pwd') ; 
          //console.log(state)
         
        })
    }

         return (
            <div className='container'>
               
            <h1>Welcome to Generic medicine Portal</h1>
        <form>
        <h3>Sign In</h3>
        <div className="form-group">
            <label></label>
            <input type="text" name="urid"  onChange={handleInput} className="form-control" placeholder="Enter userid" />
        </div>
        <div className="form-group">
        <label></label>
            <input type="password" name="pwd"   onChange={handleInput} className="form-control" placeholder="Enter password" />
        </div>
        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>
        <input type="submit" value="Login"  onClick={submitData} className="btn btn-primary btn-block"/>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
            <br/>
           Don't have Account? <Link to="/register ">Register Here</Link>
        </p>
    </form>
  
  </div>
  )
}

