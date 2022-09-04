import logo from '../img/logo.png';
import * as yup from "yup";
import {useEffect} from "react";
import {FormikProvider, useFormik} from "formik";
import {useHistory} from "react-router-dom";
import {influencersAction} from "../redux/action/influencersAction";
import {useDispatch} from "react-redux";
import {Button, TextField} from "@mui/material";
import {useStyles} from "../factory/StyleFactory";
import {uploadCommunityModalStyle} from "./components/style/UploadCommunityModalStyle";
import StartIcon from "@mui/icons-material/Start";

const validationSchema = yup.object({
    username: yup.string("Username is required.").required("Username is required."),
    password: yup.string("Password is required.").required("Password is required."),
});
function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles(uploadCommunityModalStyle);

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
        dispatch(influencersAction.fetch());
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
           history.push("/courses");
        }
    });


    return (
        <>
            <div className={'container p-5 mt-3 d-flex'}>
                <div className={`container p-3 m-auto`} style={{backgroundColor: 'rgba(255,255,255)' , height: '500px'}}>
                    <div className={`row`} >
                        <div className={'col-5 mt-5'}>
                            <img src={logo} style={{height: 350, width: 400}} className="d-inline-block align-top p-2" alt=""/>
                        </div>
                        <div className={'col-6 mt-5'}>
                            <h3 style={{color: 'rgba(0,0,0,.55)'}}>Welcome to <b style={{color: 'rgba(229, 170, 10)'}}>PowerBI - Edu</b></h3>
                            <FormikProvider value={formik}>
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <TextField id="username"
                                                   name="username"
                                                   className={classes.inputField}
                                                   label="Username *"
                                                   value={formik.values.username}
                                                   onBlur={formik.handleBlur}
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
                                                   onBlur={formik.handleBlur}
                                                   onChange={formik.handleChange}
                                                   error={formik.touched.password && Boolean(formik.errors.password)}
                                                   fullWidth={true}
                                                   margin={"normal"}
                                                   type={'password'}
                                                   placeholder="Please enter password..."/>
                                        {formik.touched.password && Boolean(formik.errors.password) ? (
                                            <span className={`${classes.errorText}`}>{formik.errors.password}</span>): null }
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-8 mt-4'}>
                                            <p> Don't have an account? <a style={{color: 'rgba(229, 170, 10)', cursor: 'pointer'}} onClick={() => history.push("/register")}>Create one!</a></p>

                                        </div>
                                        <div className={'col-4 d-flex justify-content-end mt-3'}>
                                            <Button variant="outlined"
                                                    sx={{color: 'rgba(229, 170, 10)',
                                                        borderColor: 'rgba(229, 170, 10)',
                                                        marginTop: '8px',
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(229, 170, 10,.035)',
                                                            borderColor: 'rgba(229, 170, 10)',
                                                            boxShadow: 'none',
                                                        }}}
                                                    endIcon={<StartIcon fontSize={'small'} sx={{color: 'rgba(229, 170, 10)', }} />}
                                                    type={'submit'}>
                                                Log in
                                            </Button>
                                        </div>

                                    </div>
                                </form>
                            </FormikProvider>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;