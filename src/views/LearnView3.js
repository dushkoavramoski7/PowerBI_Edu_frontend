import {IconButton} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {useEffect} from "react";
import {coursesAction} from "../redux/action/coursesAction";
import EastIcon from "@mui/icons-material/East";

function LearnView3() {
    const course = useSelector(state => state.course.course);
    const history = useHistory();
    const {id} = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        window.scrollTo(0, 0);
        if(Boolean(id)) {
            dispatch(coursesAction.fetchCourse(id));
        }
    }, [])

    return (
        <div className={'container p-5'} style={{marginTop: '-25px'}}>
            <div className={'row'}>
                <div className={'mb-2 col-6'}>

                </div>
                <div className={'mb-2 col-6 ml-5 d-flex justify-content-end'}>
                    <IconButton size={'medium'} className={'mb-1'} style={{marginRight: '7px'}}>
                        <EastIcon fontSize={'medium'}  onClick={() => history.push("/courses")}/>
                    </IconButton>
                    <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7, height: '22px', marginTop: '8px'}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)' , marginRight: 7, marginTop: '8px'}}>Courses</span>
                </div>

            </div>
            <div className={'row'}>
                <div className={'mb-2 col-6'}>
                    <IconButton size={'medium'} className={'mb-1'} style={{marginRight: '10px'}}>
                        <WestIcon fontSize={'medium'}  onClick={() => history.push("/courses/learn2/" + course.id)}/>
                    </IconButton>
                    <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)'}}>Learning Page - 2</span>
                </div>
                <div className={'mb-2 col-6 ml-5 d-flex justify-content-end'}>
                    <IconButton size={'medium'} className={'mb-1'} style={{marginRight: '7px'}}>
                        <EastIcon fontSize={'medium'}  onClick={() => history.push("/exams")}/>
                    </IconButton>
                    <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7, height: '22px', marginTop: '8px'}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)' , marginRight: 7, marginTop: '8px'}}>Exams</span>
                </div>

            </div>
            <div className={`container p-3`}  style={{backgroundColor: 'rgba(255,255,255)' , height: '700px'}}>
                <p className={'text-center'} style={{color: 'rgba(0,0,0,.65)', fontSize: '20px'}}>Hands-on Experience with PowerBI Dashboard (3/3)</p>
                <p className={'text-center'} style={{color: 'rgba(0,0,0,.55)'}}>Login to PowerBI Report Server to view this example dashboard</p>
                <iframe title="5 Chas Power BI" height="541.25" style={{width: '100%'}}
                        src="https://app.powerbi.com/reportEmbed?reportId=2545de6f-18b9-4940-8979-d0f65f990477&autoAuth=true&ctid=f0cac47b-e2b3-4e1b-a52f-487d2d996288"
                        frameBorder="0" allowFullScreen="true"></iframe>
            </div>
        </div>
    )
}
export default LearnView3;