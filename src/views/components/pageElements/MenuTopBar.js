import logo from '../../../img/logo.png';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import {IconButton, Tooltip, Zoom} from "@mui/material";
import {useStyles} from "../../../factory/StyleFactory";
import {menuTopBarStyle} from "./style/MenuTopBarStyle";
import {Link, useHistory} from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";

function MenuTopBar({active}) {
    const classes = useStyles(menuTopBarStyle);
    const [anchorEl, setAnchorEl] = useState();
    const history = useHistory();
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-2 position-fixed w-100" style={{zIndex: '900'}}>
                <Link to={"/courses"} className="navbar-brand m-0">
                    <img src={logo} style={{height: 40, width: 40}} className="d-inline-block align-top p-2" alt=""/>
                </Link>
                <Link to={"/courses"} className={`${classes.mainColorText} ${classes.mainFont} ${classes.hoverStyleLogo} nav-link`} style={{fontSize: 18}}><span className={`${classes.mainColorText}`}>PowerBI - <b>Edu</b></span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
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
                    <li className="nav-item">
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
                <div className="d-flex justify-content-around">
                    <Tooltip TransitionComponent={Zoom} title="Here goes notifications about new updates" arrow>
                        <IconButton size={'medium'}>
                            <NotificationsRoundedIcon color={'disabled'} fontSize={'medium'}/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="Here goes info about all pages" arrow>
                        <IconButton size={'medium'}>
                            <InfoRoundedIcon color={'disabled'} fontSize={'medium'}/>
                        </IconButton>
                    </Tooltip>

                     <IconButton size={'medium'}
                                 id="basic-button"
                                 aria-controls={open ? 'basic-menu' : undefined}
                                 aria-haspopup="true"
                                 aria-expanded={open ? 'true' : undefined}
                                 onClick={handleClick}>
                         <PersonOutlineRoundedIcon color={'disabled'} fontSize={'medium'}/>
                     </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => history.push("/login")}>Logout</MenuItem>
                        <MenuItem onClick={handleClose} disabled={true}>Profile</MenuItem>
                        <MenuItem onClick={handleClose} disabled={true}>My account</MenuItem>

                    </Menu>
                </div>
            </div>
        </nav>
    )
}
export default MenuTopBar;