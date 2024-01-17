import React from 'react';
import {useParams} from 'react-router-dom';
import './WorkDetails.scss'
import {workData} from "../Work/WorkData";
import {Divider} from "@mui/material";
import ProcessSection from "./ProcessSection";
import renderRelatedProjectsSection from "./RelatedPosts";
import VideoSection from "./VideoSection";
import AboutResponsiveSection from "./AboutResponsiveSection";

const WorkDetails = () => {
    const {id} = useParams();
    const selectedWork = workData[id - 1];

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 30%, ${selectedWork.color})`,
    };

    const backgroundGradient = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 30%, ${selectedWork.color} 50%)`,
    };

    const introDescMap = selectedWork.intro_desc ? new Map(Object.entries(selectedWork.intro_desc)) : null;
    const involvementElementsMap = selectedWork.involvement_elements ? new Map(Object.entries(selectedWork.involvement_elements)) : null;
    const processElementsMap = selectedWork.process_desc ? new Map(Object.entries(selectedWork.process_desc)) : null;
    const aboutElementsMap = selectedWork.about_desc ? new Map(Object.entries(selectedWork.about_desc)) : null;

    return (
        <>
            <section
                className="background-section"
                style={{backgroundImage: `url(${selectedWork.imgSrc})`,}}
                data-radium="true"
            >
                <div
                    data-radium="true"
                    className={`background-style`}
                    style={backgroundStyle}
                ></div>
                <div className="container-background container" data-radium="true">
                    <div className="background-text" data-radium="true">
                        <div className="text-position" data-radium="true">
                            <h1 className="text-size" data-radium="true">
                                {selectedWork.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {(selectedWork.project_logo || selectedWork.intro || selectedWork.intro_desc || selectedWork.involvement || selectedWork.involvement_elements) && (
                <div
                    className={`text-section`}
                    data-radium="true"
                >

                    {selectedWork.project_logo && (
                        <div
                            className={`text-container svg-col`}
                            data-radium="true"
                            style={{marginInline: (selectedWork.intro || selectedWork.intro_desc || selectedWork.involvement || selectedWork.involvement_elements) ? "" : "auto"}}
                        >
                            <div
                                data-radium="true"
                            >
                                <span
                                    className="svg-display"
                                    data-radium="true"
                                    style={{paddingRight: (selectedWork.intro || selectedWork.intro_desc || selectedWork.involvement || selectedWork.involvement_elements) ? "" : "0px"}}
                                >
                                    <img src={selectedWork.project_logo}/>
                                </span>
                            </div>
                        </div>
                    )}

                    {(selectedWork.intro || selectedWork.intro_desc || selectedWork.involvement || selectedWork.involvement_elements) && (
                        <div
                            className={`text-container ${!selectedWork.project_logo ? '' : 'text-col'}`}
                            data-radium="true"
                        >
                            {selectedWork.intro && (
                                <p
                                    className="main-p"
                                    data-radium="true"
                                >
                                    {selectedWork.intro}
                                </p>
                            )}

                            {selectedWork.intro_desc && introDescMap && introDescMap.size > 0 && (
                                <div>
                                    {Array.from(introDescMap).map(([key, value]) => (
                                        <p key={key} className={`p-desc`}>
                                            {value}
                                        </p>
                                    ))}
                                </div>
                            )}

                            {((selectedWork.involvement_elements && involvementElementsMap && involvementElementsMap.size > 0) || selectedWork.involvement) && (
                                <div className="involvement-container" data-radium="true">
                                    <h2 data-radium="true" className={`involvement-title`}>
                                        Involvement
                                    </h2>
                                    {selectedWork.involvement && (
                                        <p data-radium="true"
                                           className={`involvement-desc ${!selectedWork.involvement_elements ? ' no_involvement_elements' : ''}`}>
                                            {selectedWork.involvement}
                                        </p>
                                    )}
                                    {selectedWork.involvement_elements && (
                                        <ul data-radium="true" className={`involvement-table`}>
                                            {Object.values(selectedWork.involvement_elements).map((element, index) => (
                                                <li key={index} className="involvement-item" data-radium="true">
                                                    {element}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {(selectedWork.process || selectedWork.process_title || selectedWork.process_desc || selectedWork.process_img) && (
                <>
                    <Divider className={`divider`}/>
                    <div
                        className="process-section"
                        data-radium="true"
                    >

                        {selectedWork.process && (
                            <div
                                className="process-graph"
                                data-radium="true"
                            >
                                <div
                                    className="process-container"
                                    data-radium="true"
                                >
                                    <h2
                                        data-radium="true"
                                        className={`graph-title`}
                                    >
                                        Process
                                    </h2>
                                    <ProcessSection process={selectedWork.process}/>
                                </div>
                            </div>
                        )}

                        {selectedWork.process_title && (
                            <div
                                className={`text-col-title ${!selectedWork.process_desc ? 'no_involvement_elements' : ''}`}
                                data-radium="true"
                                style={{width: selectedWork.process_desc ? "" : "100%"}}
                            >
                                <h2
                                    data-radium="true"
                                    className={`text-title`}
                                >
                                    {selectedWork.process_title}
                                </h2>
                            </div>
                        )}

                        {selectedWork.process_desc && processElementsMap && processElementsMap.size > 0 && (
                            <div
                                className={`text-col-desc`}
                                data-radium="true"
                                style={{width: selectedWork.process_title ? "" : "100%"}}
                            >
                                {selectedWork.process_desc && (
                                    <div>
                                        {Object.values(selectedWork.process_desc).map((element, index) => (
                                            <p className={`desc-content`}>
                                                {element}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {selectedWork.process_img && (
                            <div
                                className="image-row"
                                data-radium="true"
                            >
                                <div>
                                    <div
                                        className={`image-position`}
                                        data-radium="true"
                                    >
                                        <img
                                            src={selectedWork.process_img}
                                            alt={selectedWork.process_img_alt}
                                            className={`image`}
                                            data-radium="true"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}

            {(selectedWork.about_background_video || selectedWork.about_title || selectedWork.about_desc || selectedWork.about_img) && (
                <>
                    {(selectedWork.about_title || selectedWork.about_desc || selectedWork.about_img) && (
                        <>
                            <Divider className={`divider`}/>
                            {selectedWork.about_background_video && (
                                <VideoSection
                                    videoSrc={selectedWork.about_background_video}
                                    backgroundGradient={backgroundGradient}
                                />
                            )}
                            <AboutResponsiveSection
                                selectedWork={selectedWork}
                                aboutElementsMap={aboutElementsMap}
                            />
                        </>
                    )}
                </>
            )}

            {selectedWork.related_posts && (
                <>
                    <Divider className={`divider`}/>
                    {renderRelatedProjectsSection(selectedWork.related_posts, id)}
                </>
            )}
        </>
    );
};

export default WorkDetails;
