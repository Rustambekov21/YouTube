import { Link } from "react-router-dom";
import { Icons } from "../../../assets/icons";
import { RecommendVideoData } from "../../../store/recommend-video";

const Recommended = () => {
    return <div className="recommended">
        <div className="recommended-header">
        <h2 className="recommended-title">Recommended</h2>
        <Icons.nextBtn/>
        </div>
        <div className="recommened-main">
            <div className="recommended-list">
                {
                    RecommendVideoData.map(item => (
                          <Link to={"/video"} className="recommended-link" key={item.id}>
                            <div className="recommended-img">
                                {<img src={item.img} alt={item.title} />}
                            </div>
                            <h3 className="recommended-video__title">{item.title}</h3>
                            <div className="recommended-info">
                                    <div>{item.views} • {item.date}</div>
                                    <div className="recommended-video__channel">{item.username}</div>
                            </div>
                          </Link>               
                    ))
                }
            </div>
        </div>
    </div>
}

export default Recommended;
