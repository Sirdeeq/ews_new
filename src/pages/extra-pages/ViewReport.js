import React from 'react';
import { Button, Grid, InputLabel, Stack } from '../../../node_modules/@mui/material/index';
import EditWrapper from 'pages/authentication/EditWrapper';
import AnimateButton from 'components/@extended/AnimateButton';
import { WarningOutlined } from '@ant-design/icons';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

function ViewReports(props) {
    const navigate = useNavigate();
    return (
        <div>
            <EditWrapper>
                <Grid container spacing={2}>
                    <Grid xs={12} md={12}>
                        <center>
                            <h1>
                                {/* <WarningOutlined style={{ fontSize: 100 }} />
                                <br /> */}
                                View Reports
                            </h1>
                        </center>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="">Agency Id</InputLabel>
                            <p>{props.id}</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="">Title</InputLabel>
                            <p>{}</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="">Disaster Type</InputLabel>
                            <p>{props.type}</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="">Severity</InputLabel>
                            <p>{props.severity}</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="">Longitude</InputLabel>
                            <p>{props.long}</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="">Latitude</InputLabel>
                            <p>{props.lat}</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="">Start Date</InputLabel>
                            <p>{props.sdate}</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="">End date</InputLabel>
                            <p>{props.edate}</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="">State</InputLabel>
                            <p>{props.state}</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="">LGA</InputLabel>
                            <p>{props.lga}</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="">Description</InputLabel>
                            <p>{props.description}</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="">Status</InputLabel>
                            <p>{props.status}</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="">Date created</InputLabel>
                            <p>{props.date}</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4} />
                    <Grid item xs={12} md={4}>
                        <AnimateButton>
                            <Button
                                disableElevation
                                // disabled={isSubmitting}
                                fullWidth
                                size="small"
                                type="submit"
                                variant="contained"
                                color="success"
                                onClick={() => navigate('/admin/dashboard/edit-warning')}
                            >
                                Publish
                            </Button>
                        </AnimateButton>
                    </Grid>
                </Grid>
            </EditWrapper>
        </div>
    );
}

export default ViewReports;
