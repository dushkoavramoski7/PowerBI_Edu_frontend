import MenuTopBar from "./components/pageElements/MenuTopBar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {daxAction} from "../redux/action/DAXAction";
import {useStyles} from "../factory/StyleFactory";
import {daxFunctionsViewStyle} from "./style/DaxFunctionsViewStyle";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import DAXFunctionModal from "./components/DAXFunctionModal";

function DaxFunctionsView() {
    const dispatch = useDispatch();
    const daxFunctionsCategories = useSelector(state => state.dax.daxFunctionsCategories);
    const daxFunctions = useSelector(state => state.dax.daxFunctions);
    const classes = useStyles(daxFunctionsViewStyle);
    const [openModal, setModal] = useState(false);
    const [selectedDAXCategory, setSelectedDAXCategory] = useState();


    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(daxAction.fetchDAXFunctionsCategories());
        dispatch(daxAction.fetchDAXFunctions());
    }, []);

    const openDAXFunctionModal = (category) => {
        setModal(true);
        setSelectedDAXCategory(category);
    }

    const closeDAXFunctionModal = () => {
        setModal(false);
    }

    return (
        <>
            <MenuTopBar active={'DaxFunctions'}/>
            <div className={`${classes.bodyStyle} p-3`}>
                <div className={'container'} style={{marginTop: 70}}>
                    <div className={'row justify-content-around'}>
                    {daxFunctionsCategories && daxFunctionsCategories.map((category) => {
                        return (
                            <div className={'col-3 d-flex justify-content-center m-2'} style={{borderRadius: '13px', backgroundColor: 'rgba(243, 213, 102, .09)', height: '200px', cursor: 'pointer', width: '32%'}}
                                onClick={() => {openDAXFunctionModal(category)}}
                            >
                                <span className={'align-self-center text-center'}>
                                    <span style={{fontSize: '24px', fontFamily: "system-ui", fontWeight: 'bold', color: 'rgba(229, 170, 10)'}}>
                                        {category}
                                    </span>
                                    <br/>
                                    <i style={{color: 'rgba(0,0,0,.4)'}}>
                                        functions: <b>{daxFunctions.filter((func) => func.category === category).length}</b>
                                    </i>
                                    <br/>
                                    <br/>
                                    <span style={{fontSize: '13px', color: 'rgba(0,0,0,.4)'}}>
                                        {daxFunctions.filter((func) => func.category === category).slice(0, 2).map((func) => {
                                            return (
                                                <>
                                                    <div>{func.syntax}</div>
                                                </>
                                            )
                                        })}
                                        <MoreHorizRoundedIcon fontSize={'large'} color={'disabled'}/>
                                    </span>
                                </span>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
            <DAXFunctionModal show={openModal} closeDAXModal={closeDAXFunctionModal} daxCategory={selectedDAXCategory} />
        </>
    )
}
export default DaxFunctionsView;