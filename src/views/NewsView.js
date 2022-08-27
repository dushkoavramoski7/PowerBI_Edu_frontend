import MenuTopBar from "./components/pageElements/MenuTopBar";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {newsAction} from "../redux/action/newsAction";

function NewsView() {
    const dispatch = useDispatch();

    const news = useSelector(state => state.news.news);

    useEffect(() => {
        dispatch(newsAction.fetchNews());
    }, []);


    return (
        <>
            <MenuTopBar active={'News'}/>
        </>
    )

}
export default NewsView;