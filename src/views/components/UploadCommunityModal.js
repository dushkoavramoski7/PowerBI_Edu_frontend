import Modal from "react-bootstrap/Modal";
import {IconButton, TextField} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {useEffect, useState} from "react";
import {useStyles} from "../../factory/StyleFactory";
import {uploadCommunityModalStyle} from "./style/UploadCommunityModalStyle";
import {FormikProvider, useFormik} from "formik";
import * as yup from "yup";

let lengthDescriptionInput = 100;
const validationSchema = yup.object({
    description: yup.string("Enter document description.")
        .required("Enter document description.")
        .max(lengthDescriptionInput, "Document description text must be at most " + lengthDescriptionInput + " characters."),
});

function UploadCommunityModal({show, closeUploadModal, upload}) {
    const classes = useStyles(uploadCommunityModalStyle);

    const [file, setFile] = useState();
    const [fileTouched, setFileTouched] = useState(false);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        formik.setValues({
            ...formik.values,
            description: ''
        })
        formik.setTouched({
            description: false
        })
        setFileTouched(false)
        setFile()
        setLoading(false)
    }, [show]);

    const initialValues = {
        description: ""
    }

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
        setFileTouched(true)
    };

    const uploadFile = () => {
        setLoading(true);
        let formData = new FormData();
        formData.append('file', file);
        upload(formData, formik.values.description, function() {
            setLoading(false)
            closeUploadModal();
        });
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema,
        enableReinitialize: true,
        onSubmit: values => {
            uploadFile();
        }
    });

    function validateForm() {
        return ((formik.touched.description && Boolean(formik.errors.description)) || Boolean(file)) ;
    }


    return (
        <Modal
            show={show}
            onHide={closeUploadModal}
            backdrop="static"
            keyboard={false}
            centered={false}

        >
            <Modal.Header>
                <div className='container'>
                    <div className='row'>
                        <div className="col text-center">
                            <h5 className="modal-title" style={{color: 'rgba(0,0,0, .65)',}}>Share document</h5>
                            <span className="font-weight-bold">Upload document/s related to PowerBI</span>
                        </div>
                    </div>
                </div>
                <a type="button" className="close">
                    <IconButton size={'small'}>
                        <CloseRoundedIcon onClick={closeUploadModal} fontSize={'small'}/>
                    </IconButton>
                </a>
            </Modal.Header>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <Modal.Body style={{backgroundColor: '#f9f9f9'}}>

                        <div>
                            <input type="file" className="form-control" id="file"  name="file" onChange={onFileChange}/>
                            <label className="file" htmlFor="customFile" style={{fontSize: '12px'}}>Accepted
                                formats: pbix, pptx, docx, pdf, jpeg, png, zip </label>
                            {validateForm() && !fileTouched ? (
                                <div className={`${classes.errorText}`}>File is required</div>
                            ) : null}
                        </div>

                        <div className="form-group mt-3 mb-3">
                            <TextField id="description"
                                       name="description"
                                       className={classes.inputField}
                                       label='Document description *'
                                       onBlur={formik.handleBlur}
                                       onChange={formik.handleChange}
                                       value={formik.values.description}
                                       error={formik.touched.description && Boolean(formik.errors.description)}
                                       fullWidth={true}
                                       margin="normal"
                                       placeholder="Please enter document description..."
                                       multiline
                                       rows={4}/>
                            <div>
                                {formik.touched.description && Boolean(formik.errors.description) ? (
                                    <span className={`${classes.errorText}`}
                                          style={{float: 'left'}}>{formik.errors.description}</span>
                                ) : null}
                                <span style={{
                                    float: 'right',
                                    fontSize: '0.75rem',
                                    fontWeight: '400',
                                }}>{formik.values.description.length}/{lengthDescriptionInput}</span>
                            </div>
                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <a className="btn btn-white" onClick={closeUploadModal}>Close</a>
                        <button type="submit" className="btn btn-warning text-white" hidden={loading} style={{backgroundColor: 'rgba(229, 170, 10)'}}>Submit</button>
                        <button type="submit" className="btn btn-warning text-white" hidden={!loading} style={{backgroundColor: 'rgba(229, 170, 10)'}} disabled={loading}><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
                    </Modal.Footer>
                </form>
            </FormikProvider>
        </Modal>

    )
}
export default UploadCommunityModal;