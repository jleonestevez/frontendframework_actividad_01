import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPosts, getProfile} from "../services/data-services";


function Profile({ avatar,username,bio}) {
    const navigate = useNavigate();

    function onLogout(){
        localStorage.removeItem("hdApiToken");
        navigate("/login");
    }
    return <div className="d-flex flex-column align-items-center" style={{background:'#f8f9fa',
        borderColor:"#e74829",
    borderWidth:"1px",
    borderBottom:"solid"}}>
        <div> <img style={{width:'90px'}} src={avatar} alt="avatar"/> </div>
        <div style={{fontWeight:"bold"}}>{username}</div>
        <div>{bio}</div>
        <button type="button" onClick={onLogout} className="btn btn-danger mb-3 mt-2">Cerrar Sesión</button>
    </div>;
}

export default  Profile;