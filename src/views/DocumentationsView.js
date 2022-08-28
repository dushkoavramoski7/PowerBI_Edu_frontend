import MenuTopBar from "./components/pageElements/MenuTopBar";
import {useStyles} from "../factory/StyleFactory";
import {documetnationsViewStyle} from "./style/DocumetnationsViewStyle";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {documentationsAction} from "../redux/action/documentationsAction";
import {IconButton} from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";

function DocumentationsView() {
    const classes = useStyles(documetnationsViewStyle);
    const dispatch = useDispatch();
    const documentations = useSelector(state => state.documentations.documentations);
    const docExpand = useSelector(state => state.documentations.docExpand);


    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(documentationsAction.fetchDocumentations());
    }, []);



    const expandDocFunc = (docId) => {
        dispatch(documentationsAction.expand_collapseDoc(docId));
    }

    return (
        <>
            <MenuTopBar active={'Documentations'}/>
            <div className={`${classes.bodyStyle} p-3`}>
                <div className={'container p-1'} style={{marginTop: 70}}>
                    <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.55)'}}>PowerBI - Desktop Documentations</span>
                        <div className={'row p-3'}>
                        {documentations && documentations.filter((item) => item.service === 'PowerBI Desktop').map((item) => {
                            return (
                                <div className={'mb-3 col-4'}>
                                    <div className={'font-weight-bold w-100'}
                                         style={{color: 'rgba(229, 170, 10, .8)', fontWeight: 'bold'}}>
                                        <IconButton size={'small'} onClick={() => {
                                            expandDocFunc(item.id)
                                        }}>
                                            {docExpand.find((doc) => doc[0] === item.id)[1] === true ?
                                        <KeyboardArrowUpRoundedIcon fontSize={'small'} sx={{color: 'rgba(229, 170, 10, .8)'}}/> :
                                                <KeyboardArrowDownRoundedIcon fontSize={'small'} sx={{color: 'rgba(229, 170, 10, .8)'}}/>}
                                        </IconButton>
                                        {item.title}
                                    </div>
                                    {docExpand.find((doc) => doc[0] === item.id)[1] === true ?
                                        <ul style={{listStyle: 'none'}}>
                                            {item.articles && item.articles.map((article, i) => {
                                                return (
                                                    <li className={'p-2'}>{i+1}. {article.split("---")[0]}
                                                        <span className={'p-1'}>
                                                        <LinkRoundedIcon fontSize={'medium'} sx={{color: 'rgba(229, 170, 10, .8)'}}/> <a
                                                        style={{fontSize: '13px', color: 'rgba(229, 170, 10, .8)'}} href={article.split("---")[1]}
                                                        target="_blank"> Link to article </a>
                                                        </span>
                                                    </li>
                                                )
                                            })}
                                        </ul> : null }
                                </div>
                            )
                        })}
                        </div>

                    {/*----------*/}

                    <span style={{borderLeft: '5px solid rgba(7, 144, 168)', marginRight: 7}}/>
                    <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.55)'}}>PowerBI - Service Documentations</span>
                    <div className={'row p-3'}>
                        {documentations && documentations.filter((item) => item.service === 'PowerBI Mobile').map((item) => {
                            return (
                                <div className={'mb-3 col-4'}>
                                    <div className={'font-weight-bold w-100'}
                                         style={{color: 'rgba(7, 144, 168)', fontWeight: 'bold'}}>
                                        <IconButton size={'small'} onClick={() => {
                                            expandDocFunc(item.id)
                                        }}>
                                            {docExpand.find((doc) => doc[0] === item.id)[1] === true ?
                                                <KeyboardArrowUpRoundedIcon fontSize={'small'} sx={{color: 'rgba(7, 144, 168)'}}/> :
                                                <KeyboardArrowDownRoundedIcon fontSize={'small'} sx={{color: 'rgba(7, 144, 168)'}}/>}
                                        </IconButton>
                                        {item.title}
                                    </div>
                                    {docExpand.find((doc) => doc[0] === item.id)[1] === true ?
                                        <ul style={{listStyle: 'none'}}>
                                            {item.articles && item.articles.map((article, i) => {
                                                return (
                                                    <li className={'p-2'}>{i+1}. {article.split("---")[0]}
                                                        <span className={'p-1'}>
                                                        <LinkRoundedIcon fontSize={'medium'} sx={{color: 'rgba(7, 144, 168, .8)'}}/> <a
                                                            style={{fontSize: '13px', color: 'rgba(7, 144, 168, .8)'}} href={article.split("---")[1]}
                                                            target="_blank"> Link to article </a>
                                                        </span>
                                                    </li>
                                                )
                                            })}
                                        </ul> : null }
                                </div>

                            )
                        })}
                    </div>



                        {/*----------*/}

                        <span style={{borderLeft: '5px solid rgba(168, 81, 10, .9)', marginRight: 7}}/>
                        <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.55)'}}>PowerBI - Service Documentations</span>
                            <div className={'row p-3'}>
                                {documentations && documentations.filter((item) => item.service === 'PowerBI Service').map((item) => {
                                    return (
                                        <div className={'mb-3 col-4'}>
                                            <div className={'font-weight-bold w-100'}
                                                 style={{color: 'rgba(168, 81, 10, .9)', fontWeight: 'bold'}}>
                                                <IconButton size={'small'} onClick={() => {
                                                    expandDocFunc(item.id)
                                                }}>
                                                    {docExpand.find((doc) => doc[0] === item.id)[1] === true ?
                                                        <KeyboardArrowUpRoundedIcon fontSize={'small'} sx={{color: 'rgba(168, 81, 10, .6)'}}/> :
                                                        <KeyboardArrowDownRoundedIcon fontSize={'small'} sx={{color: 'rgba(168, 81, 10, .6)'}}/>}
                                                </IconButton>
                                                {item.title}
                                            </div>
                                            {docExpand.find((doc) => doc[0] === item.id)[1] === true ?
                                                <ul style={{listStyle: 'none'}}>
                                                    {item.articles && item.articles.map((article, i) => {
                                                        return (
                                                            <li className={'p-2'}>{i+1}. {article.split("---")[0]}
                                                                <span className={'p-1'}>
                                                        <LinkRoundedIcon fontSize={'medium'} sx={{color: 'rgba(168, 81, 10, .9)'}}/> <a
                                                                    style={{fontSize: '13px', color: 'rgba(168, 81, 10, .9)'}} href={article.split("---")[1]}
                                                                    target="_blank"> Link to article </a>
                                                        </span>
                                                            </li>
                                                        )
                                                    })}
                                                </ul> : null }
                                        </div>
                                    )
                                })}
                            </div>
                </div>
            </div>
        </>
    )
}
export default DocumentationsView;
