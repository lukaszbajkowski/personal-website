import React from 'react';
import {useParams} from 'react-router-dom';
import './WorkDetails.scss'
import {workData} from "../Work/WorkData";
import {Divider} from "@mui/material";
import renderRelatedProjectsSection from "./RelatedPosts";
import VideoSection from "./VideoSection";
import AboutResponsiveSection from "./AboutResponsiveSection";
import ProcessGraphComponent from "./ProcessGraphComponent";
import TextTitleComponent from "./TextTitleComponent";
import TextDescComponent from "./TextDescComponent";
import ImageRowComponent from "./ImageRowComponent";
import LogoComponent from "./LogoComponent";
import TextSectionComponent from "./TextSectionComponent";

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
                <div className={`text-section`} data-radium="true">
                    <LogoComponent selectedWork={selectedWork}/>
                    <TextSectionComponent
                        selectedWork={selectedWork}
                        introDescMap={introDescMap}
                        involvementElementsMap={involvementElementsMap}
                    />
                </div>
            )}

            {(selectedWork.process || selectedWork.process_title || selectedWork.process_desc || selectedWork.process_img) && (
                <>
                    <Divider className={`divider`}/>
                    <div className="process-section" data-radium="true">
                        {selectedWork.process && (
                            <ProcessGraphComponent process={selectedWork.process}/>
                        )}
                        {selectedWork.process_title && (
                            <TextTitleComponent
                                title={selectedWork.process_title}
                                hasDescription={selectedWork.process_desc}
                            />
                        )}
                        {selectedWork.process_desc && processElementsMap && processElementsMap.size > 0 && (
                            <TextDescComponent
                                desc={selectedWork.process_desc}
                                processElementsMap={processElementsMap}
                            />
                        )}
                        {selectedWork.process_img && (
                            <ImageRowComponent
                                img={selectedWork.process_img}
                                alt={selectedWork.process_img_alt}
                            />
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
