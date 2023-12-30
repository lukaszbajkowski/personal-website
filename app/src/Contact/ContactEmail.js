import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import React from "react";
import './Contact.scss'

const ContactEmail = () => {
    return (
        <Toolbar className={`contact-mail-toolbar`}>
            <Link
                to={`mailto:contact.lukasz.bajkowski@gmail.com`}
                className={`mail-box`}
            >
                <Typography
                    className={`mail-link`}
                    component={`div`}
                >
                    <span>
                        Send me an email
                    </span>
                    <ArrowRightAltSharpIcon className={`arrow-border`}/>
                </Typography>
            </Link>
        </Toolbar>
    )
};

export default ContactEmail;
