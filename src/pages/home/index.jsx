import FavouriteVideo from "./companents/favourite-video-block";
import FoodDrink from "./companents/food-drink";
import Recommended from "./companents/recommended";

const HomePage = () => {
    return <div className="home">
        <FavouriteVideo/>
        <Recommended/>
        <FoodDrink/>
    </div>
}

export default HomePage;
