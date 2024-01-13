import React from 'react';
import {Grid} from '@mui/material';
import './Work.scss';
import {workData} from './WorkData';
import ImageComponent from "./ImageComponent";

const WorkGrid = () => {
    return (
        <Grid
            container
            spacing={2}
            className={`work-grid`}
        >
            {workData.map((data, index) => (
                <ImageComponent
                    key={data.id}
                    id={index + 1}
                    src={data.imgSrc}
                    alt={`Work ${data.id}`}
                    title={data.title}
                    subtitle={data.subtitle}
                />
            ))}
        </Grid>
    );
};

export default WorkGrid;
