import MenuTopBar from "./components/pageElements/MenuTopBar";
import {useEffect, useState} from "react";
import {coursesAction} from "../redux/action/coursesAction";
import {useDispatch, useSelector} from "react-redux";
import {useStyles} from "../factory/StyleFactory";
import {coursesViewStyle} from "./style/CoursesViewStyle";
import {Chip, IconButton} from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import {useHistory} from "react-router-dom";

function LearningPathView() {
    const dispatch = useDispatch();
    const classes = useStyles(coursesViewStyle);
    const learningPaths = useSelector(state => state.course.learningPaths);
    const [startOffset, setStartOffset] = useState(0);
    const [startOffset1, setStartOffset1] = useState(0);
    const history = useHistory();


    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(coursesAction.fetchLearningPaths());
    }, []);


    const showCourses = (learningPath) => {
        let courses = [];
        {
            learningPath?.courses && learningPath?.courses.slice(startOffset, startOffset + 2).map((course, i) => {
                courses.push(
                    <div className={`col-5`}>
                        <div style={{borderRadius: '13px', backgroundColor: 'rgba(255,255,255)', height: '200px', cursor: 'pointer', width: '100%', boxShadow: 'box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px', position: 'relative'}} className={`col-3 ${classes.greyHover}`}
                             onClick={() => history.push("/courses/" + course.id)}>
                            <div className={'row mt-0'}>
                                <div className={'col-2 pt-4 d-flex justify-content-center'}>
                                    <div style={{height: '50px', width: '50px', position: 'relative'}}>
                                        {course.service === "PowerBI Desktop" ?
                                            <div style={{height: '25px', width: '25px', backgroundColor: 'rgba(229, 170, 10)', borderRadius: '50%', alignSelf: 'center', margin: 'auto'}} className={'align-items-center'}></div> :
                                            course.service === "PowerBI Mobile" ?
                                                <div style={{height: '25px', width: '25px', backgroundColor: 'rgba(7, 144, 168)', borderRadius: '50%', alignSelf: 'center', margin: 'auto'}} className={'align-items-center'}></div> :
                                                <div style={{height: '25px', width: '25px', backgroundColor: 'rgba(168, 81, 10, .9)', borderRadius: '50%', alignSelf: 'center', margin: 'auto'}} className={'align-items-center'}></div> }                                        <div style={{position: 'absolute', top:'-10px', right: '3%'}}>
                                            <TurnedInNotRoundedIcon fontSize={'small'} sx={{color: 'rgba(0,0,0,.65)', fontSize: '25px'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-10 pt-4'} style={{paddingLeft: '0px'}}>
                                             <span style={{fontSize: '18px', fontFamily: "system-ui", color: 'rgba(0,0,0,.8)', textAlign: 'center', cursor: 'pointer'}}>
                                                {course.name} <br/>
                                                 <i style={{fontSize: '14px'}}>{course.service}</i>
                                             </span>
                                </div>
                            </div>

                            <div style={{position: 'absolute', top:'1%', right: '3%'}}>
                                <div>
                                    {Array.from(Array(Math.round(course.rating)), (e, i) => {
                                        return <span key={i}><StarRoundedIcon  sx={{color: 'rgba(0,0,0,.65)', fontSize:'15px'}}/> </span>
                                    })}
                                </div>
                                <div className={'text-center'} style={{fontSize: '10px'}}>
                                    {course.timeToComplete}
                                </div>
                            </div>
                            <div style={{position: 'absolute', top:'1%', left: '3%'}}>
                                <div>
                                    {i+1 + startOffset}
                                </div>
                            </div>
                            <div className={'row'} style={{fontSize: '13px'}}>
                                <div className={'col-1 text-left'}></div>
                                <div className={'col-10 text-left'}  style={{marginBottom: '-13px'}}>
                                    Modules:
                                    <ul>
                                        {course.topics.slice(0, 2).map((topic) => {
                                            return (
                                                <li>{topic.split("---")[0]}</li>
                                            )})
                                        }
                                        <li>...</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={'row d-flex justify-content-center'}>
                                <div className={'align-self-center justify-content-center d-flex'}>
                                    {course.categories && course.categories.map((category) => (
                                        <span className={'p-1'}>
                                                    <Chip size={'small'} label={category} sx={{color: 'rgba(0,0,0,.65)', padding: '7px'}}/>
                                                </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return courses;
    }
    const showCourses1 = (learningPath) => {
        let courses = [];
        {
            learningPath?.courses && learningPath?.courses.slice(startOffset1, startOffset1 + 2).map((course, i) => {
                courses.push(
                    <div className={`col-5`}>
                        <div style={{borderRadius: '13px', backgroundColor: 'rgba(255,255,255)', height: '200px', cursor: 'pointer', width: '100%', boxShadow: 'box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px', position: 'relative'}} className={`col-3 ${classes.greyHover}`}
                             onClick={() => history.push("/courses/" + course.id)}>
                            <div className={'row mt-0'}>
                                <div className={'col-2 pt-4 d-flex justify-content-center'}>
                                    <div style={{height: '50px', width: '50px', position: 'relative'}}>
                                        {course.service === "PowerBI Desktop" ?
                                        <div style={{height: '25px', width: '25px', backgroundColor: 'rgba(229, 170, 10)', borderRadius: '50%', alignSelf: 'center', margin: 'auto'}} className={'align-items-center'}></div> :
                                            course.service === "PowerBI Mobile" ?
                                                <div style={{height: '25px', width: '25px', backgroundColor: 'rgba(7, 144, 168)', borderRadius: '50%', alignSelf: 'center', margin: 'auto'}} className={'align-items-center'}></div> :
                                                    <div style={{height: '25px', width: '25px', backgroundColor: 'rgba(168, 81, 10, .9)', borderRadius: '50%', alignSelf: 'center', margin: 'auto'}} className={'align-items-center'}></div> }
                                            <div style={{position: 'absolute', top:'-10px', right: '3%'}}>
                                            <TurnedInNotRoundedIcon fontSize={'small'} sx={{color: 'rgba(0,0,0,.65)', fontSize: '25px'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-10 pt-4'} style={{paddingLeft: '0px'}}>
                                             <span style={{fontSize: '18px', fontFamily: "system-ui", color: 'rgba(0,0,0,.8)', textAlign: 'center', cursor: 'pointer'}}>
                                                {course.name}
                                                 <br/>
                                                 <i style={{fontSize: '14px'}}>{course.service}</i>
                                             </span>
                                </div>
                            </div>

                            <div style={{position: 'absolute', top:'1%', right: '3%'}}>
                                <div>
                                    {Array.from(Array(Math.round(course.rating)), (e, i) => {
                                        return <span key={i}><StarRoundedIcon  sx={{color: 'rgba(0,0,0,.65)', fontSize:'15px'}}/> </span>
                                    })}
                                </div>
                                <div className={'text-center'} style={{fontSize: '10px'}}>
                                    {course.timeToComplete}
                                </div>
                            </div>
                            <div style={{position: 'absolute', top:'1%', left: '3%'}}>
                                <div>
                                    {i+1 + startOffset1}
                                </div>
                            </div>
                            <div className={'row'} style={{fontSize: '13px'}}>
                                <div className={'col-1 text-left'}></div>
                                <div className={'col-10 text-left'}  style={{marginBottom: '-13px'}}>
                                    Modules:
                                    <ul>
                                        {course.topics.slice(0, 2).map((topic) => {
                                            return (
                                                <li>{topic.split("---")[0]}</li>
                                            )})
                                        }
                                        <li>...</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={'row d-flex justify-content-center'}>
                                <div className={'align-self-center justify-content-center d-flex'}>
                                    {course.categories && course.categories.map((category) => (
                                        <span className={'p-1'}>
                                                    <Chip size={'small'} label={category} sx={{color: 'rgba(0,0,0,.65)', padding: '7px'}}/>
                                                </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return courses;
    }

    return (
        <>
            <MenuTopBar active={'LearningPath'}/>
            <div className={`${classes.bodyStyle} p-3 `}>
                <div className={'container'} style={{marginTop: 70, marginRight: 'auto', marginLeft: 'auto'}}>
                    <div className={'row mt-3 d-flex justify-content-between mb-5'}>
                        <div className={'text-center mb-2'} style={{fontSize: '22px', fontFamily: "system-ui", color: 'rgba(0,0,0,.8)', textAlign: 'center'}}>
                            {learningPaths[0]?.name}  <b style={{fontSize: '18px'}}> ({learningPaths[0]?.courses.length})</b>
                        </div>
                        <div className={`col-1 mt-5 mb-5`}>
                            <IconButton size={'large'} onClick={() => setStartOffset(curr => curr - 1)} disabled={startOffset - 1  < 0}>
                                <ChevronLeftRoundedIcon fontSize={'large'}/>
                            </IconButton>
                        </div>

                        {showCourses(learningPaths[0])}

                        <div className={`col-1 mt-5`}>
                            <IconButton size={'large'} onClick={() => setStartOffset(curr => curr + 1)} disabled={startOffset + 2  > learningPaths[0]?.courses?.length - 1}>
                                <ChevronRightRoundedIcon fontSize={'large'} />
                            </IconButton>
                        </div>
                    </div>

                    <div className={'row  d-flex justify-content-between mt-5'}>
                        <div className={'text-center mb-2'} style={{fontSize: '22px', fontFamily: "system-ui", color: 'rgba(0,0,0,.8)', textAlign: 'center'}}>
                            {learningPaths[1]?.name}  <b style={{fontSize: '18px'}}> ({learningPaths[1]?.courses.length})</b>
                        </div>
                        <div className={`col-1 mt-5`}>
                            <IconButton size={'large'} onClick={() => setStartOffset1(curr => curr - 1)} disabled={startOffset1 - 1  < 0}>
                                <ChevronLeftRoundedIcon fontSize={'large'}/>
                            </IconButton>
                        </div>

                        {showCourses1(learningPaths[1])}

                        <div className={`col-1 mt-5`}>
                            <IconButton size={'large'} onClick={() => setStartOffset1(curr => curr + 1)} disabled={startOffset1 + 2  > learningPaths[1]?.courses?.length - 1}>
                                <ChevronRightRoundedIcon fontSize={'large'} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LearningPathView;