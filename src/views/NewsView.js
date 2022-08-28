import MenuTopBar from "./components/pageElements/MenuTopBar";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {newsAction} from "../redux/action/newsAction";
import {useStyles} from "../factory/StyleFactory";
import {newsViewStyle} from "./style/NewsViewStyle"
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import {Chip, Divider, IconButton} from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

function NewsView() {
    const dispatch = useDispatch();
    const classes = useStyles(newsViewStyle);
    const [expandDescriptionNews, setExpandDescriptionNews] = useState(false);
    const [selectedNews, setSelectedNews] = useState();

    const news = useSelector(state => state.news.news);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(newsAction.fetchNews());
    }, []);

    const expandDescription = (newsId) => {
        setSelectedNews(newsId);
        if (selectedNews === newsId) {
            setExpandDescriptionNews(!expandDescriptionNews);
        } else {
            setExpandDescriptionNews(true);
        }
    }

    return (
        <>
            <MenuTopBar active={'News'}/>
            <div className={`${classes.bodyStyle} p-3`}>
                <div className={'container pt-1'} style={{marginTop: 70}}>
                    <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.55)'}}>PowerBI - Desktop News</span>
                    <div className={'p-3'}>
                        {news && news.filter(item => item.service === 'PowerBI Desktop').map((item) => {
                            return (
                                <div className={'mb-3'}>
                                    <div className={'font-weight-bold w-100'}
                                         style={{color: 'rgba(229, 170, 10, .8)', fontWeight: 'bold'}}>{item.title}
                                        <span>
                                    {item.categories && item.categories.map((category) => (
                                        <span className={'p-1'}><Chip size={'small'} label={category}
                                                                      sx={{color: 'rgba(0,0,0,.35)'}}
                                                                      variant={'outlined'}/></span>
                                    ))}
                                        </span>
                                    </div>
                                    <div><EventAvailableRoundedIcon fontSize={'small'} color={'disabled'}/> <span
                                        style={{
                                            fontSize: '13px',
                                            color: 'rgba(0,0,0,.55)'
                                        }}><i>{item.formattedDatePublished}</i></span></div>
                                    <br/>
                                    {selectedNews !== item.id || (selectedNews === item.id && expandDescriptionNews === false) ?
                                        <div style={{
                                            textAlign: 'justify',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: '2',
                                            lineClamp: '2',
                                            WebkitBoxOrient: 'vertical',
                                            color: 'rgba(0,0,0,.55)'
                                        }}>
                                            {item.description}
                                        </div> : null}
                                    {selectedNews === item.id && expandDescriptionNews ?
                                        <div style={{
                                            textAlign: 'justify',
                                            color: 'rgba(0,0,0,.55)',
                                            textJustify: 'inter-word'
                                        }}>
                                            {item.description}
                                        </div> : null}
                                    <div><LinkRoundedIcon fontSize={'small'} sx={{color: 'rgba(229, 170, 10, .8)'}}/> <a
                                        style={{fontSize: '13px', color: 'rgba(229, 170, 10, .8)'}} href={item.link}
                                        target="_blank"> Link to news </a></div>
                                    <Divider textAlign="right">
                                        <IconButton size={'small'} onClick={() => {
                                            expandDescription(item.id)
                                        }}>
                                            {selectedNews !== item.id || (selectedNews === item.id && expandDescriptionNews === false) ?
                                                <KeyboardArrowDownRoundedIcon fontSize={'small'} color={'disabled'}/> :
                                                <KeyboardArrowUpRoundedIcon fontSize={'small'} color={'disabled'}/>}
                                        </IconButton>
                                    </Divider>
                                </div>
                            )
                        })}
                    </div>

                    {/* ---------------- */}

                    <span style={{borderLeft: '5px solid rgba(7, 144, 168)', marginRight: 7}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.55)'}}>PowerBI - Mobile News</span>
                    <div className={'p-3'}>
                        {news && news.filter(item => item.service === 'PowerBI Mobile').map((item, i) => {
                            return (
                                <div className={'mb-3'}>
                                    <div className={'font-weight-bold w-100'}
                                         style={{color: 'rgba(7, 144, 168)', fontWeight: 'bold'}}>{item.title}
                                        <span>
                                    {item.categories && item.categories.map((category) => (
                                        <span className={'p-1'}><Chip size={'small'} label={category}
                                                                      sx={{color: 'rgba(0,0,0,.35)'}}
                                                                      variant={'outlined'}/></span>
                                    ))}
                                        </span>
                                    </div>
                                    <div><EventAvailableRoundedIcon fontSize={'small'} color={'disabled'}/> <span
                                        style={{
                                            fontSize: '13px',
                                            color: 'rgba(0,0,0,.55)'
                                        }}><i>{item.formattedDatePublished}</i> </span></div>
                                    <br/>
                                    {selectedNews !== item.id || (selectedNews === item.id && expandDescriptionNews === false) ?
                                        <div style={{
                                            textAlign: 'justify',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: '2',
                                            lineClamp: '2',
                                            WebkitBoxOrient: 'vertical',
                                            color: 'rgba(0,0,0,.55)'
                                        }}>
                                            {item.description}
                                        </div> : null}
                                    {selectedNews === item.id && expandDescriptionNews ?
                                        <div style={{
                                            textAlign: 'justify',
                                            color: 'rgba(0,0,0,.55)',
                                            textJustify: 'inter-word'
                                        }}>
                                            {item.description}
                                        </div> : null}
                                    <div><LinkRoundedIcon fontSize={'small'} sx={{color: 'rgba(7, 144, 168, .8)'}}/> <a
                                        style={{fontSize: '13px', color: 'rgba(7, 144, 168, .8)'}} href={item.link}
                                        target="_blank"> Link to news </a></div>
                                    <Divider textAlign="right">
                                        <IconButton size={'small'} onClick={() => {
                                            expandDescription(item.id)
                                        }}>
                                            {selectedNews !== item.id || (selectedNews === item.id && expandDescriptionNews === false) ?
                                                <KeyboardArrowDownRoundedIcon fontSize={'small'} color={'disabled'}/> :
                                                <KeyboardArrowUpRoundedIcon fontSize={'small'} color={'disabled'}/>}
                                        </IconButton>
                                    </Divider>
                                </div>
                            )
                        })}
                    </div>

                    {/* ---------------- */}

                    <span style={{borderLeft: '5px solid rgba(168, 81, 10, .9)', marginRight: 7}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.55)'}}>PowerBI - Service News</span>
                    <div className={'p-3'}>
                        {news && news.filter(item => item.service === 'PowerBI Service').map((item, i) => {
                            return (
                                <div className={'mb-3'}>
                                    <div className={'font-weight-bold w-100'}
                                         style={{color: 'rgba(168, 81, 10, .9)', fontWeight: 'bold'}}>{item.title}
                                        <span>
                                         {item.categories && item.categories.map((category) => (
                                             <span className={'p-1'}><Chip size={'small'} label={category}
                                                                           sx={{color: 'rgba(0,0,0,.35)'}}
                                                                           variant={'outlined'}/></span>
                                         ))}
                                        </span>
                                    </div>
                                    <div><EventAvailableRoundedIcon fontSize={'small'} color={'disabled'}/> <span
                                        style={{
                                            fontSize: '13px',
                                            color: 'rgba(0,0,0,.55)'
                                        }}><i>{item.formattedDatePublished}</i></span></div>
                                    <br/>
                                    {selectedNews !== item.id || (selectedNews === item.id && expandDescriptionNews === false) ?
                                        <div style={{
                                            textAlign: 'justify',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: '2',
                                            lineClamp: '2',
                                            WebkitBoxOrient: 'vertical',
                                            color: 'rgba(0,0,0,.55)'
                                        }}>
                                            {item.description}
                                        </div> : null}
                                    {selectedNews === item.id && expandDescriptionNews ?
                                        <div style={{
                                            textAlign: 'justify',
                                            color: 'rgba(0,0,0,.55)',
                                            textJustify: 'inter-word'
                                        }}>
                                            {item.description}
                                        </div> : null}
                                    <div><LinkRoundedIcon fontSize={'small'} sx={{color: 'rgba(168, 81, 10, .6)'}}/> <a
                                        style={{fontSize: '13px', color: 'rgba(168, 81, 10, .6)'}} href={item.link}
                                        target="_blank"> Link to news </a></div>
                                    <Divider textAlign="right">
                                        <IconButton size={'small'} onClick={() => {
                                            expandDescription(item.id)
                                        }}>
                                            {selectedNews !== item.id || (selectedNews === item.id && expandDescriptionNews === false) ?
                                                <KeyboardArrowDownRoundedIcon fontSize={'small'} color={'disabled'}/> :
                                                <KeyboardArrowUpRoundedIcon fontSize={'small'} color={'disabled'}/>}
                                        </IconButton>
                                    </Divider>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewsView;