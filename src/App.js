import './App.css';
import NavBar from "./components/NavBar";
import PostsList from "./components/PostsList";
import SearchBar from "./components/SearchBar";
import {useEffect, useState} from "react";
import { getPosts, login} from "./services/data-services";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Loader from "./components/Loader";

const initialState = [];
function App() {
    const [posts, setPosts] =  useState(initialState);
    const [postBack, setPostBack] =  useState(initialState);
    const [section, setSection] =  useState("");
    const [search] =  useState("");
    const [error, setError] =  useState("");
    const [loginOk, setloginOk] =  useState(false);
    const [showLoader, setShowLoader] =  useState(false);



    useEffect(() => {
        const apiToken = localStorage.getItem("hdApiToken");
        if (apiToken) {
            setloginOk(true);
            setShowLoader(true);
            /**
             * Llamado para cargar posts
             */
            getPosts(apiToken).then(response => {
                setPosts(response.data);
                setPostBack(response.data);
                setShowLoader(false);
            }).catch(() => {
                setShowLoader(false);
            }) ;
        }
    },[]);

    /**
     * Funcion encargada de filtrar los posts y actualizandolos por medio del useState
     */
    function onSearch(event){
        const search = event.target.value;
        console.log(search);
        if(search === ""){
            const apiToken = localStorage.getItem("hdApiToken");
            setShowLoader(true);
            /**
             * Llamado para cargar posts
             */
            getPosts(apiToken).then(response => {
                setPosts(response.data);
                setPostBack(response.data);
                setShowLoader(false);
            }).catch(() => {
                setShowLoader(false);
            }) ;

        } else
            setPosts(postBack.filter(post => post.text.toLowerCase().includes(search.toLowerCase())));
    }

    function profileClick(){
        setSection("profile");
    }

    function logoClick(){
        setSection("posts");
    }

    function loginClick(email , password){
        console.log("email", email);
        setShowLoader(true);
        login(email,password).then(response => {
            console.log(response);
            if (response.status === 200) {
                localStorage.setItem('hdApiToken', response.data.token);
                setShowLoader(false);
                setloginOk(true);
                setShowLoader(true);
                /**
                 * Llamado para cargar posts
                 */
                getPosts(response.data.token).then(response => {
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
        <div className="App">
            <NavBar onLogoClick={logoClick} onProfileClick={profileClick}/>
            { loginOk === false ?  <Login  error={error}   onLoginComplete={loginClick}/> : "" }
            {section ==="profile"  && loginOk && posts !== initialState ? <Profile username="Jose" avatar="https://hbomax-images.warnermediacdn.com/2022-06/houseofthedragon_characterart_daemon_avatar_200x200.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" bio="Lorem insump" /> : ''}
            {section !=="profile" && loginOk && posts !== initialState ?  <> <SearchBar  value={search} onSearch={onSearch}/>  <PostsList posts={posts}/> </>: ''}
            <>
                { showLoader ?  <><Loader loaderUrl="https://assets10.lottiefiles.com/private_files/lf30_jaijxnez.json"/> Cargando...  </>: ""}
            </>

        </div>
    );
}

export default App;
