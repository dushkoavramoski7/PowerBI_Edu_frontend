import {useStyles} from "../factory/StyleFactory";
import {examViewStyle} from "./style/ExamViewStyle";
import logo from "../img/power-bi-dashboard-design-course-sample.png"
import {IconButton} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import {useHistory} from "react-router-dom";

function Certificate() {
    const classes = useStyles(examViewStyle);
    const history = useHistory();

    return (
        <>
            <div className={`${classes.bodyStyle} p-2`}>
                <div className={'container'} style={{marginTop: 70}}>
                    <div className={'row'}>
                        <div className={'mb-2 col-6'}>
                            <IconButton size={'medium'} className={'mb-1'} style={{marginRight: '10px'}}>
                                <WestIcon fontSize={'medium'}  onClick={() => history.push("/exams")}/>
                            </IconButton>
                            <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7}}/>
                            <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.75)'}}>Exams</span>
                        </div>
                    </div>
                    <img src={logo}  className="d-inline-block align-top p-2 text-center" alt=""/>
                </div>
            </div>
        </>
    )
}
export default Certificate;