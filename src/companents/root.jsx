import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Icons } from "../assets/icons";
import { MenuBar, favouriteBar } from "../constants/menu-bar";
import { routes } from "../constants/routes";
import Search from "./search";


const Root = () => {
    return <div className="root">
        <div className="root-menu">
            <div className="root-logo">
                <Icons.burger/>
                <Icons.logo/>
            </div>
            <div className="root-list">
                {
                    MenuBar.map(item => (
                        <NavLink to={item.path} key={item.id} className={"root-link"}>
                            {item.icon} {item.title}
                        </NavLink>
                    ))
                }
            </div>
            <h3 className="root-s">Subscriptions</h3>
            <div className="root-list">
                {
                    favouriteBar.map(item => (
                        <NavLink to={item.path} 
                        key={item.id} 
                        className={"root-linkF"}>
                        <img src={item.img} alt={item.title} /> {item.title}
                        </NavLink>
                    ))
                }
            </div>
        </div>
        <div className="root-main">
            <div className="root-header">
                <Search/>
                <div className="root-case">
                    <Link to={"?"}>
                    <Icons.liveChatIcon/>
                    </Link>
                    <Link to={"?"}>
                    <Icons.headerMenuIcon/>
                    </Link>
                    <Link to={"?"}>
                    <Icons.natification/>
                    </Link>
                    <div className="avatar">
                        <img src={"https://www.fotolog.com/wp-content/uploads/2020/05/best-suits-for-men-featured-image-final-1536x1194.jpg"} alt="" />
                    </div>
                </div>
            </div>
            <div className="root-pages">
                <Routes>
                {
                    routes.map(item => (
                        <Route path={item.path} 
                        key={item.id} 
                        element={item.element}/>
                    ))
                }
                </Routes>
            </div>
        </div>
    </div>
}

export default Root;