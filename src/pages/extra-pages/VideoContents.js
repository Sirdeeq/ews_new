/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ReactPlayer from '../../../node_modules/react-player/lib/index';

export default function VideoContents() {
    return (
        <Card sx={{ maxWidth: 335 }}>
            <CardActionArea>
                <iframe
                    width="335"
                    height="315"
                    src="https://www.youtube.com/embed/iRYDYrj3Bfw"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </CardActionArea>
        </Card>
    );
}
