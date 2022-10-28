import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function Projects() {
    return (
        <ImageList
            sx={{ width: '80vw', height: 'fit-content' }}
            variant="quilted"
            cols={4}
            rowHeight={200}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.key} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 200, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        key:'r1',
        img: 'https://source.unsplash.com/random',
        title: 'random1',
        rows: 2,
        cols: 2,
    },
    {
        key:'r2',
        img: 'https://source.unsplash.com/random',
        title: 'random2',
    },
    {
        key:'r3',
        img: 'https://source.unsplash.com/random',
        title: 'random3',
    },
    {
        key:'r4',
        img: 'https://source.unsplash.com/random',
        title: 'random4',
        cols: 2,
    },
    {
        key:'r5',
        img: 'https://source.unsplash.com/random',
        title: 'random5',
        cols: 2,
    },
    {
        key:'r6',
        img: 'https://source.unsplash.com/random',
        title: 'random6',
        rows: 2,
        cols: 2,
    },
    {
        key:'r7',
        img: 'https://source.unsplash.com/random',
        title: 'random7',
    },
    {
        key:'r8',
        img: 'https://source.unsplash.com/random',
        title: 'random8',
    },
    {
        key:'r9',
        img: 'https://source.unsplash.com/random',
        title: 'random9',
        rows: 2,
        cols: 2,
    },
    {
        key:'r10',
        img: 'https://source.unsplash.com/random',
        title: 'random10',
    },
    {
        key:'r11',
        img: 'https://source.unsplash.com/random',
        title: 'random11',
    },
    {
        key:'r12',
        img: 'https://source.unsplash.com/random',
        title: 'random12',
        cols: 2,
    },
];
