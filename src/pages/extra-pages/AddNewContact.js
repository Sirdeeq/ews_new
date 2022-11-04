import AnimateButton from 'components/@extended/AnimateButton';
import MainCard from 'components/MainCard';
import EditWrapper from 'pages/authentication/EditWrapper';
import React, { useState } from 'react';
// import Typography from 'themes/overrides/Typography';
import {
    Button,
    Card,
    CardActionArea,
    CardHeader,
    CardMedia,
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '../../../node_modules/@mui/material/index';
// import { Formik } from '../../../node_modules/formik/dist/Formik';

import * as Yup from 'yup';
import { Formik } from 'formik';

export default function AddNewContact() {
    const [section, setSection] = useState('');
    const [showCard, setShowCard] = useState(true);
    return (
        <div>
            {/* <EditWrapper> */}
            {showCard ? (
                <Grid container rowSpacing={4.5} columnSpacing={2.75} xs={12} md={12} lg={12}>
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ textAlign: 'center', justifyContent: 'center' }}>
                        <h3>Add New</h3>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
                    <Grid item xs={12} sm={3} md={3} lg={3}>
                        <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
                            <Stack alignItems="center" spacing={2.5}>
                                <CardMedia component="img" image="" sx={{ width: 112 }} />
                                <Stack alignItems="center">
                                    <Typography variant="h5">Email</Typography>
                                    {/* <Typography variant="h6" color="secondary">
                                    Checkout pro features
                                </Typography> */}
                                </Stack>
                                <AnimateButton>
                                    <Button
                                        // component={Link}
                                        // target="_blank"
                                        // href="/admin/dashboard/new-phone"
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() => {
                                            setSection('email');
                                            setShowCard(false);
                                        }}
                                    >
                                        Add New Email
                                    </Button>
                                </AnimateButton>
                            </Stack>
                        </MainCard>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} lg={3}>
                        <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
                            <Stack alignItems="center" spacing={2.5}>
                                <CardMedia component="img" image="" sx={{ width: 112 }} />
                                <Stack alignItems="center">
                                    <Typography variant="h5">Phone Number</Typography>
                                    {/* <Typography variant="h6" color="secondary">
                                    Checkout pro features
                                </Typography> */}
                                </Stack>
                                <AnimateButton>
                                    <Button
                                        // component={Link}
                                        // target="_blank"
                                        // href="/admin/dashboard/new-email"
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() => {
                                            setSection('phone');
                                            setShowCard(false);
                                        }}
                                    >
                                        Add New Phone Number
                                    </Button>
                                </AnimateButton>
                            </Stack>
                        </MainCard>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
                </Grid>
            ) : (
                <>{section === 'email' ? <AddNewEmail /> : <AddNewPhone />}</>
            )}
            {/* </EditWrapper> */}
        </div>
    );
}

export function AddNewEmail() {
    return (
        <div>
            <EditWrapper>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="baseline"
                            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
                        ></Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Formik
                            initialValues={{
                                email: '',
                                // password: '123456',
                                submit: null
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                                password: Yup.string().max(255).required('Password is required')
                            })}
                            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                                try {
                                    setStatus({ success: false });
                                    setSubmitting(false);
                                    // navigate('/admin/dashboard/default');
                                } catch (err) {
                                    setStatus({ success: false });
                                    setErrors({ submit: err.message });
                                    setSubmitting(false);
                                }
                            }}
                        >
                            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                                <form noValidate onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="email-new">Email Address</InputLabel>
                                                <OutlinedInput
                                                    id="email-new"
                                                    type="email"
                                                    value={values.email}
                                                    name="email"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    placeholder="Enter email address"
                                                    fullWidth
                                                    error={Boolean(touched.email && errors.email)}
                                                />
                                                {touched.email && errors.email && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {errors.email}
                                                    </FormHelperText>
                                                )}
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <AnimateButton>
                                                <Button
                                                    disableElevation
                                                    // disabled={isSubmitting}
                                                    fullWidth
                                                    size="large"
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => {
                                                        isSubmitting();
                                                        handleSubmit();
                                                    }}
                                                >
                                                    Add Email
                                                </Button>
                                            </AnimateButton>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </EditWrapper>
        </div>
    );
}

export function AddNewPhone() {
    return (
        <div>
            <EditWrapper>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="baseline"
                            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
                        ></Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Formik
                            initialValues={{
                                phone: '',
                                // password: '123456',
                                submit: null
                            }}
                            validationSchema={Yup.object().shape({
                                // phone: Yup.string().number('Must be a valid phone number').max(255).required('Phone NUmber is required'),
                                password: Yup.string().max(255).required('Password is required')
                            })}
                            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                                try {
                                    setStatus({ success: false });
                                    setSubmitting(false);
                                    // navigate('/admin/dashboard/default');
                                } catch (err) {
                                    setStatus({ success: false });
                                    setErrors({ submit: err.message });
                                    setSubmitting(false);
                                }
                            }}
                        >
                            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                                <form noValidate onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="phone-new">Phone Number</InputLabel>
                                                <OutlinedInput
                                                    id="phone-new"
                                                    type="number"
                                                    value={values.phone}
                                                    name="phone"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    placeholder="Enter phone number"
                                                    fullWidth
                                                    error={Boolean(touched.phone && errors.phone)}
                                                />
                                                {touched.phone && errors.phone && (
                                                    <FormHelperText error id="standard-weight-helper-text-phone-login">
                                                        {errors.phone}
                                                    </FormHelperText>
                                                )}
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <AnimateButton>
                                                <Button
                                                    disableElevation
                                                    // disabled={isSubmitting}
                                                    fullWidth
                                                    size="large"
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => {
                                                        isSubmitting();
                                                        handleSubmit();
                                                    }}
                                                >
                                                    Add Phone Number
                                                </Button>
                                            </AnimateButton>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </EditWrapper>
        </div>
    );
}
