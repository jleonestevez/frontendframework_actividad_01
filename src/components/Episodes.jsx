import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faHeart} from "@fortawesome/free-solid-svg-icons";

function Episode({  img, title, description }) {
    return (
        <div className="card m-3" style={{width: "21rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        3min ago
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary">
                            <FontAwesomeIcon icon={faHeart} />
                           <span style={{marginLeft: "5px"}}>43K</span>
                        </button>
                    </div>
                </div>
                <h5 className="card-title mt-2 text-start">{title}</h5>
                <p className="card-text text-start">{description}</p>
                <div className="d-flex">
                    <div>

                            <FontAwesomeIcon icon={faComments} />
                            <span style={{marginLeft: "5px"}}>Comments (15)</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Episode;