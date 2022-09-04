import MenuTopBar from "./components/pageElements/MenuTopBar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {examAction} from "../redux/action/examAction";
import {useStyles} from "../factory/StyleFactory";
import {examViewStyle} from "./style/ExamViewStyle";
import {useHistory} from "react-router-dom";
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';

function ExamView() {
    const dispatch = useDispatch();
    const exams = useSelector(state => state.exam.exams);
    const classes = useStyles(examViewStyle);
    const history = useHistory();



    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(examAction.fetchExams());
    }, [])


    return (
        <>
            <MenuTopBar active={'Exam'}/>
            <div className={`${classes.bodyStyle} p-3`}>
                <div className={'container'} style={{marginTop: 70}}>
                    <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.55)'}}>PowerBI - Desktop</span>
                    {exams && exams.map((exam) => {
                        return (
                            <div style={{borderRadius: '13px', backgroundColor: 'rgba(255,255,255)', height: '200px', cursor: 'pointer', width: '31%', boxShadow: 'box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px', position: 'relative'}} className={`col-3 ${classes.greyHover}`}
                            onClick={() => history.push("/exams/" + exam.id)}>
                                <div className={'row mt-3'}>

                                </div>
                                <div className={'row mt-5 d-flex m-auto'}>
                                    <div className={'col-2 pt-4 d-flex justify-content-center m-auto'} style={{marginTop: '50%'}}>
                                        <div style={{height: '50px', width: '50px', position: 'relative'}}>
                                            <div style={{height: '25px', width: '25px', backgroundColor: 'rgba(229, 170, 10)', borderRadius: '50%', alignSelf: 'center', margin: 'auto'}} className={'align-items-center'}></div>
                                            <div style={{position: 'absolute', top:'-10px', right: '3%'}}>
                                                <StickyNote2OutlinedIcon fontSize={'small'} sx={{color: 'rgba(0,0,0,.65)', fontSize: '25px'}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col-10  m-auto'} style={{paddingLeft: '0px', marginTop: '100px'}} >
                                             <span style={{fontSize: '18px', fontFamily: "system-ui", color: 'rgba(0,0,0,.8)', textAlign: 'center', cursor: 'pointer'}}>
                                                {exam.name}
                                             </span>
                                        <h5>{exam.level}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>


        </>
    )
}
export default ExamView;