import Modal from "react-bootstrap/Modal";
import {IconButton} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import {useHistory} from "react-router-dom";

function ModalExamStart({show, closeModal, examId}) {
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
                                <h7 className="text-success font-weight-bold">PROCEED TO TAKING EXAM</h7>
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
                        Click 'Start' to begin the exam! <br/>
                        Timer for exam will start afterwards.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-white" onClick={closeModal}>Close</button>
                    <button type="submit" className="btn btn-success"  onClick={() => history.push("/exams/start/" + examId)}>Start</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalExamStart;