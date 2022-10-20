import Post from "./Post";
import Loader from "./Loader";


function getMinutesBetweenDates(startDate, endDate) {
    var diff = endDate.getTime() - startDate.getTime();
    return (diff / 60000).toFixed(0);
}
function PostsList({posts}) {
    console.log(posts)
    const episodesComponents = posts.map((post) => {
        return (
            <Post key={post.id} image={post.image} autor={post.author.name} text={post.text}  createdAt={getMinutesBetweenDates(new Date(post.createdAt), new Date())}/>)
    }
    )
    return (
        <div className="d-flex flex-rows flex-wrap justify-content-center">
            {episodesComponents.length === 0 ? <Loader loaderUrl="https://assets2.lottiefiles.com/packages/lf20_jippjent.json"/> : episodesComponents}
        </div>
    )
}

export default  PostsList;