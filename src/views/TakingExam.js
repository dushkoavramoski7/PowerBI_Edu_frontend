import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {examAction} from "../redux/action/examAction";
import Countdown from "react-countdown";
import {IconButton} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import ModalExamSubmit from "./components/ModalExamSubmit";
import ModalExamEnd from "./components/ModalExamEnd";

function TakingExam() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const exam = useSelector(state => state.exam.exam);
    const history = useHistory();
    const [openSubmitModal, setOpenSubmitModal] = useState(false);
    const [openExitModal, setOpenExitModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        if(Boolean(id)) {
            dispatch(examAction.fetchExam(id));
        }
    }, [])


    const closeSubmitModal = () => {
        setOpenSubmitModal(false)
    }

    const closeExitModal = () => {
        setOpenExitModal(false)
    }

    const submitAnswers = () => {


    }

    return (
        <>
            <div className={'container p-5 mt-3'}>
                <div className={'row'}>
                    <div className={'mb-2 col-6'}>
                        <IconButton size={'small'} className={'mb-1'} style={{marginRight: '10px'}}>
                            <WestIcon fontSize={'small'}  onClick={() => setOpenExitModal(true)}/>
                        </IconButton>
                        <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7}}/>
                        <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)'}}>End Exam</span>
                    </div>
                    <div className={'mb-2 col-6 ml-5 d-flex justify-content-end'}>
                        <IconButton size={'small'} className={'mb-1'} style={{marginRight: '7px'}}>
                            <EastIcon fontSize={'small'}  onClick={() => setOpenSubmitModal(true)}/>
                        </IconButton>
                        <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7, height: '22px', marginTop: '4px'}}/>
                        <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)' , marginRight: 7, marginTop: '3px'}}>Submit Answers</span>
                    </div>
                </div>
                <div className={`container p-3`} style={{backgroundColor: 'rgba(255,255,255)' , height: '600px'}}>
                    <div className={`row`}>
                        <div className={'col-10'}></div>
                        <div className={'col-2 d-flex justify-content-end'}>
                            <Countdown
                                date={Date.now() + 1800000}
                                onComplete={submitAnswers}
                            />
                        </div>
                    </div>
                </div>

            </div>
            <ModalExamSubmit show={openSubmitModal} closeModal={closeSubmitModal}/>
            <ModalExamEnd show={openExitModal} closeModal={closeExitModal}/>
        </>

    )
}
export default TakingExam;