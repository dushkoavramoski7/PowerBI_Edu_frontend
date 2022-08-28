import MenuTopBar from "./components/pageElements/MenuTopBar";
import {useStyles} from "../factory/StyleFactory";
import {documetnationsViewStyle} from "./style/DocumetnationsViewStyle";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {documentationsAction} from "../redux/action/documentationsAction";

function DocumentationsView() {
    const classes = useStyles(documetnationsViewStyle);
    const dispatch = useDispatch();
    const documentations = useSelector(state => state.documentations.documentations);

    useEffect(() => {
        dispatch(documentationsAction.fetchDocumentations());
    }, []);

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
