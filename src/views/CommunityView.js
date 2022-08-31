import MenuTopBar from "./components/pageElements/MenuTopBar";
import {useStyles} from "../factory/StyleFactory";
import {communityViewStyle} from "./style/CommunityViewStyle";
import {Button, IconButton} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {communityAction} from "../redux/action/communityAction";
import UploadCommunityModal from "./components/UploadCommunityModal";
import axios from "../axios/axiosInstance";
import {FileIcon} from "react-file-icon";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import SnackbarAlert from "./components/SnackbarAlert";
import DeleteModal from "./components/DeleteModal";
import CloseIcon from "@mui/icons-material/Close";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import AddLinkRoundedIcon from '@mui/icons-material/AddLinkRounded';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import ShareLinkCommunityModal from "./components/ShareLinkCommunityModal";

function CommunityView() {
    const classes = useStyles(communityViewStyle);
    const dispatch = useDispatch();
    const documents = useSelector(state => state.community.documents);
    const links = useSelector(state => state.community.links);
    const [openModal, setModal] = useState(false);
    const [openModalLink, setOpenModalLink] = useState(false);
    const [startOffset, setStartOffset] = useState(0);
    const [startOffsetLinks, setStartOffsetLinks] = useState(0);
    const [snackbarStatus, setSnackbarStatus] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [openDeleteFile, setOpenDeleteFile] = useState(false);
    const [fileToBeDeleted, setFileToBeDeleted] = useState();
    const [openDeleteLink, setOpenDeleteLink] = useState(false);
    const [linkToBeDeleted, setLinkToBeDeleted] = useState();


    const fetchDocuments_Links = () => {
        dispatch(communityAction.fetchCommunityDocuments());
        dispatch(communityAction.fetchCommunityLinks());
    }

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        scrollTop();
        fetchDocuments_Links();
    }, []);


    useEffect(() => {
        scrollTop();
        fetchDocuments_Links();
    }, [openModal, openModalLink, openDeleteFile, openDeleteLink]);

    const closeUploadModal = () => {
        setModal(false);
    }

    const closeShareLinkModal = () => {
        setOpenModalLink(false);
    }

    function upload (file, description, _callback) {
        dispatch(communityAction.uploadDocument(file, description, success => {
            _callback();
            success ? setSnackbarMessage({
                    message: 'Success!',
                    subMessage: 'File uploaded successfully.',
                    status: 'success',
                }) :
                setSnackbarMessage({
                    message: 'Failed to upload!',
                    subMessage: 'Follow instructions for uploading a file.',
                    status: 'error'
                })
            setSnackbarStatus(true)
        }));
    }

    function shareLink (values, _callback) {
        dispatch(communityAction.shareLink(values, success => {
            _callback();
            success ? setSnackbarMessage({
                    message: 'Success!',
                    subMessage: 'Link shared successfully.',
                    status: 'success',
                }) :
                setSnackbarMessage({
                    message: 'Failed to share!',
                    subMessage: 'Follow instructions for sharing link.',
                    status: 'error'
                })
            setSnackbarStatus(true)
        }));
    }

    function deleteFile (_callback) {
        dispatch(communityAction.deleteFile(fileToBeDeleted, success => {
            _callback();
            success ? setSnackbarMessage({
                    message: 'Success!',
                    subMessage: 'File deleted successfully.',
                    status: 'success',
                }) :
                setSnackbarMessage({
                    message: 'Failed to delete!',
                    subMessage: 'Follow instructions for deleting a file.',
                    status: 'error'
                })
            setStartOffset(curr => curr-1)
            setSnackbarStatus(true)
        }));
    }

    function deleteLink (_callback) {
        dispatch(communityAction.deleteLink(linkToBeDeleted, success => {
            _callback();
            success ? setSnackbarMessage({
                    message: 'Success!',
                    subMessage: 'Link deleted successfully.',
                    status: 'success',
                }) :
                setSnackbarMessage({
                    message: 'Failed to delete!',
                    subMessage: 'Follow instructions for deleting a Link.',
                    status: 'error'
                })
            setStartOffsetLinks(curr => curr-1)
            setSnackbarStatus(true)
        }));
    }

    const showDocuments = () => {
        let files = [];
        {
            documents && documents.slice(startOffset, startOffset + 5).map((doc, i) => {
                files.push(
                    <div className={`col-2 d-flex justify-content-center mb-5 position-relative ${classes.greyHover}`}
                    style={(startOffset + i  + 1 === documents.length) && doc.shared ? {backgroundColor: 'rgba(229, 170, 10, .05)'} : {}}>
                        <div className={'row text-center'}>
                            <div className={'d-flex justify-content-center ml-auto'}>
                                <a style={{width: '80px'}} className={'mb-2 mt-3'}
                                   href={axios.getUri() + "/community/document/" + doc.id} target="_blank"
                                   rel="noreferrer">
                                    {doc.contentType.includes("pdf") ?
                                        <FileIcon extension="pdf" type={"acrobat"} color={'#E8E8E8'}/> :
                                        doc.contentType.includes("wordprocessingml") ?
                                            <FileIcon extension="docx" type={"document"} color={'#E8E8E8'}/> :
                                            doc.contentType.includes("spreadsheetml.sheet") ?
                                                <FileIcon extension="xslx" type={"spreadsheet"} color={'#E8E8E8'}/> :
                                                doc.fileName.includes("zip") || doc.fileName.includes("rar") || doc.fileName.toLowerCase().includes("7-zip") || doc.fileName.toLowerCase().includes("7z") ?
                                                    <FileIcon extension="zip" type={"compressed"} color={'#E8E8E8'}/> :
                                                    doc.fileName.includes("png") || doc.fileName.includes("jpg") || doc.fileName.toLowerCase().includes("jpeg") || doc.fileName.toLowerCase().includes("svg") ?
                                                        <FileIcon extension="img" type={"image"} color={'#E8E8E8'}/> :
                                                        doc.fileName.includes(".pbix") ?
                                                            <FileIcon extension="pbix" type={"3d"}
                                                                      color={'#E8E8E8'}/> : <FileIcon extension="file" color={'#E8E8E8'}/>}
                                </a>
                            </div>
                            <div>
                                <a href={axios.getUri() + "/community/document/" + doc.id} target="_blank"
                                   rel="noreferrer"
                                   style={{textDecoration: 'none', fontWeight: 'bold', color: 'rgba(229, 170, 10)'}}>
                                    <span>{doc.id}. {doc.fileName} </span>
                                </a>
                                <div className={'row text-justify d-flex justify-content-center'}>
                                    <div className={'row text-justify d-flex justify-content-center w-75 text-center'} style={{fontSize: '13px'}}>
                                        {doc.description}
                                    </div>
                                </div>
                                <div className={'mb-3'}>
                                    <EventAvailableRoundedIcon fontSize={'small'} color={'disabled'}/> <span
                                    style={{
                                        fontSize: '13px',
                                        color: 'rgba(0,0,0,.55)'
                                    }}><i>{doc.formattedDateUpload}</i></span>
                                </div>
                                {(startOffset + i  + 1 === documents.length) && doc.shared ?
                                <i className={'mb-3'} style={{
                                    fontSize: '13px',
                                    color: 'rgba(0,0,0,.55)'
                                }}>
                                   Last Added
                                </i> : null }
                            </div>
                        </div>
                        {doc.shared ?
                            <a type="button" className="close position-absolute" style={{top: 5, right: 10}}>
                                <IconButton size={'small'} onClick={() => (setFileToBeDeleted(doc.id), setOpenDeleteFile(true))}>
                                    <CloseIcon fontSize={'small'}/>
                                </IconButton>
                            </a>
                            : null }

                    </div>
                )
            })
        }

        return files;
    }

    const showLinks = () => {
        let linksDisplay = [];
        {
            links && links.slice(startOffsetLinks, startOffsetLinks + 4).map((link, i) => {
                linksDisplay.push(
                    <div className={`col-2 d-flex justify-content-center mb-5 position-relative ${classes.greyHover}`}
                         style={(startOffsetLinks + i  + 1 === links.length) && link.shared ? {backgroundColor: 'rgba(229, 170, 10, .05)'} : {}}>
                        <div className={'row text-center'}>
                            <div className={'d-flex justify-content-center ml-auto'}>
                                <a style={{width: '80px'}} className={'mb-2 mt-3'}
                                   href={link.url} target="_blank"
                                   rel="noreferrer">
                                    <IconButton>
                                        <InsertLinkRoundedIcon fontSize={'large'} color={'disabled'} />
                                    </IconButton>
                                </a>
                            </div>
                            <div>
                                <a href={link.url} target="_blank"
                                   rel="noreferrer"
                                   style={{textDecoration: 'none', fontWeight: 'bold', color: 'rgba(229, 170, 10)'}}>
                                    <span>{link.id}. {link.name} </span>
                                </a>
                                <div className={'row text-justify d-flex justify-content-center'}>
                                    <div className={'row text-justify d-flex justify-content-center w-75 text-center'} style={{fontSize: '13px'}}>
                                        {link.description}
                                    </div>
                                </div>
                                <div className={'mb-3'}>
                                    <EventAvailableRoundedIcon fontSize={'small'} color={'disabled'}/> <span
                                    style={{
                                        fontSize: '13px',
                                        color: 'rgba(0,0,0,.55)'
                                    }}><i>{link.formattedLinkShared}</i></span>
                                </div>
                                {(startOffsetLinks + i  + 1 === links.length && link.shared) ?
                                    <i className={'mb-3'} style={{
                                        fontSize: '13px',
                                        color: 'rgba(0,0,0,.55)'
                                    }}>
                                        Last Added
                                    </i> : null }
                            </div>
                        </div>
                        {link.shared ?
                            <a type="button" className="close position-absolute" style={{top: 5, right: 10}}>
                                <IconButton size={'small'} onClick={() => (setLinkToBeDeleted(link.id), setOpenDeleteLink(true))}>
                                    <CloseIcon fontSize={'small'}/>
                                </IconButton>
                            </a>
                            : null}

                    </div>
                )
            })
        }

        return linksDisplay;
    }

    return (
        <>
            <MenuTopBar active={'Community'}/>
            <div className={`${classes.bodyStyle} p-3 `}>
                <div className={'container'} style={{marginTop: 70, marginRight: 'auto', marginLeft: 'auto'}}>
                    <div className={'row'}>
                        <div className={'col-6'} style={{marginLeft: '-8px'}}>
                            <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7}}/>
                            <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.55)'}}>PowerBI - Shared documents</span>
                        </div>
                        <div className={'col-6 d-flex justify-content-end'}>

                            <Button variant="outlined"
                                    sx={{color: 'rgba(229, 170, 10)',
                                        borderColor: 'rgba(229, 170, 10)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(229, 170, 10,.035)',
                                            borderColor: 'rgba(229, 170, 10)',
                                            boxShadow: 'none',
                                        }}}
                                    endIcon={<DriveFolderUploadOutlinedIcon fontSize={'small'} sx={{color: 'rgba(229, 170, 10)', }} />}
                                    onClick={() => {setModal(true)}}>
                                Upload
                            </Button>
                        </div>
                    </div>

                    <div className={'row mt-3 d-flex justify-content-between '}>
                        <div className={`col-1 mt-5`}>
                            <IconButton size={'large'} onClick={() => setStartOffset(curr => curr - 1)} disabled={startOffset - 1  < 0}>
                                <ChevronLeftRoundedIcon fontSize={'large'}/>
                            </IconButton>
                        </div>

                            {showDocuments()}

                        <div className={`col-1 mt-5`}>
                            <IconButton size={'large'} onClick={() => setStartOffset(curr => curr + 1)} disabled={startOffset + 5  > documents.length - 1}>
                                <ChevronRightRoundedIcon fontSize={'large'} />
                            </IconButton>
                        </div>
                    </div>


                    {/*LINKs*/}


                    <div className={'row'}>
                        <div className={'col-6'}>
                            <span style={{borderLeft: '5px solid rgba(229, 170, 10, .8)', marginRight: 7}}/>
                            <span style={{fontWeight: 'bold', color: 'rgba(0,0,0,.55)'}}>PowerBI - Shared links</span>
                        </div>
                        <div className={'col-6 d-flex justify-content-end'}>

                            <Button variant="outlined"
                                    sx={{color: 'rgba(229, 170, 10)',
                                        borderColor: 'rgba(229, 170, 10)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(229, 170, 10,.035)',
                                            borderColor: 'rgba(229, 170, 10)',
                                            boxShadow: 'none',
                                        }}}
                                    endIcon={<AddLinkRoundedIcon fontSize={'small'} sx={{color: 'rgba(229, 170, 10)', }} />}
                                    onClick={() => {setOpenModalLink(true)}}>
                                Share
                            </Button>
                        </div>
                    </div>

                    <div className={'row mt-3 d-flex justify-content-around '}>
                        <div className={`col-1 mt-5`}>
                            <IconButton size={'large'} onClick={() => setStartOffsetLinks(curr => curr - 1)} disabled={startOffsetLinks - 1  < 0}>
                                <ChevronLeftRoundedIcon fontSize={'large'}/>
                            </IconButton>
                        </div>

                        {showLinks()}

                        <div className={`col-1 mt-5`}>
                            <IconButton size={'large'} onClick={() => setStartOffsetLinks(curr => curr + 1)} disabled={startOffsetLinks + 4  > links.length - 1}>
                                <ChevronRightRoundedIcon fontSize={'large'} />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <UploadCommunityModal show={openModal} closeUploadModal={closeUploadModal} upload={upload}/>
                <ShareLinkCommunityModal show={openModalLink} closeShareLinkModal={closeShareLinkModal} share={shareLink} />
                <SnackbarAlert snackbarStatus={snackbarStatus}
                               closeSnackbar={() => setSnackbarStatus(false)}
                               snackbarMessage={snackbarMessage}/>
                <DeleteModal deleteItem={deleteFile} show={openDeleteFile} closeDeleteDialog={() => setOpenDeleteFile(false)}/>
                <DeleteModal deleteItem={deleteLink} show={openDeleteLink} closeDeleteDialog={() => setOpenDeleteLink(false)}/>
            </div>
        </>
    )
}
export default CommunityView;