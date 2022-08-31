import Modal from "react-bootstrap/Modal";
import {Divider, IconButton} from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {daxAction} from "../../redux/action/DAXAction";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

function DAXFunctionModal({show, closeDAXModal, daxCategory}) {
    const dispatch = useDispatch();
    const daxFunctions = useSelector(state => state.dax.daxFunctions);
    const daxFunctionExpand = useSelector(state => state.dax.daxFunctionExpand);
    const [expandAll, setExpandAll] = useState(false);

    useEffect(() => {
        dispatch(daxAction.fetchDAXFunctions());
    }, []);

    useEffect(() => {
        daxFunctions.map((func) => {
            dispatch(daxAction.expand_collapseDaxFunc(func.id, false));
        })
    }, [show]);

    const expandDAXFunc = (funcId) => {
        let funcValue = daxFunctionExpand.find((func) => func[0] === funcId)[1];
        if(funcValue === true) {
            dispatch(daxAction.expand_collapseDaxFunc(funcId, false));
        }
        else {
            dispatch(daxAction.expand_collapseDaxFunc(funcId, true));
        }
    }

    const expandAllDAXFunc = () => {
        setExpandAll(!expandAll)
        daxFunctions.map((func) => {
            dispatch(daxAction.expand_collapseDaxFunc(func.id, !expandAll));
        })
    }

    return (
        <Modal
            show={show}
            onHide={closeDAXModal}
            backdrop="static"
            keyboard={false}
            centered={false}

        >
            <Modal.Header>
                <div className='container'>
                    <div className='row'>
                        <div className="col text-center">
                            <h5 className="modal-title" style={{color: 'rgba(0,0,0, .65)',}}>{daxFunctions.filter((func) => func.category === daxCategory)[0]?.category}</h5>
                        </div>
                    </div>
                </div>
                <a type="button" className="close">
                    <IconButton size={'small'}>
                        <CloseRoundedIcon onClick={closeDAXModal} fontSize={'small'}/>
                    </IconButton>
                </a>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#f9f9f9'}}>
                <p className="font-bold" style={{color: 'rgba(0,0,0,.5)',  textAlign: 'justify', textJustify: 'inter-word'}}>
                    {daxFunctions.filter((func) => func.category === daxCategory)[0]?.description}
                </p>
                <Divider textAlign="right" style={{color: 'rgba(0,0,0,.5)'}}>
                    {!expandAll ? <span className={'m-2'}>Expand all</span>  : <span className={'m-2'}>Collapse all</span>}
                    <IconButton size={'small'} onClick={() => expandAllDAXFunc()}>
                        {!expandAll ? <><KeyboardArrowDownRoundedIcon fontSize={'small'}/> </> :
                            <> <KeyboardArrowUpRoundedIcon fontSize={'small'}/> </> }
                    </IconButton>
                </Divider>
                <ul style={{listStyle: 'none'}} className={'mt-2'}>
                    {daxFunctions.filter(((func) => func.category === daxCategory)).map((func) => {
                        return (
                            <>
                                <li key={func.syntax}>
                                    <IconButton size={'small'} onClick={() => expandDAXFunc(func.id)}>
                                        {daxFunctionExpand.find((func1) => func1[0] === func.id)[1] === true ?
                                            <KeyboardArrowUpRoundedIcon fontSize={'small'}/> :
                                            <KeyboardArrowDownRoundedIcon fontSize={'small'}/>}
                                    </IconButton>
                                   <b style={{color: 'rgba(0,0,0,.5)'}}> {func.syntax} </b>
                                </li>
                                {daxFunctionExpand.find((func1) => func1[0] === func.id)[1] === true ?
                                    <div className={'p-4'} style={{marginTop: '-20px'}}>
                                        <i style={{color: 'rgba(229, 170, 10)'}}>Parameters:</i>
                                        <ol>
                                            {func.parameters.map((param) => {
                                                return (
                                                    <li style={{textAlign: 'justify', textJustify: 'inter-word'}}> {param} </li>
                                                )
                                            })}
                                        </ol>
                                        <br/>
                                        <i style={{color: 'rgba(229, 170, 10)'}}>Returns:</i>
                                        <div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                                            {func.returnValue}
                                        </div>
                                    </div> : null }
                            </>
                        )
                    })}

                </ul>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-white" onClick={closeDAXModal}>Close</button>
            </Modal.Footer>
        </Modal>

    )
}
export default DAXFunctionModal;