import './App.css';
import NavBar from "./components/NavBar";
import PostsList from "./components/PostsList";
import SearchBar from "./components/SearchBar";
import {useEffect, useState} from "react";
import postsList from "./services/posts.json";
import {getPosts} from "./services/data-services";
import Profile from "./components/Profile";
import {Player} from "@lottiefiles/react-lottie-player";

const initialState = [];
function App() {
    const [posts, setPosts] =  useState(initialState);
    const [section, setSection] =  useState("");
    const [search] =  useState("");


    useEffect(() => {
            /**
             * Llamado para cargar posts
             */
            getPosts().then(data => {
                setPosts(data);
            });
    }
    , []);


    /**
     * Funcion encargada de filtrar los posts y actualizandolos por medio del useState
     */
    function onSearch(event){
        const search = event.target.value;
        console.log(search);
        if(search === ""){
            setPosts(postsList);
        } else
            setPosts(postsList.filter(post => post.title.toLowerCase().includes(search.toLowerCase())));
    }

    function profileClick(){
        setSection("profile");
    }

    function logoClick(){
        setSection("posts");
    }


    return (
        <div className="App">
            <NavBar onLogoClick={logoClick} onProfileClick={profileClick}/>
            {section ==="profile"  && posts !== initialState ? <Profile username="Jose" avatar="https://hbomax-images.warnermediacdn.com/2022-06/houseofthedragon_characterart_daemon_avatar_200x200.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" bio="Lorem insump" /> : ''}
            {section !=="profile" && posts !== initialState ?  <> <SearchBar  value={search} onSearch={onSearch}/>  <PostsList posts={posts}/> </>: ''}
            <>
                { posts === initialState ?  <Player
                    autoplay
                    loop
                    src="https://assets10.lottiefiles.com/private_files/lf30_jaijxnez.json"
                    style={{ height: '300px', width: '300px' }}
                >

                </Player>: ""}
            </>
        </div>
    );
}

export default App;
