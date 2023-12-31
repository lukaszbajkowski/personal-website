import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import './About.scss'

const ContactLink = () => {
    return (
        <Toolbar className={`about-toolbar contact-link-size`}>
            <Link
                to={`/contact`}
            >
                <Typography
                    className={`contact-link`}
                    component={`div`}
                >
                    <span>
                        Get in contact
                    </span>
                    <ArrowRightAltSharpIcon className={`arrow-border`}/>
                </Typography>
            </Link>
        </Toolbar>
    )
};

export default ContactLink;

