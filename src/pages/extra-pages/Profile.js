import React from 'react';
import { Avatar, Button, Grid, Stack } from '../../../node_modules/@mui/material/index';
import AnimateButton from 'components/@extended/AnimateButton';
import EditWrapper from 'pages/authentication/EditWrapper';

function Profile() {
    return (
        <div>
            <EditWrapper>
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
                            <span>
                                <b>Name:</b>
                            </span>{' '}
                            Sadiq.
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Stack spacing={1}>
                            <span>
                                <b>Agency Type:</b>
                            </span>{' '}
                            Sadiq.
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Stack spacing={1}>
                            <span>
                                <b>Role</b>
                            </span>{' '}
                            NEMA.
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Stack spacing={1}>
                            <span>
                                <b>Address:</b>
                            </span>{' '}
                            Sadiq.
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Stack spacing={1}>
                            <span>
                                <b>Phone Number</b>
                            </span>{' '}
                            NEMA.
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Stack spacing={1}>
                            <span>
                                <b>Email:</b>
                            </span>{' '}
                            Sadiq.
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

export default Profile;
