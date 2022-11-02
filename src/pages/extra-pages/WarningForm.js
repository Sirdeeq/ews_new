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
import { PlusOutlined } from '@ant-design/icons';
import { Hidden, TextField } from '../../../node_modules/@mui/material/index';
import MultipleSelect from './MultipleSelect';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

// ============================|| FIREBASE - REGISTER ||============================ //

const EditWarningForm = () => {
    const [level, setLevel] = useState();
    const [showPassword, setShowPassword] = useState(false);
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
    const navigate = useNavigate();
    const goo = () => {
        navigate('/admin/dashboard/warnings');
    };
    useEffect(() => {
        changePassword('');
    }, []);
    // const [edit, setEdit] = useState(false);
    const disasters = [
        {
            value: 'select',
            label: '0'
        },
        {
            value: 'nema',
            label: '1'
        },
        {
            value: 'sema',
            label: '2'
        },
        {
            value: 'undrr',
            label: '3'
        },
        {
            value: 'un-spider',
            label: '4'
        }
    ];
    const disaster_type = [
        {
            value: 'select',
            label: 'Select'
        },
        {
            value: 'flooding',
            label: 'Flooding'
        },
        {
            value: 'fire-outbreak',
            label: 'Fire Outbeak'
        },
        {
            value: 'tunado',
            label: 'Tunado'
        },
        {
            value: 'erosion',
            label: 'Erosion'
        }
    ];

    const [agency_id, setAgency_id] = useState(disasters);
    const [disaster, setDisaster] = useState(disaster_type);
    const [severity, setSeverity] = useState(disaster_type);

    const handleChange2 = (event, value) => {
        setAgency_id(value);
        setDisaster(value);
        setSeverity(value);
        // console.log(value);
    };
    return (
        <>
            <Formik
                initialValues={{
                    agency_id: '',
                    title: '',
                    sdate: '',
                    edate: '',
                    lat: '',
                    long: '',
                    description: '',
                    status: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    agency_id: Yup.string().max(255).required('Id is required'),
                    sdate: Yup.date().required('Date is required'),
                    edate: Yup.date().required('Date is required')
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
                        <Grid item xs={12} md={12}>
                            <center>
                                <PlusOutlined style={{ fontSize: '60px' }} />
                                <br />
                                <h1>Add New Warning</h1>
                            </center>
                        </Grid>
                        <Grid container spacing={3}>
                            {/* <Grid item xs={12} md={4}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="agency_id">Agency Id</InputLabel>
                                    <TextField
                                        select
                                        value={agency_id}
                                        name="agency_id"
                                        // error={Boolean(touched.agency_id && errors.agency_id)}
                                        SelectProps={{
                                            native: true
                                        }}
                                        onBlur={handleBlur}
                                        onChange={handleChange2}
                                        // placeholder="Agency Type"
                                        // helperText="Please select your agency id"
                                        inputProps={{}}
                                    >
                                        {disasters.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </Stack>
                            </Grid> */}
                            <Grid item xs={12} md={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="title-signup">Title</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        // error={Boolean(touched.title && errors.title)}
                                        id="title-signup"
                                        type="title"
                                        value={values.title}
                                        name="title"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        // placeholder="Doe"
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="disaster">Disaster Type</InputLabel>
                                    <TextField
                                        select
                                        value={disaster}
                                        name="disaster"
                                        SelectProps={{
                                            native: true
                                        }}
                                        onBlur={handleBlur}
                                        onChange={handleChange2}
                                        // placeholder="Agency Type"
                                        // helperText="Please select your disaster type"
                                        inputProps={{}}
                                    >
                                        {disaster_type.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="disaster">Severity</InputLabel>
                                    <TextField
                                        select
                                        value={severity}
                                        name="severity"
                                        SelectProps={{
                                            native: true
                                        }}
                                        onBlur={handleBlur}
                                        onChange={handleChange2}
                                        // placeholder="Agency Type"
                                        // helperText="Please select your disaster type"
                                        inputProps={{}}
                                    >
                                        {disaster_type.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="title-signup">Longitide</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        // error={Boolean(touched.title && errors.title)}
                                        id="title-signup"
                                        type="number"
                                        value={values.long}
                                        name="long"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        disabled
                                        // placeholder="Doe"
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="title-signup">Latitude</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        // error={Boolean(touched.title && errors.title)}
                                        id="lat-signup"
                                        type="number"
                                        value={values.lat}
                                        name="lat"
                                        disabled
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        // placeholder="Doe"
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="title-signup">Start Date</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        // error={Boolean(touched.title && errors.title)}
                                        id="title-signup"
                                        type="datetime-local"
                                        value={values.sdate}
                                        name="sdate"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        // placeholder="Doe"
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="title-signup">End Date</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        // error={Boolean(touched.title && errors.title)}
                                        id="title-signup"
                                        type="datetime-local"
                                        value={values.edate}
                                        name="edate"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        // placeholder="Doe"
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="disaster">State</InputLabel>
                                    <MultipleSelect />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="disaster">LGA</InputLabel>
                                    <TextField
                                        select
                                        value={severity}
                                        name="severity"
                                        SelectProps={{
                                            native: true
                                        }}
                                        onBlur={handleBlur}
                                        onChange={handleChange2}
                                        // placeholder="Agency Type"
                                        // helperText="Please select your disaster type"
                                        inputProps={{}}
                                    >
                                        {disaster_type.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="agency-signup">Description</InputLabel>
                                    <TextField
                                        id="filled-multiline-static"
                                        // label="Multiline"
                                        multiline
                                        name="description"
                                        value={values.description}
                                        rows={2}
                                        // error={Boolean(touched.title && errors.title)}
                                    />
                                </Stack>
                            </Grid>
                            <Hidden>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="agency-signup">Status</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            // error={Boolean(touched.title && errors.title)}
                                            id="title-signup"
                                            type="text"
                                            value={values.status}
                                            name="status"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            // placeholder="Doe"
                                            inputProps={{}}
                                        />
                                    </Stack>
                                </Grid>
                            </Hidden>
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
                                            // isSubmitting();
                                            // handleSubmit();
                                            goo();
                                        }}
                                    >
                                        Add Warning
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

export default EditWarningForm;
