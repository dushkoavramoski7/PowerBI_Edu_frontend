import {IconButton} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {useEffect} from "react";
import {coursesAction} from "../redux/action/coursesAction";

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
        <div className={'container p-5 mt-3'}>
            <div className={'row'}>
                <div className={'mb-2 col-6'}>
                    <IconButton size={'small'} className={'mb-1'} style={{marginRight: '10px'}}>
                        <WestIcon fontSize={'small'}  onClick={() => history.push("/courses/learn2/" + course.id)}/>
                    </IconButton>
                    <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)'}}>Learning Page - 1</span>
                </div>
            </div>
            <div className={`container p-3`}  style={{backgroundColor: 'rgba(255,255,255)' , height: '700px'}}>
                <p className={'text-center'} style={{color: 'rgba(0,0,0,.65)', fontSize: '20px'}}>Hands-on Experience with PowerBI Dashboard (3/3)</p>
                <p className={'text-center'} style={{color: 'rgba(0,0,0,.55)'}}>Login to PowerBI Report Server to view this example dashboard</p>
                <iframe title="5 Chas Power BI" width="1140" height="541.25"
                        src="https://app.powerbi.com/reportEmbed?reportId=2545de6f-18b9-4940-8979-d0f65f990477&autoAuth=true&ctid=f0cac47b-e2b3-4e1b-a52f-487d2d996288"
                        frameBorder="0" allowFullScreen="true"></iframe>
            </div>
        </div>
    )
}
export default LearnView3;