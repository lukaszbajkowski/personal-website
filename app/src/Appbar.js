import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Link, useLocation} from 'react-router-dom'; // Dodane useLocation
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Appbar.scss';

const navItems = ['Work', 'About', 'Contact'];

function Appbar () {
    const location = useLocation();

    return (
        <Box>
            <CssBaseline/>
            <AppBar
                component="nav"
                color={"transparent"}
                className={`appbar`}
            >
                <Toolbar className={`appbar-toolbar`}>
                    <Box className={`toolbar-box`}>
                        <Typography
                            variant="h4"
                            component="span"
                            className={`logo`}
                        >
                            Bajkowski
                        </Typography>
                    </Box>
                    <Box>
                        {navItems.map((item) => (
                            <Link key={item}
                                  className={`button ${location.pathname === `/${item.toLowerCase()}` ? 'btn-decoration' : ''}`}
                                  to={`/${item.toLowerCase()}`}
                            >
                                {item}
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

        </Box>
    );
}

Appbar.propTypes = {
    window: PropTypes.func,
};

export default Appbar;
