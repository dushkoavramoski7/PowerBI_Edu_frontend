import logo from '../../../img/logo.png';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import {IconButton} from "@mui/material";
import {useStyles} from "../../../factory/StyleFactory";
import {menuTopBarStyle} from "./style/MenuTopBarStyle";
import {Link} from "react-router-dom";

function MenuTopBar({active}) {
    const classes = useStyles(menuTopBarStyle);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
            <a className="navbar-brand m-0" href="src/views/components/pageElements/MenuTopBar#">
                <Link to={"/courses"}>
                    <img src={logo} style={{height: 40, width: 40}} className="d-inline-block align-top p-1" alt=""/>
                </Link>
            </a>
                <Link to={"/courses"} className={`${classes.mainColorText} ${classes.mainFont} ${classes.hoverStyleLogo} nav-link`} style={{fontSize: 19}}><span className={`${classes.mainColorText}`}>PowerBI - <b>Edu</b></span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarText">
                <ul className={`${classes.menuItemHover} navbar-nav d-flex justify-content-around w-100`}>
                    <li className="nav-item">
                        <Link to={'/courses'}
                              className={active === 'Courses' ? `nav-link ${classes.menuItemSelected}` : `nav-link`}>
                            Courses
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/learningPath'}
                              className={active === 'LearningPath' ? `nav-link ${classes.menuItemSelected}` : `nav-link`}>
                            Learning Path
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/exams'}
                              className={active === 'Exam' ? `nav-link ${classes.menuItemSelected}` : `nav-link`}>
                            Exam
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to={'/DAXFunctions'}
                              className={active === 'DaxFunctions' ? `nav-link ${classes.menuItemSelected}` : `nav-link`}>
                            DAX Functions
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/documentations'}
                              className={active === 'Documentations' ? `nav-link ${classes.menuItemSelected}` : `nav-link`}>
                            Documentations
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/news'}
                              className={active === 'News' ? `nav-link ${classes.menuItemSelected}` : `nav-link`}>
                            News - PowerBI
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/community'}
                              className={active === 'Community' ? `nav-link ${classes.menuItemSelected}` : `nav-link`}>
                            Community
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/influencers'}
                              className={active === 'Influencers' ? `nav-link ${classes.menuItemSelected}` : `nav-link`}>
                            Influencers
                        </Link>
                    </li>
                </ul>
            </div>
                <div className="d-flex justify-content-end" id="navbarText">
                    <IconButton size={'medium'}>
                        <NotificationsRoundedIcon color={'disabled'} fontSize={'medium'}/>
                    </IconButton>
                    <IconButton size={'medium'}>
                        <InfoRoundedIcon color={'disabled'} fontSize={'medium'}/>
                    </IconButton>
                    <IconButton size={'medium'}>
                        <PersonOutlineRoundedIcon color={'disabled'} fontSize={'medium'}/>
                    </IconButton>
                </div>
            </div>
        </nav>
    )
}
export default MenuTopBar;