import React from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import './Appbar.scss';
import Logo from './Logo';
import NavItems from './NavItems';

export default function Appbar () {
    const location = useLocation();
    const isContactPage = location.pathname === '/contact';
    const isWorkPage = location.pathname === '/work';

    return (
        <Box>
            <CssBaseline/>
            <AppBar
                component="nav"
                color="transparent"
                className={`appbar ${isContactPage || isWorkPage ? 'light-motive' : ''}`}
            >
                <Toolbar className="appbar-toolbar">
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
