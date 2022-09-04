import Modal from "react-bootstrap/Modal";
import {IconButton} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import {useHistory} from "react-router-dom";

function ModalExamSubmit({show, closeModal}) {
    const history = useHistory();

    return (
        <>
            <Modal
                show={show}
                onHide={closeModal}
                backdrop="static"
                keyboard={false}
                centered={false}
            >
                <Modal.Header>
                    <div className='container'>
                        <div className='row'>
                            <div className="col text-center">
                                <h5 className="modal-title" style={{color: 'rgba(0,0,0, .65)',}}>Are you sure?</h5>
                                <h7 className="text-danger font-weight-bold">PROCEED TO EXITING EXAM</h7>
                            </div>
                        </div>
                    </div>
                    <a type="button" className="close">
                        <IconButton size={'small'}>
                            <CloseIcon onClick={closeModal} fontSize={'small'}/>
                        </IconButton>
                    </a>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: '#f9f9f9'}}>
                    <p className="text-center mt-3" style={{fontSize: '16px'}}>
                        Click 'Exit' to finish with exam! <br/>
                        Results will not be shown afterwards.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-white" onClick={closeModal}>Close</button>
                    <button type="submit" className="btn btn-danger" onClick={() => history.push("/exams")}>Exit</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalExamSubmit;