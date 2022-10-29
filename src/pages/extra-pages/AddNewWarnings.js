import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';
import EditWrapper from 'pages/authentication/EditWrapper';
import WarningForm from './WarningForm';

// project import
// import EditWrapper from './EditWrapper';

// ================================|| Edit ||================================ //

const EditProfile = () => (
    <EditWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}></Stack>
            </Grid>
            <Grid item xs={12}>
                <WarningForm />
            </Grid>
        </Grid>
    </EditWrapper>
);

export default EditProfile;
