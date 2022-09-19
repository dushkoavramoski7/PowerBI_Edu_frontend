import {coursesViewStyle} from "./style/CoursesViewStyle";
import {useStyles} from "../factory/StyleFactory";
import MenuTopBar from "./components/pageElements/MenuTopBar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {coursesAction} from "../redux/action/coursesAction";
import TurnedInNotRoundedIcon from '@mui/icons-material/TurnedInNotRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import {Chip} from "@mui/material";
import {useHistory, useParams} from "react-router-dom";
import {influencersAction} from "../redux/action/influencersAction";
import SnackbarAlert from "./components/SnackbarAlert";

function CoursesView() {
    const dispatch = useDispatch();
    const classes = useStyles(coursesViewStyle);
    const courses = useSelector(state => state.course.courses);
    const history = useHistory();
    const user = useParams();
    const [snackbarStatus, setSnackbarStatus] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(coursesAction.fetchCourses());
        dispatch(influencersAction.fetch());
        if(Boolean(user.user)) {
            setSnackbarStatus(true)
            setSnackbarMessage({
                message: 'Welcome!',
                subMessage: 'Have a fun time learning, ' + user.user + '!',
                status: 'success',
            })

        }
    }, []);
    return (
        <>
            <MenuTopBar active={'Courses'}/>
            <div className={`${classes.bodyStyle} p-3`}>
                <div className={'container'} style={{marginTop: 70}}>
                    <div>
                    <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.55)'}}>PowerBI - Desktop</span>
                    <div className={`row justify-content-around mt-3 `}>
                        {courses && courses.filter(item => item.service === 'PowerBI Desktop').map((course) => {
                            return(
                                <div style={{borderRadius: '13px', backgroundColor: 'rgba(255,255,255)', height: '200px', cursor: 'pointer', width: '31%', boxShadow: 'box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px', position: 'relative'}} className={`col-3 ${classes.greyHover} ${classes.greyBorderHover}`}
                                    onClick={() => history.push("/courses/" + course.id)}>
                                    <div className={'row mt-0'}>
                                        <div className={'col-2 pt-4 d-flex justify-content-center'}>
                                            <div style={{height: '50px', width: '50px', position: 'relative'}}>
                                                <div style={{height: '25px', width: '25px', backgroundColor: 'rgba(229, 170, 10)', borderRadius: '50%', alignSelf: 'center', margin: 'auto'}} className={'align-items-center'}></div>
                                                <div style={{position: 'absolute', top:'-10px', right: '3%'}}>
                                                    <TurnedInNotRoundedIcon fontSize={'small'} sx={{color: 'rgba(0,0,0,.65)', fontSize: '25px'}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'col-10 pt-4'} style={{paddingLeft: '0px'}}>
                                             <span style={{fontSize: '18px', fontFamily: "system-ui", color: 'rgba(0,0,0,.8)', textAlign: 'center', cursor: 'pointer'}}>
                                                {course.name}
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
                            )
                        })}
                    </div>
                    </div>

                    <div className={'mt-4'}>
                    <span style={{borderLeft: '5px solid rgba(7, 144, 168)', marginRight: 7}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.55)'}}>PowerBI - Mobile</span>
                    <div className={'row justify-content-around mt-3'}>
                        {courses && courses.filter(item => item.service === 'PowerBI Mobile').map((course) => {
                            return(
                                <div className={`col-3 ${classes.greyBorderHover}`} style={{borderRadius: '13px', backgroundColor: 'rgba(255,255,255)', height: '200px', cursor: 'pointer', width: '31%', boxShadow: 'box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px', position: 'relative'}}
                                     onClick={() => history.push("/courses/" + course.id)}>
                                    <div className={'row mt-0'}>
                                        <div className={'col-2 pt-4 d-flex justify-content-center'}>
                                            <div style={{height: '50px', width: '50px', position: 'relative'}}>
                                                <div style={{height: '25px', width: '25px', backgroundColor: 'rgba(7, 144, 168)', borderRadius: '50%', alignSelf: 'center', margin: 'auto'}} className={'align-items-center'}></div>
                                                <div style={{position: 'absolute', top:'-10px', right: '3%'}}>
                                                    <TurnedInNotRoundedIcon fontSize={'small'} sx={{color: 'rgba(0,0,0,.65)', fontSize: '25px'}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'col-10 pt-4'} style={{paddingLeft: '0px'}}>
                                             <span style={{fontSize: '18px', fontFamily: "system-ui", color: 'rgba(0,0,0,.8)', textAlign: 'center', cursor: 'pointer'}}>
                                                {course.name}
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
                            )
                        })}
                        </div>
                    </div>

                    <div className={'mt-4'}>
                        <span style={{borderLeft: '5px solid rgba(168, 81, 10, .9)', marginRight: 7}}/>
                        <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.55)'}}>PowerBI - Service</span>
                        <div className={'row justify-content-around mt-3'}>
                            {courses && courses.filter(item => item.service === 'PowerBI Service').map((course) => {
                                return(
                                    <div className={`col-3 ${classes.greyBorderHover}`} style={{borderRadius: '13px', backgroundColor: 'rgba(255,255,255)', height: '200px', cursor: 'pointer', width: '31%', boxShadow: 'box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px', position: 'relative'}}
                                         onClick={() => history.push("/courses/" + course.id)}>
                                        <div className={'row mt-0'}>
                                            <div className={'col-2 pt-4 d-flex justify-content-center'}>
                                                <div style={{height: '50px', width: '50px', position: 'relative'}}>
                                                    <div style={{height: '25px', width: '25px', backgroundColor: 'rgba(168, 81, 10, .9)', borderRadius: '50%', alignSelf: 'center', margin: 'auto'}} className={'align-items-center'}></div>
                                                    <div style={{position: 'absolute', top:'-10px', right: '3%'}}>
                                                        <TurnedInNotRoundedIcon fontSize={'small'} sx={{color: 'rgba(0,0,0,.65)', fontSize: '25px'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'col-10 pt-4'} style={{paddingLeft: '0px'}}>
                                             <span style={{fontSize: '18px', fontFamily: "system-ui", color: 'rgba(0,0,0,.8)', textAlign: 'center', cursor: 'pointer'}}>
                                                {course.name}
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
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <SnackbarAlert snackbarStatus={snackbarStatus}
                           closeSnackbar={() => setSnackbarStatus(false)}
                           snackbarMessage={snackbarMessage}/>

        </>
    )
}
export default CoursesView;