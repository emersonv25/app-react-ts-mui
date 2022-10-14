import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CardInfo } from '../../@types/cardInfo';

export default function CardPoster(props : CardInfo) {
    return (
        <Card sx={{ display:'flex', margin: 1}} >
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="330"
                    width="100%"
                    image={`${props.image}`}
                />
                <CardContent sx={{ maxHeight: 40, padding: 1 }}>
                    <Typography gutterBottom variant="subtitle1" align="left">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}