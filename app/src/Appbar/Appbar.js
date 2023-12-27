import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import './Appbar.scss';
import Logo from "./Logo";
import NavItems from "./NavItems";

export default function Appbar () {
    return (
        <Box>
            <CssBaseline/>
            <AppBar
                component="nav"
                color={"transparent"}
                className={`appbar`}
            >
                <Toolbar className={`appbar-toolbar`}>
                    <Logo/>
                    <NavItems/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

Appbar.propTypes = {
    window: PropTypes.func,
};
