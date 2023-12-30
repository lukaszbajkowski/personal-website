import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import './Contact.scss'

const ContactInfo = () => {
    return (
        <Toolbar className={`contact-page-toolbar`}>
            <Typography
                variant={`h5`}
                component={`span`}
                className={`contact-text`}
            >
                Want to say hello or have a question? Ping me.
            </Typography>
        </Toolbar>
    )
};

export default ContactInfo;
