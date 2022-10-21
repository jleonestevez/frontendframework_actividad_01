import React from 'react';
import {Navigate} from "react-router-dom";


function Login({error , onLoginComplete}) {
    return  (<div className="d-flex flex-column m-4 text-start">
        { error !== '' && error !== 'go' ?   <div className="d-flex flex-column" style={{background: '#F6CBD0',
            color:"#A55E64",
            borderRadius:"5px",
            padding:"9px",
            marginBottom:"15px"}}>
            <span>{error}</span>
        </div> : ""}
        { error === 'go' ?
            <Navigate to="/" replace={true} /> :""}

        <div className="form-group" style={{marginBottom:"10px"}}>
            <label htmlFor="exampleInputEmail1" style={{marginBottom:"10px"}}>Email address</label>
            <input id="email" type="email" className="form-control"   aria-describedby="emailHelp"
                   placeholder="Enter email"/>
        </div>
        <div className="form-group" style={{marginBottom:"10px"}}>
            <label htmlFor="exampleInputPassword1" style={{marginBottom:"10px"}}>Password</label>
            <input type="password" id="password" className="form-control"   placeholder="Password"/>
        </div>

        <button type="button" className="btn btn-primary" onClick={()=>{
            onLoginComplete(document.getElementById("email").value,document.getElementById("password").value);
        }
        }>Login</button>
    </div>)
}

export default Login;