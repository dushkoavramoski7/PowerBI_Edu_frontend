import {coursesViewStyle} from "./style/CoursesViewStyle";
import {useStyles} from "../factory/StyleFactory";
import MenuTopBar from "./components/pageElements/MenuTopBar";


function CoursesView() {
    const classes = useStyles(coursesViewStyle);

    return (
        <>
            <MenuTopBar active={'Courses'}/>
        </>
    )
}
export default CoursesView;