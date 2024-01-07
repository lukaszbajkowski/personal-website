import Toolbar from "@mui/material/Toolbar";
import {Link} from "react-router-dom";
import React from "react";
import './Works.scss';
import {workData} from "../../Work/WorkData";

const WorksContent = () => {
    return (
        <>
            {workData.map((work, index) => (
                <Toolbar
                    className={`works-content-toolbar`}
                    key={index}
                >
                    <Link
                        to={`work/${index + 1}`}
                        className={`work-link`}
                    >
                        <h2
                            data-radium="true"
                            className={`work-link-title`}
                        >
                            {work.title}
                        </h2>
                        <p className={`work-link-content`}>
                            {work.content}
                        </p>
                    </Link>
                </Toolbar>
            ))}
        </>
    )
};

export default WorksContent;


