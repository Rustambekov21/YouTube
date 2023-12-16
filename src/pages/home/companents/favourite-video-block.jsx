import { Link } from "react-router-dom"
import { FavouriteData } from "../../../store/video-data"
import { Icons } from "../../../assets/icons";

const FavouriteVideo = () => {
    return (
        <div className="favourite">
            <div className="favourite-header">
                <div className="favourite-header__channel">
                <img src={"https://w.forfun.com/fetch/4a/4ab4b2a2f3984e85c6b8325f972f65dc.jpeg"} alt="avatar" />
                <h1 className="favourite-channel__name">Dollie Blair</h1>
                </div>
                <Icons.nextBtn/>
            </div>
        <div className="favourite-main">
            <div className="favourite-list">
                {
                    FavouriteData.map(item => (
                        <Link to={"/video"} className="favourite-list__item">
                            <div className="favourite-img">
                                {<img src={item.img} alt={item.title}/>}
                            </div>
                            <h1 className="favourite-title">{item.title}</h1>
                            <div className="favourite-info">
                                <span className="favourite-video__info">
                                    <div>{item.views} • {item.date}</div>
                                    <div className="favoutite-video__channel_name">{item.username}</div>
                                </span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
        </div>
    )
}

export default FavouriteVideo;
