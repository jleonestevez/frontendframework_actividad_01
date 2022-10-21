import './App.css';
import NavBar from "./components/NavBar";
import PostsList from "./components/PostsList";
import SearchBar from "./components/SearchBar";
import React, {useEffect, useState} from "react";
import {getPosts, getProfile, login} from "./services/data-services";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Loader from "./components/Loader";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";

const initialState = null;
let initialLoginState = [];
function App() {
    const navigate = useNavigate();
    initialLoginState = localStorage.getItem("hdApiToken") ? true : false;
    console.log("initialLoginState" , initialLoginState);
    const [posts, setPosts] =  useState(initialState);
    const [postBack, setPostBack] =  useState(initialState);
    const [profile, setProfile] =  useState([]);
    const [search] =  useState("");
    const [error, setError] =  useState("");
    const [loginOk, setloginOk] =  useState(initialLoginState);
    const [currentUser, setCurrentUser] =  useState({token:""});
    const [showLoader, setShowLoader] =  useState(false);



    useEffect(() => {
        console.log("entro useEffect");
        const apiToken = localStorage.getItem("hdApiToken");
        if (apiToken) {
            setloginOk(true);
            setCurrentUser({token: apiToken});
            setShowLoader(true);
            /**
             * Llamado para cargar posts
             */
            getPosts().then(response => {
                setPosts(response.data);
                setPostBack(response.data);
                console.log("segundo llamado")
                setShowLoader(true);
                getProfile().then((res) => {
                    setProfile(res.data);
                    console.log("profile",profile.data);
                    setShowLoader(false);
                }).catch(() => {
                    setShowLoader(false);
                });
            }).catch((e) => {

                 if (e.response !== undefined && e.response.status === 401){
                     localStorage.removeItem("hdApiToken");
                     navigate("/login");
                 }
                setShowLoader(false);
            }) ;

        }
        console.log(loginOk);
    },[loginOk]);

    /**
     * Funcion encargada de filtrar los posts y actualizandolos por medio del useState
     */
    function onSearch(event){
        const search = event.target.value;
        console.log(search);
        if(search === ""){
            setShowLoader(true);
            /**
             * Llamado para cargar posts
             */
            getPosts().then(response => {
                setPosts(response.data);
                setPostBack(response.data);
                setShowLoader(false);
            }).catch((e) => {
                if (e.response !== undefined &&  e.response.status === 401){
                    localStorage.removeItem("hdApiToken");
                    navigate("/login");
                }
                setShowLoader(false);
            }) ;

        } else
            setPosts(postBack.filter(post => post.text.toLowerCase().includes(search.toLowerCase())));
    }

    function profileClick(){
        console.log("profile");
        navigate("/profile");
    }

    function logoClick(){
        navigate("/");
    }

    function loginClick(email , password){
        console.log("email", email);
        setShowLoader(true);
        login(email,password).then(response => {
            console.log(response);
            if (response.status === 200) {
                localStorage.setItem('hdApiToken', response.data.token);
                setCurrentUser({token:response.data.token });
                setShowLoader(false);
                setloginOk(true);
                setShowLoader(true);
                setError("go");
                /**
                 * Llamado para cargar posts
                 */
                getPosts().then(response => {
                    setPosts(response.data);

                    setShowLoader(false);
                }).catch(()=>{
                    setShowLoader(false);
                });
            }
        }).catch((e)=>{
            if (e.code === "ECONNABORTED"){
                setError("La peticion demoro mucho en completarse , prueba nuevamente.");
            } else {
                setError("Email / Password incorrectos.");
            }
            setShowLoader(false);
        });
    }


    return (
        <>
        <NavBar onLogoClick={logoClick} onProfileClick={profileClick}/>


        <Routes>
            <Route path='/login' element= <Login error={error} onLoginComplete={loginClick}/>     />
            <Route path='/' element={
                <>
                 { loginOk === false  ? <Navigate to="/login" replace={false} /> : "" }
                <SearchBar  value={search} onSearch={onSearch}/>
                <PostsList posts={posts}/>
                { showLoader ?  <><Loader loaderUrl="https://assets10.lottiefiles.com/private_files/lf30_jaijxnez.json"/> Cargando...  </>: ""}
            </>}    />
            <Route path='/profile' element=
                <Profile username= {profile.username}
                   avatar={profile.avatar}
                   bio={profile.bio}/>    />
            </Routes>
        </>);
}

export default App;
