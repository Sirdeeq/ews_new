/* eslint-disable no-unused-vars */
import { useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project import
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import PicturesContents from './PicturesContents';
import VideoContents from './VideoContents';

// assets
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '../../../node_modules/@mui/material/index';

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales Content status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Content = () => {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');
    const navigate = useNavigate();
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* <Grid container xs={12} md={12} marginTop={3}>
                <Button>
                    <IconButton
                        // component={AddNewWarnings}
                        href="/admin/dashboard/view-Content"
                        // target="_blank"
                        disableRipple
                        color="secondary"
                        title=""
                        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
                    >
                        <PlusOutlined />
                    </IconButton>
                </Button>
            </Grid> */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="All Contents" count="4,42,246" percentage={59.4} extra="45,000" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="2022 Contents" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Video Contents" count="78,250" percentage={70.5} extra="8,900" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Picture Contents" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
            {/* Pictures */}
            <Grid container rowSpacing={1.5}>
                <Grid xs={12} md={12} lg={12}>
                    <center>
                        <h1>Pictures</h1>
                    </center>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <PicturesContents />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <PicturesContents />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <PicturesContents />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <PicturesContents />
                </Grid>
            </Grid>

            <br />
            <br />
            <br />
            {/* Videos */}
            <Grid container rowSpacing={1.5}>
                <Grid xs={12} md={12} lg={12}>
                    <center>
                        <h1>Videos</h1>
                    </center>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <VideoContents />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <VideoContents />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <VideoContents />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <VideoContents />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Content;
