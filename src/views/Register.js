import * as yup from "yup";
import {FormikProvider, useFormik} from "formik";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Button, TextField} from "@mui/material";
import {useStyles} from "../factory/StyleFactory";
import {uploadCommunityModalStyle} from "./components/style/UploadCommunityModalStyle";
import StartIcon from "@mui/icons-material/Start";
import {useEffect} from "react";
import {influencersAction} from "../redux/action/influencersAction";
import {coursesAction} from "../redux/action/coursesAction";


const validationSchema = yup.object({
    name: yup.string("name is required.").required("name is required."),
    surname: yup.string("surname is required.").required("surname is required."),
    username: yup.string("username is required.").required("username is required."),
    email: yup.string("email is required.").required("email is required."),
    password: yup.string("password is required.").required("password is required."),
    repeatPassword: yup.string().oneOf([yup.ref('password'), null], 'passwords must match')
});
function Register() {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles(uploadCommunityModalStyle);

    useEffect(() => {
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
            history.push("/login");
        }
    });


    return (
        <div className={'container p-5 mt-3 d-flex'}>
            <div className={`container p-3 m-auto`} style={{backgroundColor: 'rgba(255,255,255)' , height: '600px'}}>
                <div className={`row mt-3`} >
                    <div className={'col-1'}>

                    </div>

                    <div className={'col-10'}>
                        <h3 style={{color: 'rgba(0,0,0,.55)'}}>Create account for <b style={{color: 'rgba(229, 170, 10)'}}>PowerBI - Edu</b></h3>
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
                                                       onBlur={formik.handleBlur}
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
                                                       onBlur={formik.handleBlur}
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
                                                   onBlur={formik.handleBlur}
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
                                                   onBlur={formik.handleBlur}
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
                                               onBlur={formik.handleBlur}
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
                                               onBlur={formik.handleBlur}
                                               onChange={formik.handleChange}
                                               error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                                               fullWidth={true}
                                               margin={"normal"}
                                               placeholder="Please enter password..."/>
                                    {formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword) ? (
                                        <span className={`${classes.errorText}`}>{formik.errors.repeatPassword}</span>): null }
                                    </div>



                                </div>
                                <div className={'row'}>
                                    <div className={'col-6 d-flex justify-content-start mt-3'}>
                                        <Button variant="outlined"
                                                sx={{color: 'rgba(229, 170, 10)',
                                                    borderColor: 'rgba(229, 170, 10)',
                                                    marginTop: '8px',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(229, 170, 10,.035)',
                                                        borderColor: 'rgba(229, 170, 10)',
                                                        boxShadow: 'none',
                                                    }}}
                                                endIcon={<StartIcon fontSize={'small'} sx={{color: 'rgba(229, 170, 10)'}} />}
                                                onClick={() => history.push("/login")}
                                        >
                                            Login
                                        </Button>
                                    </div>
                                    <div className={'col-6 d-flex justify-content-end mt-3'}>
                                        <Button variant="outlined"
                                                sx={{color: 'rgba(229, 170, 10)',
                                                    borderColor: 'rgba(229, 170, 10)',
                                                    marginTop: '8px',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(229, 170, 10,.035)',
                                                        borderColor: 'rgba(229, 170, 10)',
                                                        boxShadow: 'none',
                                                    }}}
                                                endIcon={<StartIcon fontSize={'small'} sx={{color: 'rgba(229, 170, 10)'}} />}
                                                type={'submit'}>
                                            Register
                                        </Button>
                                    </div>
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