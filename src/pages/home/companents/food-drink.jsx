import { Link } from "react-router-dom";
import { FoodDrinkData } from "../../../store/food-drink";
import { Icons } from "../../../assets/icons";

const FoodDrink = () => {
    return <div className="food">
        <div className="food-header">
            <div className="food-channel">
                <div className="food-channel__img">
                <img src={"https://avatars.dzeninfra.ru/get-zen_doc/167204/pub_64fe20e4c450fa1f2169f41e_64fe229d6fc6da640c97ff27/scale_1200"} alt="" />
                </div>
                <h2 className="food-channel__name">Food & Drink</h2>
                <p className="food-channel__text">Recommended channel for you</p>
            </div>
            <div className="food-sub">
                <button className="food-btn">Subscribe 2.3m</button>
                <Icons.nextBtn/>
            </div>
        </div>
        <div className="food-list">
            {
                FoodDrinkData.map(item => (
                    <Link to={"/video"} className="food-link" key={item.id}>
                        <div className="food-img">
                            {<img src={item.img} alt={item.title} />}
                        </div>
                        <h3 className="food-video__title">{item.title}</h3>
                        <div className="food-info">
                            <div>{item.views} • {item.date}</div>
                            <div>{item.username}</div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
}

export default FoodDrink;
