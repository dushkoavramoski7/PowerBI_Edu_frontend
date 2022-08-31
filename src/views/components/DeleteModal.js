import Modal from 'react-bootstrap/Modal'
import CloseIcon from "@mui/icons-material/Close";
import {IconButton} from "@material-ui/core";
import {useState} from "react";

function DeleteModal({show, closeDeleteDialog, deleteItem}) {
    const [loading, setLoading] = useState(false);

    const callDeleteFunction = () => {
        setLoading(true);
        deleteItem(function () {
            setLoading(false)
            closeDeleteDialog();
        })
    }

    return (
        <Modal
            show={show}
            onHide={closeDeleteDialog}
            backdrop="static"
            keyboard={false}
            centered={false}
        >
            <Modal.Header>
                <div className='container'>
                    <div className='row'>
                        <div className="col text-center">
                            <h5 className="modal-title" style={{color: 'rgba(0,0,0, .65)',}}>Are you sure?</h5>
                            <h7 className="text-danger font-weight-bold">PROCEED TO DELETING ITEM</h7>
                        </div>
                    </div>
                </div>
                <a type="button" className="close">
                    <IconButton size={'small'}>
                        <CloseIcon onClick={closeDeleteDialog} fontSize={'small'}/>
                    </IconButton>
                </a>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#f9f9f9'}}>
                    <p className="text-center mt-3" style={{fontSize: '16px'}}>
                        Do you really want to delete this item? <br/>
                        This operation cannot be undone.
                   </p>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-white" onClick={closeDeleteDialog}>Close</button>
                <button type="submit" className="btn btn-danger" hidden={loading} onClick={() => callDeleteFunction()}>Delete</button>
                <button type="submit" className="btn btn-danger" hidden={!loading} disabled={loading}><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
            </Modal.Footer>
        </Modal>
    )
}
export default DeleteModal;