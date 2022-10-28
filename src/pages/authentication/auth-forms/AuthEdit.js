import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { Avatar, TextField } from '../../../../node_modules/@mui/material/index';
// import avatar from '../../../assets/images/icons/avatar-2.png';

// ============================|| EDIT ||============================ //

const AuthEdit = () => {
    const [edit, setEdit] = useState(false);
    const disasters = [
        {
            value: 'select',
            label: 'Select'
        },
        {
            value: 'nema',
            label: 'NEMA'
        },
        {
            value: 'sema',
            label: 'SEMA'
        },
        {
            value: 'undrr',
            label: 'UNDRR'
        },
        {
            value: 'un-spider',
            label: 'UN-SPIDER'
        }
    ];

    const [type, setType] = useState('');

    const handleChange2 = (event) => {
        setType(event.target.value);
        console.log(type);
    };

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    role: '',
                    phone: '',
                    agency: '',
                    address: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().max(20).required('Name is required'),
                    type: Yup.string().max(25).required('Agency Type is required'),
                    phone: Yup.string().max(11).required('Agency Type is required'),
                    role: Yup.string().max(15).required('Role is required'),
                    address: Yup.string().max(200).required('Address is required'),
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
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
                        <Grid spacing={2} direction="column" alignItems="center" justifyContent="center" container>
                            <Avatar
                                alt="Background"
                                src="https://imgs.search.brave.com/kxnZO19mwbP1CoNL7XHiPlHFg3j0vEDjnkaU1DJHr10/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/VURlNzQtX09SNk8z/UDRWLTNfRllRSGFF/NyZwaWQ9QXBp"
                                sx={{ width: 150, height: 150 }}
                            />
                        </Grid>
                        <br />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="name-signup">Name*</InputLabel>
                                    <OutlinedInput
                                        id="name-login"
                                        type="name"
                                        value={values.name}
                                        name="name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Agency Name"
                                        fullWidth
                                        error={Boolean(touched.name && errors.name)}
                                    />
                                    {touched.name && errors.name && (
                                        <FormHelperText error id="helper-text-name-signup">
                                            {errors.name}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="type-signup">Type*</InputLabel>
                                    <TextField
                                        select
                                        value={type}
                                        name="type"
                                        SelectProps={{
                                            native: true
                                        }}
                                        onBlur={handleBlur}
                                        onChange={handleChange2}
                                        placeholder="Agency Type"
                                        helperText="Please select your agency type"
                                        inputProps={{}}
                                    >
                                        {disasters.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="role-signup">Role</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.role && errors.role)}
                                        id="role-signup"
                                        value={values.role}
                                        name="role"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="."
                                        inputProps={{}}
                                    />
                                    {touched.role && errors.role && (
                                        <FormHelperText error id="helper-text-role-signup">
                                            {errors.role}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="address-signup">Address</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.address && errors.address)}
                                        id="address-signup"
                                        value={values.address}
                                        name="address"
                                        multiline
                                        rows={1}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="."
                                        inputProps={{}}
                                    />
                                    {touched.address && errors.address && (
                                        <FormHelperText error id="helper-text-address-signup">
                                            {errors.address}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="phone-signup">Phone Number</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.phone && errors.phone)}
                                        id="phone-signup"
                                        value={values.phone}
                                        name="phone"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="."
                                        inputProps={{}}
                                    />
                                    {touched.phone && errors.phone && (
                                        <FormHelperText error id="helper-text-phone-signup">
                                            {errors.phone}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                        id="email-login"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="demo@agency.com"
                                        inputProps={{}}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="helper-text-email-signup">
                                            {errors.email}
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
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="small"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Update
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthEdit;
