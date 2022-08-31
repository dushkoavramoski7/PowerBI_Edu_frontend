import Modal from "react-bootstrap/Modal";
import {IconButton, TextField} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {useEffect, useState} from "react";
import {useStyles} from "../../factory/StyleFactory";
import {uploadCommunityModalStyle} from "./style/UploadCommunityModalStyle";
import {FormikProvider, useFormik} from "formik";
import * as yup from "yup";

let lengthInput = 100;
const validationSchema = yup.object({
    name: yup.string("Name is required.").required("Name is required."),
    description: yup.string("Description is required.").required("Description is required.").max(lengthInput, "Description must be at most " + lengthInput + " characters."),
    url: yup.string("Url is required.").required("Url is required."),
});

function ShareLinkCommunityModal ({show, closeShareLinkModal, share}) {
    const classes = useStyles(uploadCommunityModalStyle);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        formik.setValues({
            ...formik.values,
            name: '',
            description: '',
            url: ''
        })
        formik.setTouched({
            name: false,
            description: false,
            url: false
        })
        setLoading(false)
    }, [show]);

    const initialValues = {
        name: '' ,
        description: '',
        url: ''
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema,
        enableReinitialize: true,
        onSubmit: values => {
            setLoading(true);
            share(values, function() {
                setLoading(false)
                closeShareLinkModal();
            });
        }
    });

    const disableSubmitButton = (formik) => {
        return (formik.touched.name && Boolean(formik.errors.name)) ||
            (formik.touched.description && Boolean(formik.errors.description)) ||
            (formik.touched.url && Boolean(formik.errors.url));
    }

    return (
        <Modal
            show={show}
            onHide={closeShareLinkModal}
            backdrop="static"
            keyboard={false}
            centered={false}
        >
            <Modal.Header>
                <div className='container'>
                    <div className='row'>
                        <div className="col text-center">
                            <h5 className="modal-title" style={{color: 'rgba(0,0,0, .65)',}}>Share external links</h5>
                            <span className="font-weight-bold">Add link/s related to PowerBI that <br/> others will find helpful</span>
                        </div>
                    </div>
                </div>
                <a type="button" className="close">
                    <IconButton size={'small'}>
                        <CloseRoundedIcon onClick={closeShareLinkModal} fontSize={'small'}/>
                    </IconButton>
                </a>
            </Modal.Header>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <Modal.Body style={{backgroundColor: '#f9f9f9'}}>
                        <div>
                            <TextField id="name"
                                       name="name"
                                       className={classes.inputField}
                                       label="Name *"
                                       value={formik.values.name}
                                       onBlur={formik.handleBlur}
                                       onChange={formik.handleChange}
                                       error={formik.touched.name && Boolean(formik.errors.name)}
                                       fullWidth={true}
                                       margin={"normal"}
                                       placeholder="Please enter name..."/>
                                {formik.touched.name && Boolean(formik.errors.name) ? (
                                    <span className={`${classes.errorText}`}>{formik.errors.name}</span>): null }
                        </div>
                        <div>
                            <TextField id="description"
                                       name="description"
                                       className={classes.inputField}
                                       label='Link description *'
                                       onBlur={formik.handleBlur}
                                       onChange={formik.handleChange}
                                       value={formik.values.description}
                                       error={formik.touched.description && Boolean(formik.errors.description)}
                                       fullWidth={true}
                                       margin={"normal"}
                                       placeholder="Please enter link description..."
                                       multiline
                                       rows={3}/>
                            <div>
                                {formik.touched.description && Boolean(formik.errors.description) ? (
                                    <span className={`${classes.errorText}`}
                                          style={{float: 'left'}}>{formik.errors.description}</span>
                                ) : null}
                                <span style={{
                                    float: 'right',
                                    fontSize: '0.75rem',
                                    fontWeight: '400',
                                }}>{formik.values.description.length}/{lengthInput}</span>
                            </div>
                        </div>

                        <div>
                            <TextField id="url"
                                       name="url"
                                       className={classes.inputField}
                                       label="Url *"
                                       value={formik.values.url}
                                       onBlur={formik.handleBlur}
                                       onChange={formik.handleChange}
                                       error={formik.touched.url && Boolean(formik.errors.url)}
                                       fullWidth={true}
                                       margin={"normal"}
                                       placeholder="Please enter url..."/>
                            {formik.touched.url && Boolean(formik.errors.url) ? (
                                <span className={`${classes.errorText}`}>{formik.errors.url}</span>): null }
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <a className="btn btn-white" onClick={closeShareLinkModal}>Close</a>
                        <button type="submit" className="btn btn-warning text-white" hidden={loading} style={{backgroundColor: 'rgba(229, 170, 10)'}} disabled={disableSubmitButton(formik)}>Submit</button>
                        <button type="submit" className="btn btn-warning text-white" hidden={!loading} style={{backgroundColor: 'rgba(229, 170, 10)'}} disabled={loading}><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
                    </Modal.Footer>
                </form>
            </FormikProvider>
        </Modal>

    )
}
export default ShareLinkCommunityModal;