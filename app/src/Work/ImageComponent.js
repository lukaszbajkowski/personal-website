import React from "react";
import {Box, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import './Work.scss';

const ImageComponent = React.memo(({id, src, alt, title, subtitle}) => (
    <Grid
        item
        xs={12}
        md={4}
        className={`work-item`}
    >
        <Link to={`/work/${id}`}>
            <Box className={`work-box`}>
                <div className="square-container">
                    <img
                        src={src}
                        alt={alt}
                        className={`work-img`}
                    />
                    <h2 className={`title-work`}>
                        {title}
                    </h2>
                    <span className={`subtitle-work`}>
                        {subtitle}
                    </span>
                </div>
            </Box>
        </Link>
    </Grid>
));

export default ImageComponent;