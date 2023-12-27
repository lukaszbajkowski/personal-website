import {Grid} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import {iconComponents} from "./IconComponents";
import './Footer.scss'

const SocialMediaIcon = () => {
    return (
        <Grid
            item
            xs={12}
            md={3}
            className={`buttons-item`}
        >
            {iconComponents.map((item, index) => (
                <Link
                    key={index}
                    to={item.link}
                    className={`footer-button`}
                >
                    {item.icon}
                </Link>
            ))}
        </Grid>
    )
};

export default SocialMediaIcon;
