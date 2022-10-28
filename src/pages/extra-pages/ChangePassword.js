import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import EditWrapper from 'pages/authentication/EditWrapper';

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = () => {
    const [level, setLevel] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [show, setShow] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('');
    }, []);
    function validatePassword(value) {
        let error;
        if (value === 'admin') {
            error = 'Password are not the same';
        }
        return error;
    }

    return (
        <>
            <EditWrapper>
                <Formik
                    initialValues={{
                        password: '',
                        cpassword: '',
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({
                        password: Yup.string().max(20).required('Password is required'),
                        cpassword: Yup.string()
                            .max(20)
                            .required('Password is required')
                            .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        // cpassword:
                    })}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        try {
                            setStatus({ success: false });
                            setSubmitting(false);
                        } catch (err) {
                            console.error(err);
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-signup">Password</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.password && errors.password)}
                                            id="password-signup"
                                            type={showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            name="password"
                                            onBlur={handleBlur}
                                            onChange={(e) => {
                                                handleChange(e);
                                                changePassword(e.target.value);
                                            }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        size="large"
                                                    >
                                                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            placeholder="******"
                                            inputProps={{}}
                                        />
                                        {touched.password && errors.password && (
                                            <FormHelperText error id="helper-text-password-signup">
                                                {errors.password}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                    <FormControl fullWidth sx={{ mt: 2 }}>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item>
                                                <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" fontSize="0.75rem">
                                                    {level?.label}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </FormControl>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-signup">Confirm Password</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.cpassword && errors.cpassword)}
                                            id="cpassword-signup"
                                            type={showPassword ? 'text' : 'password'}
                                            value={values.Cpassword}
                                            name="cpassword"
                                            onBlur={handleBlur}
                                            onChange={(e) => {
                                                handleChange(e);
                                                changePassword(e.target.value);
                                            }}
                                            placeholder="******"
                                            inputProps={{}}
                                            validate={validatePassword}
                                        />
                                        {touched.cpassword && errors.cpassword && (
                                            <FormHelperText error id="helper-text-password-signup">
                                                {errors.cpassword}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                {errors.submit && (
                                    <Grid item xs={12}>
                                        <FormHelperText error>{errors.submit}</FormHelperText>
                                    </Grid>
                                )}
                                <Grid item xs={12}>
                                    <AnimateButton>
                                        <Button
                                            disableElevation
                                            onClick={isSubmitting}
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >
                                            Change Password
                                        </Button>
                                    </AnimateButton>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </EditWrapper>
        </>
    );
};

export default AuthRegister;
