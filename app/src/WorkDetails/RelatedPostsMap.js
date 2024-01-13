import React from 'react';
import './WorkDetails.scss'
import {workData} from "../Work/WorkData";
import {Grid} from "@mui/material";
import ImageComponent from "../Work/ImageComponent";

const renderRelatedPosts = (relatedPosts) => {
    const relatedProjects = relatedPosts.slice(0, 3);

    return (
        <Grid container spacing={2} className={`work-grid`}>
            {relatedProjects.map((postId, index) => (
                <ImageComponent
                    key={index}
                    id={postId}
                    src={workData[postId - 1].imgSrc}
                    alt={`Work ${postId}`}
                    title={workData[postId - 1].title}
                    subtitle={workData[postId - 1].subtitle}
                    relatedPosts={workData[postId - 1].related_posts}
                />
            ))}
        </Grid>
    );
};

export default renderRelatedPosts;