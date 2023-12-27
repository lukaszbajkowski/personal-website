import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import './Appbar.scss';

const Logo = () => {
    return (
        <Box className={`toolbar-box`}>
            <Link
                to={`/`}
                className={`logo-link`}
            >
                <Typography
                    variant="h4"
                    component="span"
                    className={`logo`}
                >
                    Bajkowski
                </Typography>
            </Link>
        </Box>
    )
};

export default Logo;