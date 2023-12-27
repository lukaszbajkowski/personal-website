import { createTheme } from "@mui/material/styles";

const breakpointValues = {
    xs: 0,
    sm: 600,
    md: 800,
    lg: 1200,
    xl: 1536,
};

const theme = createTheme({
    breakpoints: {
        values: breakpointValues,
    },
});

export default theme;
