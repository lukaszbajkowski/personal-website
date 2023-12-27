import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import './Landing.scss';

const ContactButton = () => {
    return (
        <Toolbar className={`contact-toolbar`}>
            <Link
                to={`/contact`}
                className={`contact-link-box`}
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

export default ContactButton;