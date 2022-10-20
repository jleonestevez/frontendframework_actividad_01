import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faHeart} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

function Post({  image, createdAt, autor, text , comments }) {
    const [likes, setLikes] =  useState(0);

    function likePost() {
        setLikes(likes + 1);
    }

    return (
        <div className="card m-3" style={{width: "21rem"}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        {createdAt}
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary" onClick={likePost}>
                            <FontAwesomeIcon icon={faHeart} />
                           <span style={{marginLeft: "5px"}}>{likes}</span>
                        </button>
                    </div>
                </div>
                <h5 className="card-title mt-2 text-start">{autor}</h5>
                <p className="card-text text-start">{text}</p>
                <div className="d-flex">
                    <div>

                            <FontAwesomeIcon icon={faComments} />
                            <span style={{marginLeft: "5px"}}> Comments ({comments})</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;