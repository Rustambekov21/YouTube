import Favourite from "../pages/favourites";
import GamesPage from "../pages/games";
import HistoryPage from "../pages/history";
import HomePage from "../pages/home";
import LibraryPage from "../pages/library";
import LikedVideos from "../pages/liked-videos";
import MusicPage from "../pages/music";
import SubsPage from "../pages/subs";
import TrendPage from "../pages/trending";
import WatchPage from "../pages/watch";

export const routes = [
    {
        id: 1,
        path: "/",
        element: <HomePage/>,
    },
    {
        id: 2,
        path: "/trend",
        element: <TrendPage/>,
    },
    {
        id: 3,
        path: "/subs",
        element: <SubsPage/>,
    },
    {
        id: 4,
        path: "/library",
        element: <LibraryPage/>,
    },
    {
        id: 5,
        path: "/history",
        element: <HistoryPage/>,
    },
    {
        id: 6,
        path: "/watch-later",
        element: <WatchPage/>,
    },
    {
        id: 7,
        path: "/favourites",
        element: <Favourite/>,
    },
    {
        id: 8,
        path: "/liked-videos",
        element: <LikedVideos/>,
    },
    {
        id: 9,
        path: "/music",
        element: <MusicPage/>,
    },
    {
        id: 10,
        path: "/games",
        element: <GamesPage/>,
    },
    
    // {
    //     id: 11,
    //     path: "//gussie-singleton",
    //     element: <Ch/>,
    // },
    
]