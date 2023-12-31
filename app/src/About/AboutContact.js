import Box from "@mui/material/Box";
import {aboutData} from "./AboutData";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import './About.scss'

const AboutContact = () => {
    return (
        <Toolbar className={`about-toolbar-content contact-link-size`}>
            <Box>
                {aboutData.map((text, index) => (
                    <Typography
                        key={index}
                        className={`about-text`}
                        component={`p`}
                    >
                        {text}
                    </Typography>
                ))}
            </Box>
        </Toolbar>
    )
};

export default AboutContact;
