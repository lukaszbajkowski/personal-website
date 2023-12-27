import {navItems} from "./AppbarItems";
import {Link, useLocation} from "react-router-dom";
import Box from "@mui/material/Box";
import React from "react";
import './Appbar.scss';

const NavItems = () => {
    const location = useLocation();

    return (
        <Box>
            {navItems.map((item) => (
                <Link
                    key={item}
                    className={`button ${location.pathname === `/${item.toLowerCase()}` ? 'btn-decoration' : ''}`}
                    to={`/${item.toLowerCase()}`}
                >
                    {item}
                </Link>
            ))}
        </Box>
    )
};

export default NavItems;