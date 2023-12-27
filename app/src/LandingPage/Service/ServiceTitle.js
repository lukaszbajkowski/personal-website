import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import './Service.scss'

const ServiceTitle = () => {
    return (
        <Toolbar className={`services-title-toolbar`}>
            <Typography
                variant={`h5`}
                component={`span`}
                className={`services-text`}
            >
                Services
            </Typography>
        </Toolbar>
    )
};

export default ServiceTitle;