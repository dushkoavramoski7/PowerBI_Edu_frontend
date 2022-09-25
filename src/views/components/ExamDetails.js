import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useStyles} from "../../factory/StyleFactory";
import {examViewStyle} from "../style/ExamViewStyle";
import {useEffect, useState} from "react";
import {examAction} from "../../redux/action/examAction";
import {Alert, AlertTitle, Button, IconButton} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import StartIcon from "@mui/icons-material/Start";
import ModalExamStart from "./ModalExamStart";

function ExamDetails() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const exam = useSelector(state => state.exam.exam);
    const history = useHistory();
    const classes = useStyles(examViewStyle);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        if(Boolean(id)) {
            dispatch(examAction.fetchExam(id));
        }
    }, [])

    const closeModal =() => {
        setOpenModal(false);
    }

    return (
        <>
            <div className={'container p-5 mt-3'}>
                <div className={'mb-2'}>
                    <IconButton size={'medium'} className={'mb-1'} style={{marginRight: '10px'}}>
                        <WestIcon fontSize={'medium'}  onClick={() => history.push("/exams")}/>
                    </IconButton>
                    <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)'}}>Exams</span>
                </div>

                <div className={`container p-3`} style={{backgroundColor: 'rgba(255,255,255)' , height: '600px'}}>
                    <div className={`row`} >
                        <div className={'col-4'} style={{fontSize: '14px'}}>
                            <div className={`row ${classes.border} d-flex`} style={{height: '15%'}}>
                                <div className={'col-6 m-auto'}>
                                    Created Date:
                                </div>
                                <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                    {exam.formattedDateCreated}
                                </div>
                            </div>
                            <div className={`row ${classes.border} d-flex`} style={{height: '15%'}}>
                                <div className={'col-6 m-auto'}>
                                    Category:
                                </div>
                                <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                    {exam.service}
                                </div>
                            </div>
                            <div className={`row ${classes.border} d-flex`} style={{height: '15%'}}>
                                <div className={'col-6 m-auto'}>
                                    Students taken:
                                </div>
                                <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                    {exam.studentsTakenExam}
                                </div>
                            </div>
                            <div className={`row ${classes.border} d-flex`}>
                                <div>
                                    About exam:
                                    <br/>
                                    <br/>
                                    <span style={{color: 'rgba(0,0,0,.55)'}}>
                                    {exam.shortDescription}
                                </span>
                                </div>
                            </div>
                            <div className={`row ${classes.border} d-flex`} style={{height: '15%'}}>
                                <div className={'col-6 m-auto'}>
                                    Level:
                                </div>
                                <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}} >
                                    {exam.level}
                                </div>
                            </div>
                            <div className={`row ${classes.border} d-flex`} style={{height: '15%'}}>
                                <div className={'col-6 m-auto'}>
                                    For:
                                </div>
                                <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                    {exam.examFor}
                                </div>
                            </div>
                            <div className={`row ${classes.border} d-flex`} style={{height: '29%'}}>
                                <div className={`col-4  m-auto`}>
                                    <div className={'row d-flex justify-content-center m-auto'}>
                                        Time
                                    </div>
                                    <div className={'row justify-content-center m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                        {exam.timeToComplete}
                                    </div>

                                </div>
                                <div className={`col-4 m-auto`}>
                                    <div className={'row d-flex justify-content-center m-auto'}>
                                        Rating
                                    </div>
                                    <div className={'row justify-content-center m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                        {exam.rating}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-8 '} style={{height: '100%'}}>
                            <div className={'row'}>
                                <div className={'col-8 mt-2'}>
                                <span className={'font-weight-bold w-100 p-2'}
                                      style={{color: 'rgba(229, 170, 10, .8)', fontWeight: 'bold', fontSize: '20px'}}>{exam.name}
                                </span>
                                </div>
                                <div className={'col-4 d-flex justify-content-end mb-2'}>
                                    <Button variant="outlined"
                                            sx={{color: 'rgba(229, 170, 10)',
                                                borderColor: 'rgba(229, 170, 10)',
                                                marginTop: '8px',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(229, 170, 10,.035)',
                                                    borderColor: 'rgba(229, 170, 10)',
                                                    boxShadow: 'none',
                                                }}}
                                            endIcon={<StartIcon fontSize={'small'} sx={{color: 'rgba(229, 170, 10)', }} />}
                                            onClick={() => setOpenModal(true)}>
                                        TAKE EXAM
                                    </Button>
                                </div>
                            </div>
                            <div className={'row p-2'}>
                                <br/>
                                <br/>
                                <div style={{
                                    textAlign: 'justify',
                                    overflow: 'hidden',
                                    color: 'rgba(0,0,0,.55)'
                                }}>
                                    {exam.aboutExam}
                                </div>
                            </div>
                            <div className={'row p-2'}>
                                <Alert severity="success">
                                    <AlertTitle><b>Tips</b></AlertTitle>
                                    <ul>
                                        {exam.tips && exam.tips.map((tip) => {
                                            return (
                                                <li className={'p-1'}>{tip}</li>
                                            )
                                        })}
                                    </ul>
                                </Alert>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalExamStart show={openModal} closeModal={closeModal} examId={id} />
        </>
    )
}
export default ExamDetails;