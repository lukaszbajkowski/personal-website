import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import './Works.scss';

const WorksAll = () => {
    return (
        <Toolbar className={`work-toolbar`}>
            <Link
                to={`/work`}
                className={`work-link-box`}
            >
                <Typography
                    className={`work-link-button`}
                    component={`div`}
                >
                    <span>
                        View all work
                    </span>
                    <ArrowRightAltSharpIcon className={`arrow-border`}/>
                </Typography>
            </Link>
        </Toolbar>
    )
};

export default WorksAll;

