import {useHistory, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {coursesAction} from "../../redux/action/coursesAction";
import WestIcon from '@mui/icons-material/West';
import {Button, IconButton} from "@mui/material";
import {useStyles} from "../../factory/StyleFactory";
import {coursesViewStyle} from "../style/CoursesViewStyle";
import StartIcon from '@mui/icons-material/Start';

function CourseDetails() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const course = useSelector(state => state.course.course);
    const history = useHistory();
    const classes = useStyles(coursesViewStyle);


    useEffect(() => {
        window.scrollTo(0, 0);
      if(Boolean(id)) {
          dispatch(coursesAction.fetchCourse(id));
      }
    }, [])

    return (
        <div className={'container p-5 mt-3'}>
            <div className={'mb-2'}>
                <IconButton size={'small'} className={'mb-1'} style={{marginRight: '10px'}}>
                    <WestIcon fontSize={'small'}  onClick={() => history.push("/courses")}/>
                </IconButton>
                <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7}}/>
                <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)'}}>Courses</span>
            </div>

            <div className={`container p-3`} style={{backgroundColor: 'rgba(255,255,255)' , height: '700px'}}>
                <div className={`row`} >
                    <div className={'col-4'} style={{fontSize: '14px'}}>
                        <div className={`row ${classes.border} d-flex`} style={{height: '8%'}}>
                            <div className={'col-6 m-auto'}>
                                Created Date:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                {course.formattedDateCreated}
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`} style={{height: '8%'}}>
                            <div className={'col-6 m-auto'}>
                                Category:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                {course.service}
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`} style={{height: '8%'}}>
                            <div className={'col-6 m-auto'}>
                                Students Enrolled:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                {course.studentsEnrolled}
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`}>
                            <div>
                                About course:
                                <br/>
                                <br/>
                                <span style={{color: 'rgba(0,0,0,.55)'}}>
                                    {course.aboutCourse}
                                </span>
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`} style={{height: '8%'}}>
                            <div className={'col-6 m-auto'}>
                                Level:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}} >
                                {course.level}
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`} style={{height: '8%'}}>
                            <div className={'col-6 m-auto'}>
                                For:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                {course.courseFor}
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`} style={{height: '8%'}}>
                            <div className={'col-6 m-auto'}>
                                Can take exam:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                {course.canTakeExam}
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`} style={{height: '20%'}}>
                            <div className={'col-6 m-auto'}>
                                Categories:
                            </div>
                            <div className={'col-6 m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                <ul>
                                    {course.categories && course.categories.map((category) => (
                                        <li className={'p-1'}>
                                            {category}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={`row ${classes.border} d-flex`} style={{height: '19%'}}>
                            <div className={`col-4  m-auto`}>
                                <div className={'row d-flex justify-content-center m-auto'}>
                                    Time
                                </div>
                                <div className={'row justify-content-center m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                    {course.timeToComplete}
                                </div>

                            </div>
                            <div className={`col-4  m-auto`}>
                                <div className={'row d-flex justify-content-center m-auto'}>
                                    Modules
                                </div>
                                <div className={'row justify-content-center m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                    {course.topics?.length}
                                </div>
                            </div>
                            <div className={`col-4 m-auto`}>
                                <div className={'row d-flex justify-content-center m-auto'}>
                                    Rating
                                </div>
                                <div className={'row justify-content-center m-auto'} style={{color: 'rgba(0,0,0,.55)'}}>
                                    {course.rating}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-8 '} style={{height: '100%'}}>
                        <div className={'row'}>
                            <div className={'col-6 mt-2'}>
                                <span className={'font-weight-bold w-100 p-2'}
                                     style={{color: 'rgba(229, 170, 10, .8)', fontWeight: 'bold', fontSize: '20px'}}>{course.name}
                                </span>
                            </div>
                            <div className={'col-6 d-flex justify-content-end mb-2'}>
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
                                        onClick={() => history.push("/courses/learn1/" + course.id)}>
                                    Start Learning
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
                                {course.longDescription}
                            </div>
                        </div>
                        <div className={'row p-2'}>
                            {course.topics?.map((topic, i) => {
                                return (
                                    <div className={`mb-2 ${classes.hoverMainColorBorder}`} style={{height: '60px', borderLeft: '5px solid rgba(0,0,0,.15)'}}
                                         onClick={() => history.push("/courses/learn1/" + course.id)}>
                                        <div style={{color: 'rgba(0,0,0,.55)', cursor: 'pointer'}} className={'justify-content-center align-self-center mt-2'}>
                                            <span style={{fontWeight: 'bold'}} onClick={() => history.push("/courses/learn1/" + course.id)}>{i+1}. {topic.split("---")[0]}</span>
                                            <br/>
                                            {topic.split("---")[1]}
                                        </div>
                                    </div>
                                )})
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default CourseDetails;