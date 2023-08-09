import { Card, CardActions, CardMedia, CardContent, Typography } from '@mui/material' 
import Link from 'next/link'
import React from 'react';

interface CardProps {
    imgUrl: string;
    title: string;
    description: string;
    readDuration: number;
    cardLink: string;
    ref: any;

}


// eslint-disable-next-line react/display-name
export const BlogCard = React.forwardRef<HTMLAnchorElement, CardProps>((props, ref) => {
    const {imgUrl, title, description, readDuration, cardLink} = props;
    return (
        <Link href={cardLink} passHref >
            <a>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={imgUrl}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography>{readDuration}mins</Typography>
                </CardActions>
            </Card>
            </a>

        </Link>
    )
});