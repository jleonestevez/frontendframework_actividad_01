import Post from "./Post";
import {Player} from "@lottiefiles/react-lottie-player";




function PostsList({posts}) {
    const episodesComponents = posts.map((post) => {
        return (
            <Post key={post.id} image={post.img} autor={post.title} text={post.description}  createdAt={""}/>)
    }
    )
    return (
        <div className="d-flex flex-rows flex-wrap justify-content-center">
            {episodesComponents.length === 0 ? <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_jippjent.json"
                style={{ height: '300px', width: '300px' }}
            >

            </Player> : episodesComponents}
        </div>
    )
}

export default  PostsList;