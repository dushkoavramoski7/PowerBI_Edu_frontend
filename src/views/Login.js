import logo from '../img/yeloow-heaer.jpg';
import * as yup from "yup";
import {useEffect, useState} from "react";
import {FormikProvider, useFormik} from "formik";
import {useHistory, useParams} from "react-router-dom";
import {influencersAction} from "../redux/action/influencersAction";
import {coursesAction} from "../redux/action/coursesAction";

import {useDispatch} from "react-redux";
import {Button, Checkbox, TextField} from "@mui/material";
import {useStyles} from "../factory/StyleFactory";
import {uploadCommunityModalStyle} from "./components/style/UploadCommunityModalStyle";
import SnackbarAlert from "./components/SnackbarAlert";

const validationSchema = yup.object({
    username: yup.string("Username is required").required("Username is required"),
    password: yup.string("Password is required").required("Password is required"),
});
function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles(uploadCommunityModalStyle);
    const success = useParams();
    const [snackbarStatus, setSnackbarStatus] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        window.scroll(0,0)
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
        dispatch(influencersAction.fetch());
        dispatch(coursesAction.fetchCourses());
        if(Boolean(success.success)) {
            setSnackbarStatus(true)
            setSnackbarMessage({
                message: 'User created!',
                subMessage: 'Use same credentials to login.',
                status: 'success',
            })
        }
    }, []);

    const initialValues = {
        username: '' ,
        password: '',
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema,
        enableReinitialize: true,
        onSubmit: values => {
           history.push("/courses/logged/" + values.username);
        }
    });


    return (
        <>
            <div className={'container p-5 mt-3 d-flex'}>
                    <div className={`row bg-white position-relative`} style={{height: '600px', width: '1300px'}}>
                        <div className={'col-6'}>
                            <img src={logo} alt="" style={{height: '600px', width: '100%', marginLeft: '-13px'}}/>
                        </div>
                        <div className={'col-6 mt-5'}>
                            <p style={{color: 'rgba(0,0,0,.55)', fontSize: '34px', marginBottom:'-5px'}}>Welcome to <b style={{color: 'rgba(234, 179, 2)'}}>PowerBI - Edu</b></p>
                            <i style={{color: 'rgba(0,0,0,.35)'}}>Interactive e-learning web application for data visualization, <b style={{color: 'rgba(234, 179, 2)'}}>PowerBI</b> </i>
                            <FormikProvider value={formik} >
                                <form onSubmit={formik.handleSubmit}>
                                    <div style={{marginTop: '20px'}}>
                                        <TextField id="username"
                                                   name="username"
                                                   className={classes.inputField}
                                                   label="Username *"
                                                   value={formik.values.username}
                                                   onChange={formik.handleChange}
                                                   error={formik.touched.username && Boolean(formik.errors.username)}
                                                   fullWidth={true}
                                                   margin={"normal"}
                                                   placeholder="Please enter username..."/>
                                        {formik.touched.username && Boolean(formik.errors.username) ? (
                                            <span className={`${classes.errorText}`}>{formik.errors.username}</span>): null }
                                    </div>
                                    <div>
                                        <TextField id="password"
                                                   name="password"
                                                   className={classes.inputField}
                                                   label="Password *"
                                                   value={formik.values.password}
                                                   onChange={formik.handleChange}
                                                   error={formik.touched.password && Boolean(formik.errors.password)}
                                                   fullWidth={true}
                                                   margin={"normal"}
                                                   type={'password'}
                                                   placeholder="Please enter password..."/>
                                        {formik.touched.password && Boolean(formik.errors.password) ? (
                                            <span className={`${classes.errorText}`}>{formik.errors.password}</span>): null }
                                    </div>
                                    <div className={'row mt-2'}>
                                        <div className={'col-4'}>
                                            <Checkbox size="medium"

                                                      sx={{
                                                          marginTop: '-5px',
                                                          marginLeft: '-5px',
                                                          color: '#939393',
                                                          '&.Mui-checked': {
                                                              color: 'rgba(234, 179, 2)',
                                                          },
                                                      }}/>
                                            <span className={'mt-1'}>Remember me</span>
                                        </div>
                                    </div>
                                    <div className={'row'} style={{marginRight:'2px', marginTop:'42px'}}>
                                        <div className={'d-flex justify-content-center'}>
                                            <p> Don't have an account? <a style={{color: 'rgba(234, 179, 2)', cursor: 'pointer', fontWeight: 'bold'}} onClick={() => history.push("/register")}>Create one!</a></p>
                                        </div>
                                        <Button sx={{borderColor: 'rgba(234, 179, 2)',
                                            backgroundColor: 'rgba(234, 179, 2)',
                                            marginTop: '8px',
                                            fontWeight: 'bold',
                                            color: 'white',
                                            height: '50px',
                                            '&:hover': {
                                                backgroundColor: 'rgba(234, 179, 2, .95)',
                                                border: ' 10px solid rgba(234, 179, 2)',
                                                boxShadow: 'none',
                                            }}}
                                                fullWidth={true}
                                                type={'submit'}>
                                            Log in
                                        </Button>
                                    </div>
                                </form>
                            </FormikProvider>


                        </div>
                    </div>
                <SnackbarAlert snackbarStatus={snackbarStatus}
                               closeSnackbar={() => setSnackbarStatus(false)}
                               snackbarMessage={snackbarMessage}/>
            </div>
        </>
    )
}
export default Login;