import React from 'react';
import { Avatar, Button, Grid, Stack } from '../../../node_modules/@mui/material/index';
import AnimateButton from 'components/@extended/AnimateButton';
import EditWrapper from 'pages/authentication/EditWrapper';

function ViewUser() {
    return (
        <div>
            <EditWrapper>
                <Grid spacing={2} direction="column" alignItems="center" justifyContent="center" container>
                    <Avatar
                        alt="Background"
                        src="https://imgs.search.brave.com/kxnZO19mwbP1CoNL7XHiPlHFg3j0vEDjnkaU1DJHr10/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/VURlNzQtX09SNk8z/UDRWLTNfRllRSGFF/NyZwaWQ9QXBp"
                        sx={{ width: 150, height: 150 }}
                    />
                    <h1>User Information</h1>
                </Grid>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Stack sx={{ backgroundColor: '#D0D7DA', padding: '10px' }} spacing={1}>
                            <span>
                                <b>FirstName:</b>
                            </span>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack sx={{ backgroundColor: '#D0D7DA', padding: '10px' }} spacing={1}>
                            <span>
                                <b>LastName:</b>
                            </span>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack sx={{ backgroundColor: '#D0D7DA', padding: '10px' }} spacing={1}>
                            <span>
                                <b>Type Of User:</b>
                            </span>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack sx={{ backgroundColor: '#D0D7DA', padding: '10px' }} spacing={1}>
                            <span>
                                <b>Phone Number:</b>
                            </span>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Stack sx={{ backgroundColor: '#D0D7DA', padding: '10px' }} spacing={1}>
                            <span>
                                <b>Email</b>
                            </span>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Stack sx={{ backgroundColor: '#D0D7DA', padding: '10px' }} spacing={1}>
                            <span>
                                <b>Address:</b>
                            </span>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack sx={{ backgroundColor: '#D0D7DA', padding: '10px' }} spacing={1}>
                            <span>
                                <b>Local Government:</b>
                            </span>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack sx={{ backgroundColor: '#D0D7DA', padding: '10px' }} spacing={1}>
                            <span>
                                <b>State:</b>
                            </span>
                        </Stack>
                    </Grid>
                    {/* <Grid item xs={12} md={12}>
                        <Stack sx={{ backgroundColor: '#D0D7DA', padding: '10px' }} spacing={1}>
                            <span>
                                <b>Role</b>
                            </span>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Stack sx={{ backgroundColor: '#D0D7DA', padding: '10px' }} spacing={1}>
                            <span>
                                <b>Phone Number</b>
                            </span>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Stack sx={{ backgroundColor: '#D0D7DA', padding: '10px' }} spacing={1}>
                            <span>
                                <b>Email:</b>
                            </span>
                        </Stack>
                    </Grid> */}
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
                                color="primary"
                            >
                                Edit
                            </Button>
                        </AnimateButton>
                    </Grid>
                </Grid>
            </EditWrapper>
        </div>
    );
}

export default ViewUser;
