import MenuTopBar from "./components/pageElements/MenuTopBar";
import {useStyles} from "../factory/StyleFactory";
import {documetnationsViewStyle} from "./style/DocumetnationsViewStyle";

function DocumentationsView() {
    const classes = useStyles(documetnationsViewStyle);

    return (
        <>
            <MenuTopBar active={'Documentations'}/>
            <div className={`${classes.bodyStyle} p-3`}>
                <div className={'container'} style={{marginTop: 70}}>

                </div>
            </div>
        </>
    )
}
export default DocumentationsView;
