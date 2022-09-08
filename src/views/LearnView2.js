import {IconButton} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {useEffect} from "react";
import {coursesAction} from "../redux/action/coursesAction";
import logo1 from './../img/0_Rh-F_i-YHDkuyWhD.png';


function LearnView2() {
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
                    <IconButton size={'small'} className={'mb-1'} style={{marginRight: '7px'}}>
                        <EastIcon fontSize={'small'}  onClick={() => history.push("/courses")}/>
                    </IconButton>
                    <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7, height: '22px', marginTop: '4px'}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)' , marginRight: 7, marginTop: '3px'}}>Courses</span>
                </div>
            </div>
            <div className={'row'}>
                <div className={'mb-2 col-6'}>
                    <IconButton size={'small'} className={'mb-1'} style={{marginRight: '10px'}}>
                        <WestIcon fontSize={'small'}  onClick={() => history.push("/courses/learn1/" + course.id)}/>
                    </IconButton>
                    <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)'}}>Learning Page - 1</span>
                </div>
                <div className={'mb-2 col-6 ml-5 d-flex justify-content-end'}>
                    <IconButton size={'small'} className={'mb-1'} style={{marginRight: '7px'}}>
                        <EastIcon fontSize={'small'}  onClick={() => history.push("/courses/learn3/" + course.id)}/>
                    </IconButton>
                    <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7, height: '22px', marginTop: '4px'}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)' , marginRight: 7, marginTop: '3px'}}>Learning Page - 3</span>
                </div>
            </div>
            <div className={`container p-3`}  style={{backgroundColor: 'rgba(255,255,255)' , height: '770px'}}>
                <p className={'text-center'} style={{color: 'rgba(0,0,0,.65)', fontSize: '20px'}}>Explore Power BI Canvas (2/3)</p>

                <div className={'row'}>
                    <div className={'col-6'}>
                        <img src={logo1} style={{width: '100%'}}  className="d-inline-block align-top p-2 text-center" alt=""/>

                    </div>
                    <div className={'col-6'} style={{
                        textAlign: 'justify',
                        overflow: 'hidden',
                        color: 'rgba(0,0,0,.55)'
                    }}>
                        <ol>
                            <li style={{padding: '10px'}}>Ribbon — Displays common tasks that are associated with reports and visualizations.</li>
                            <li style={{padding: '10px'}}>Report view, or canvas — It is a place where visualizations are created and arranged. You can switch between Report, Data, and Model views by selecting the icons in the left column.</li>
                            <li style={{padding: '10px'}}>Pages tab — This area is where you would select or add a report page.</li>
                            <li style={{padding: '10px'}}>Visualizations pane — It is the pane where you can change visualizations, customize colours or axes, apply filters, drag fields, and more.</li>
                            <li style={{padding: '10px'}}>Fields pane — It is the pane where query elements and filters can be dragged onto the Report view or dragged to the Filters area of the Visualizations pane.</li>
                        </ol>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col'} style={{
                        textAlign: 'justify',
                        overflow: 'hidden',
                        color: 'rgba(0,0,0,.55)'
                    }}>
                        <p style={{color: 'rgba(229, 170, 10, .8)', fontSize: '18px'}}>How Power BI Desktop works</p>
                        With <b>Power BI Desktop</b>, you can:

                        <b>Connect to data</b>, including multiple data sources.
                        <b>Shape the data with queries that build insightful</b>, compelling data models.
                        Use the data models to <b>create visualizations and reports</b>.
                        <b>Share your report files</b> for others to leverage, build upon, and share. You can share Power BI Desktop .pbix files like any other files, but the most compelling method is to upload them to the Power BI service.
                        Power BI Desktop integrates proven Microsoft query engine, data modeling, and visualization technologies. Data analysts and others can create collections of queries, data connections, models, and reports, and easily share them with others. Through the combination of Power BI Desktop and the Power BI service, new insights from the world of data are easier to model, build, share, and extend.

                        Power BI Desktop centralizes, simplifies, and streamlines what can otherwise be a scattered, disconnected, and arduous process of designing and creating business intelligence repositories and reports. Ready to give it a try? Let's get started with hands-on experience working with PowerBI in the next page.

                    </div>
                </div>
            </div>
        </div>
    )
}
export default LearnView2;