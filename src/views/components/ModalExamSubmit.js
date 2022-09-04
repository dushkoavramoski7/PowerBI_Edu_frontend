import Modal from "react-bootstrap/Modal";
import {IconButton} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import {FormikProvider} from "formik";

function ModalExamSubmit({show, closeModal, formik}) {
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
                                <span className="font-weight-bold text-success">PROCEED TO SUBMITTING EXAM</span>
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
                        Click 'Submit' to publish results! <br/>
                        Results will be shown afterwards.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <FormikProvider value={formik}>
                        <form onSubmit={formik.handleSubmit}>
                            <button type="button" className="btn btn-white" onClick={closeModal}>Close</button>
                            <button type="submit" className="btn btn-success text-white">Submit</button>
                        </form>
                    </FormikProvider>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalExamSubmit;