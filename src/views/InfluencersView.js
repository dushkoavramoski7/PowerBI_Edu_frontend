import MenuTopBar from "./components/pageElements/MenuTopBar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {influencersAction} from "../redux/action/influencersAction";
import {useStyles} from "../factory/StyleFactory";
import {influencersViewStyle} from "./style/InfluencersViewStyle";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {Divider, IconButton} from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";

function InfluencersView() {
    const dispatch = useDispatch();
    const classes = useStyles(influencersViewStyle);
    const channels = useSelector(state => state.influencer.channels);
    const [selectedInfluencer, setSelectedInfluencer] = useState();
    const [expandDescription, setExpandDescription] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(influencersAction.fetch());
    }, []);

    const expandDescriptionInfluencer = (newsId) => {
        setSelectedInfluencer(newsId);
        if (selectedInfluencer === newsId) {
            setExpandDescription(!expandDescription);
        } else {
            setExpandDescription(true);
        }
    }

    return (
        <>
            <MenuTopBar active={'Influencers'}/>
            <div className={`${classes.bodyStyle} p-2`}>
                <div className={'container'} style={{marginTop: 70}}>
            {channels && channels.map((item) => {
                return (
                    <div className={'row d-flex justify-content-around'}>
                        <div className={'col-3 p-3 text-center align-middle'}>
                            <AccountCircleOutlinedIcon color={'disabled'} sx={{fontSize: '200px'}} />
                        </div>
                        <div className={'col-8 p-3'}>
                            <div className={'font-weight-bold w-100'}
                                 style={{color: 'rgba(229, 170, 10, .8)', fontWeight: 'bold'}}>{item.fullName}
                            </div>
                            <br/>
                            <div>
                                {selectedInfluencer !== item.id || (selectedInfluencer === item.id && expandDescription === false) ?
                                    <div style={{
                                        textAlign: 'justify',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: '5',
                                        lineClamp: '5',
                                        WebkitBoxOrient: 'vertical',
                                        color: 'rgba(0,0,0,.55)'
                                    }}>
                                        {item.description}
                                    </div> : null}
                                {selectedInfluencer === item.id && expandDescription ?
                                    <div style={{
                                        textAlign: 'justify',
                                        color: 'rgba(0,0,0,.55)',
                                        textJustify: 'inter-word'
                                    }}>
                                        {item.description}
                                    </div> : null}
                                <br/>
                                <div><LinkRoundedIcon fontSize={'small'} sx={{color: 'rgba(229, 170, 10, .8)'}}/> <a
                                    style={{fontSize: '14px', color: 'rgba(229, 170, 10, .8)'}} href={item.channels[0].split('--')[1]}
                                    target="_blank">YouTube channel </a></div>
                                <Divider textAlign="right">
                                    <IconButton size={'small'} onClick={() => {
                                        expandDescriptionInfluencer(item.id)
                                    }}>
                                        {selectedInfluencer !== item.id || (selectedInfluencer === item.id && expandDescription === false) ?
                                            <KeyboardArrowDownRoundedIcon fontSize={'small'} color={'disabled'}/> :
                                            <KeyboardArrowUpRoundedIcon fontSize={'small'} color={'disabled'}/>}
                                    </IconButton>
                                </Divider>
                            </div>
                        </div>
                    </div>
                )
            })}
                </div>
            </div>

        </>
    )
}
export default InfluencersView;