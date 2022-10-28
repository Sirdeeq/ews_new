import EditWrapper from 'pages/authentication/EditWrapper';
import React from 'react';
import { Box, Grid } from '../../../node_modules/@mui/material/index';
import CardProfile from '../authentication/Prof';
function ChangePicture() {
    return (
        <div>
            <EditWrapper>
                <CardProfile />
            </EditWrapper>
        </div>
    );
}

export default ChangePicture;
