import * as yup from "yup";
import {FormikProvider, useFormik} from "formik";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Button, TextField} from "@mui/material";
import {useStyles} from "../factory/StyleFactory";
import {uploadCommunityModalStyle} from "./components/style/UploadCommunityModalStyle";
import {useEffect} from "react";
import {influencersAction} from "../redux/action/influencersAction";
import {coursesAction} from "../redux/action/coursesAction";


const validationSchema = yup.object({
    name: yup.string("name is required").required("name is required"),
    surname: yup.string("surname is required").required("surname is required"),
    username: yup.string("username is required").required("username is required"),
    email: yup.string("email is required").required("email is required").email("email not valid"),
    password: yup.string("password is required").required("password is required"),
    repeatPassword: yup.string().oneOf([yup.ref('password'), null], 'passwords must match')
});
function Register() {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles(uploadCommunityModalStyle);

    useEffect(() => {
        window.scroll(0,0)
        dispatch(influencersAction.fetch());
        dispatch(coursesAction.fetchCourses());
    }, []);

    const initialValues = {
        name: '' ,
        surname: '' ,
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema,
        enableReinitialize: true,
        onSubmit: values => {
            history.push("/login/success");
        }
    });


    return (
        <div className={'container p-5 mt-3 d-flex'}>
            <div className={`container p-3 m-auto`} style={{backgroundColor: 'rgba(255,255,255)' , height: '600px'}}>
                <div className={`row mt-3`} >
                    <div className={'col-1'}>

                    </div>

                    <div className={'col-10'}>
                        <p style={{color: 'rgba(0,0,0,.55)', fontSize: '34px', marginBottom:'-5px'}}>Create account for <b style={{color: 'rgba(234, 179, 2)'}}>PowerBI - Edu</b></p>
                        <FormikProvider value={formik}>
                            <form onSubmit={formik.handleSubmit}>
                                <div className={'row'}>
                                    <div className={'col-6'}>
                                        <div>
                                            <TextField id="name"
                                                       name="name"
                                                       className={classes.inputField}
                                                       label="Name *"
                                                       value={formik.values.name}
                                                       onChange={formik.handleChange}
                                                       error={formik.touched.name && Boolean(formik.errors.name)}
                                                       fullWidth={true}
                                                       margin={"normal"}
                                                       placeholder="Please enter name..."/>
                                            {formik.touched.name && Boolean(formik.errors.name) ? (
                                                <span className={`${classes.errorText}`}>{formik.errors.name}</span>): null }
                                        </div>
                                    </div>
                                    <div className={'col-6'}>
                                        <div>
                                            <TextField id="surname"
                                                       name="surname"
                                                       className={classes.inputField}
                                                       label="Surname *"
                                                       value={formik.values.surname}
                                                       onChange={formik.handleChange}
                                                       error={formik.touched.surname && Boolean(formik.errors.surname)}
                                                       fullWidth={true}
                                                       margin={"normal"}
                                                       placeholder="Please enter surname..."/>
                                            {formik.touched.surname && Boolean(formik.errors.surname) ? (
                                                <span className={`${classes.errorText}`}>{formik.errors.surname}</span>): null }
                                        </div>
                                    </div>

                                </div>

                                <div className={'row'}>
                                    <div className={'col-6'}>
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
                                    <div className={'col-6'}>
                                        <TextField id="email"
                                                   name="email"
                                                   className={classes.inputField}
                                                   label="Email *"
                                                   value={formik.values.email}
                                                   onChange={formik.handleChange}
                                                   error={formik.touched.email && Boolean(formik.errors.email)}
                                                   fullWidth={true}
                                                   margin={"normal"}
                                                   placeholder="Please enter email..."/>
                                        {formik.touched.email && Boolean(formik.errors.email) ? (
                                            <span className={`${classes.errorText}`}>{formik.errors.email}</span>): null }
                                    </div>
                                </div>
                                <div className={'row'}>
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
                                               placeholder="Please enter password..."/>
                                    {formik.touched.password && Boolean(formik.errors.password) ? (
                                        <span className={`${classes.errorText}`}>{formik.errors.password}</span>): null }
                                    </div>
                                </div>
                                <div className={'row'}>
                                    <div>
                                    <TextField id="repeatPassword"
                                               name="repeatPassword"
                                               className={classes.inputField}
                                               label="Repeat Password *"
                                               value={formik.values.repeatPassword}
                                               onChange={formik.handleChange}
                                               error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                                               onBlur={formik.handleBlur}
                                               fullWidth={true}
                                               margin={"normal"}
                                               placeholder="Please enter password..."/>
                                    {formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword) ? (
                                        <span className={`${classes.errorText}`}>{formik.errors.repeatPassword}</span>): null }
                                    </div>



                                </div>
                                    <div className={'row'} style={{marginRight:'5px', marginTop:'10px', marginLeft:'4px'}}>
                                        <div className={'d-flex justify-content-center'}>
                                            <p> Already have an account? <a style={{color: 'rgba(234, 179, 2)', cursor: 'pointer', fontWeight: 'bold'}} onClick={() => history.push("/login")}>Login!</a></p>
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
                                            Rregister
                                        </Button>
                                    </div>

                            </form>
                        </FormikProvider>

                    </div>
                    <div className={'col-1'}>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Register;