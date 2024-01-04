import React from 'react';
import {Box, Grid} from '@mui/material';
import './Work.scss';
import {workData} from "./WorkData";
import {Link} from "react-router-dom";

const ImageComponent = ({src, id, alt, title, subtitle}) => (
    <Grid item xs={12} md={4} className={`work-item`}>
        <Link
            to={`/work/${id}`}
        >
            <Box className={`work-box`}>
                <div className="square-container">
                    <img src={src} alt={alt} className={`work-img`}/>
                    <h2 data-radium="true" className={`title-work`}>
                        {title}
                    </h2>
                    <span data-radium="true" className={`subtitle-work`}>
                        {subtitle}
                    </span>
                </div>
            </Box>
        </Link>
    </Grid>
);

const WorkGrid = () => {
    return (
        <Grid container spacing={2} className={`work-grid`}>
            {workData.map((data, index) => (
                <ImageComponent
                    key={index}
                    id={index + 1}
                    src={data.imgSrc}
                    alt={`Work ${index + 1}`}
                    title={data.title}
                    subtitle={data.subtitle}
                />
            ))}
        </Grid>
    );
};

export default WorkGrid;
