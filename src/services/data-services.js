import postsList from "../services/posts.json";

export function getPosts(){
    return new Promise((resolve, reject) => {
         window.setTimeout(()=>{
             resolve(postsList);
         },3000)
    });
}
