import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {examAction} from "../redux/action/examAction";
import Countdown from "react-countdown";
import {FormControlLabel, IconButton, Radio, RadioGroup} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import ModalExamSubmit from "./components/ModalExamSubmit";
import ModalExamEnd from "./components/ModalExamEnd";
import {useFormik} from "formik";

function TakingExam() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const exam = useSelector(state => state.exam.exam);
    const answers = useSelector(state => state.exam.answers);
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

    const changeAnswer = (questionId, value) => {
        dispatch(examAction.changeAnswer(questionId, value));
    }

    const formik = useFormik({
        enableReinitialize: true,
        onSubmit: values => {
            dispatch(examAction.submitAnswers(answers, exam.id, success => {
                history.push("/exams/result/" + Math.round(success))
                window.location.reload(false);
            }));
        }
    });

    return (
        <>
            <div className={'container p-5 mt-3'}>
                <div className={'row'}>
                    <div className={'mb-2 col-6'}>
                        <IconButton size={'medium'} className={'mb-1'} style={{marginRight: '10px'}}>
                            <WestIcon fontSize={'medium'}  onClick={() => setOpenExitModal(true)}/>
                        </IconButton>
                        <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7}}/>
                        <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)'}}>End Exam</span>
                    </div>
                    <div className={'mb-2 col-6 ml-5 d-flex justify-content-end'}>
                        <IconButton size={'medium'} className={'mb-1'} style={{marginRight: '7px'}}>
                            <EastIcon fontSize={'medium'}  onClick={() => setOpenSubmitModal(true)}/>
                        </IconButton>
                        <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7, height: '22px', marginTop: '8px'}}/>
                        <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)' , marginRight: 7, marginTop: '8px'}}>Submit Answers</span>
                    </div>
                </div>
                <div className={`container p-3`} style={{backgroundColor: 'rgba(255,255,255)' , height: '1800px'}}>
                    <div className={`row`}>
                        <div className={'col-2'}></div>
                        <div className={'col-8'}>
                            <p className={'text-center'} style={{color: 'rgba(229, 170, 10)', fontSize: '20px'}}>{exam.name} - Exam (1/1)</p>
                        </div>
                        <div className={'col-2 d-flex justify-content-end'}>
                            <Countdown
                                date={Date.now() + 1800000}
                                onComplete={submitAnswers}
                            />
                        </div>
                    </div>
                    <div className={'row'}>
                        {exam && exam?.questions?.map((question, i) => {
                            return (
                                <div className={'row'}>
                                    <div className={'col-2'}>

                                    </div>
                                    <div className={'col-8'} style={{
                                        textAlign: 'justify',
                                        overflow: 'hidden',
                                        color: 'rgba(0,0,0,.55)'
                                    }}>
                                            <span style={{
                                                fontWeight: 'bold'
                                            }}>
                                                {i+1}. {question.text}
                                            </span>
                                        <div className={'p-4'} style={{
                                            textAlign: 'justify',
                                            overflow: 'hidden',
                                            color: 'rgba(0,0,0,.55)'
                                        }}>
                                            <RadioGroup id="answers" name="answers" onChange={(e) => changeAnswer(question?.id, e?.target?.value)}>
                                            {question && question?.answers?.map((answer, j) => {
                                                return (
                                                        <div className={'row'}>
                                                            <FormControlLabel control={
                                                                <Radio sx={{
                                                                    color: 'grey',
                                                                    '&.Mui-checked': {
                                                                        color: 'rgba(229, 170, 10)',
                                                                    },
                                                                    '&:hover': {
                                                                        backgroundColor: 'rgba(229, 170, 10, 0.05)'
                                                                    },
                                                                }} size={'small'} />
                                                            } value={j+1} label={<span style={{ fontSize: '14px' }}>{answer}</span>}/>
                                                        </div>
                                                )
                                            })}
                                            </RadioGroup>

                                        </div>
                                    </div>

                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>
            <ModalExamSubmit show={openSubmitModal} closeModal={closeSubmitModal} formik={formik}/>
            <ModalExamEnd show={openExitModal} closeModal={closeExitModal}/>
        </>

    )
}
export default TakingExam;