import {Grid} from "@mui/material";
import {servicesData} from "./ServicesData";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import './Service.scss'

const ServicesContent = () => {
    return (
        <Toolbar className={`services-toolbar`}>
            <Grid
                container
                spacing={1}
            >
                {servicesData.map((service, index) => (
                    <Grid
                        key={index}
                        item
                        xs={12}
                        md={4}
                        className={`service-item`}
                    >
                        <Box className={`service-box`}>
                            <span className={`service-span`}>
                                <img src={service.imgSrc} alt={'text'} className={`service-img`}/>
                                <h2
                                    data-radium="true"
                                    className={`service-title`}
                                >
                                    {service.title}
                                </h2>
                                <p className={`service-text`}>
                                    {service.text}
                                </p>
                            </span>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Toolbar>
    )
};

export default ServicesContent;