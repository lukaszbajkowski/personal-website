import {ThemeProvider} from "@mui/material";
import renderRelatedPosts from "./RelatedPostsMap";
import React from "react";
import theme from "../../Style/Theme";
import '../WorkDetails.scss'

const renderRelatedProjectsSection = (relatedPosts, id) => (
    <div className="related-projects-section" data-radium="true">
        <div className="related-projects-box" data-radium="true">
            <h2 className={`related-projects-title`} data-radium="true">
                Related projects
            </h2>
        </div>
        <ThemeProvider theme={theme}>
            {renderRelatedPosts(relatedPosts, id)}
        </ThemeProvider>
    </div>
);

export default renderRelatedProjectsSection;