import Modal from "react-bootstrap/Modal";
import {useHistory} from "react-router-dom";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';


function ModalExamResult({show, percentage}) {
    const history = useHistory();
    return (
        <>
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
                centered={false}
            >
                <Modal.Header>
                    <div className='container'>
                        <div className='row'>
                            <div className="col text-center">
                                <h5 className="modal-title" style={{color: 'rgba(0,0,0, .65)',}}>Exam Result</h5>
                                <span className={percentage>=50 ? "font-weight-bold text-success" : "font-weight-bold text-danger"}>{percentage>=50 ? 'Exam PASSED': 'Exam FAILED'}</span>
                            </div>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: '#f9f9f9'}}>
                    <p className="text-center mt-3" style={{fontSize: '16px'}}>
                        {percentage>=50 ? <CheckBoxIcon sx={{fontSize: '130px', color: '#198754'}}/> :
                        <SmsFailedIcon sx={{fontSize: '130px', color: '#DC3545'}}/> }
                        <br/>
                        You {percentage>=50 ?  '' : 'did not'} pass the exam! <br/>
                        Correct answered questions were: <b>{Math.round(percentage)}% </b><br/>
                        {percentage>=50 ? 'View your certificate by clicking on the "Certificate" button'  : ''}
                            </p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-white" onClick={() => history.push("/exams")}>Close</button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
export default ModalExamResult;