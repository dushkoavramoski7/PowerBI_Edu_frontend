import {IconButton} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {useEffect} from "react";
import {coursesAction} from "../redux/action/coursesAction";
import logo from './../img/power-bi-diagram.png';

function LearnView1() {
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
        <div className={'container p-5 mt-3'} >
            <div className={'row'}>
            <div className={'mb-2 col-6'}>
                <IconButton size={'small'} className={'mb-1'} style={{marginRight: '10px'}}>
                    <WestIcon fontSize={'small'}  onClick={() => history.push("/courses/" + course.id)}/>
                </IconButton>
                <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7}}/>
                <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)'}}>{course.name} - Course</span>
            </div>
            <div className={'mb-2 col-6 ml-5 d-flex justify-content-end'}>
                <IconButton size={'small'} className={'mb-1'} style={{marginRight: '7px'}}>
                    <EastIcon fontSize={'small'}  onClick={() => history.push("/courses/learn2/" + course.id)}/>
                </IconButton>
                <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7, height: '22px', marginTop: '4px'}}/>
                <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)' , marginRight: 7, marginTop: '3px'}}>Learning Page - 2</span>
            </div>
            </div>
            <div className={`container p-3`}  style={{backgroundColor: 'rgba(255,255,255)' , height: '770px'}}>
                <p className={'text-center'} style={{color: 'rgba(0,0,0,.65)', fontSize: '20px'}}>Introduction to dashboards for Power BI designers (1/3)</p>
                <div className={'row text-center'}>
                    <div className={'col-6'} style={{
                        textAlign: 'justify',
                        overflow: 'hidden',
                        color: 'rgba(0,0,0,.55)'
                    }}>
                        A <b>Power BI dashboard</b> is a single page, often called a canvas, that tells a story through visualizations. Because it's limited to one page, a well-designed dashboard contains only the highlights of that story. Readers can view related reports for the details.
                        Dashboards are a feature of the Power BI service only. They're not available in Power BI Desktop. Although you can't create dashboards on mobile devices, you can <a href={"https://docs.microsoft.com/en-us/power-bi/consumer/mobile/mobile-apps-view-dashboard"} target={"_blank"}>view and share them</a> there.
                        <br/>
                        <br/>
                        <div className={" text-center"}>
                        <img src={logo}  className="d-inline-block align-top p-2 text-center" alt=""/>
                        </div>

                        <p style={{color: 'rgba(229, 170, 10, .8)', fontSize: '18px'}}>Advantages of dashboards</p>
                        Dashboards are a wonderful way to monitor your business and see all of your most important metrics at a glance.
                        The visualizations on a dashboard can come from one underlying dataset or many, and from one underlying report or many.
                    </div>
                    <div className={'col-6 text-center'} style={{
                        textAlign: 'justify',
                        overflow: 'hidden',
                        color: 'rgba(0,0,0,.55)'
                    }}>
                        <div style={{
                            textAlign: 'justify',
                            overflow: 'hidden',
                            color: 'rgba(0,0,0,.55)'
                        }}>
                              A dashboard combines on-premises and cloud data, providing a consolidated view regardless of where the data lives.
                            A dashboard isn't just a pretty picture. It's highly interactive and the tiles update as the underlying data changes.

                            <p style={{color: 'rgba(229, 170, 10, .8)', fontSize: '18px'}}>Dashboard basics</p>
                            The visualizations you see on the dashboard are called tiles. You pin tiles to a dashboard from reports. If you're new to Power BI, you can get a good foundation <a href={"https://docs.microsoft.com/en-us/power-bi/fundamentals/service-basic-concepts"} target={"_blank"}>by reading Basic concepts for designers in the Power BI service </a>.

                            The visualizations on a dashboard originate from reports and each report is based on a dataset. One way to think of a dashboard is as an entryway to the underlying reports and datasets. Selecting a visualization takes you to the report (and dataset) that it's based on.

                        </div>
                        <br/>
                        <br/>

                        <div className={'row'}>
                            <iframe width="100" height="280" src="https://www.youtube.com/embed/B_bAKrXAUh0"
                                    title="YouTube video player" frameBorder="2"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default LearnView1;