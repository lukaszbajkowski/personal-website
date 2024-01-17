import React from 'react';
import {useParams} from 'react-router-dom';
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
import BackgroundStyle from "./BackgroundStyle";
import BackgroundContainer from "./BackgroundContainer";
import {workData} from "../Work/WorkData";

const renderIfExists = (condition, element) => condition && element;

const WorkDetails = () => {
    const {id} = useParams();
    const selectedWork = workData[id - 1];

    return (
        <>
            <div className="background-section" style={{backgroundImage: `url(${selectedWork.imgSrc})`}}>
                <BackgroundStyle
                    backgroundStyle={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 30%, ${selectedWork.color})`}}/>
                <BackgroundContainer selectedWork={selectedWork}/>
            </div>

            {renderIfExists(
                selectedWork.project_logo || selectedWork.intro || selectedWork.intro_desc || selectedWork.involvement || selectedWork.involvement_elements,
                <div className={`text-section`} data-radium="true">
                    <LogoComponent selectedWork={selectedWork}/>
                    <TextSectionComponent
                        selectedWork={selectedWork}
                        introDescMap={selectedWork.intro_desc ? new Map(Object.entries(selectedWork.intro_desc)) : null}
                        involvementElementsMap={selectedWork.involvement_elements ? new Map(Object.entries(selectedWork.involvement_elements)) : null}
                    />
                </div>
            )}

            {renderIfExists(
                selectedWork.process || selectedWork.process_title || selectedWork.process_desc || selectedWork.process_img,
                <>
                    <Divider className={`divider`}/>
                    <div className="process-section" data-radium="true">
                        {renderIfExists(selectedWork.process, <ProcessGraphComponent process={selectedWork.process}/>)}
                        {renderIfExists(selectedWork.process_title, <TextTitleComponent
                            title={selectedWork.process_title} hasDescription={selectedWork.process_desc}/>)}
                        {renderIfExists(
                            selectedWork.process_desc && selectedWork.process_desc.length > 0,
                            <TextDescComponent
                                desc={selectedWork.process_desc}
                                processElementsMap={selectedWork.process_desc ? new Map(Object.entries(selectedWork.process_desc)) : null}/>
                        )}
                        {renderIfExists(selectedWork.process_img, <ImageRowComponent img={selectedWork.process_img}
                                                                                     alt={selectedWork.process_img_alt}/>)}
                    </div>
                </>
            )}

            {renderIfExists(
                selectedWork.about_background_video || selectedWork.about_title || selectedWork.about_desc || selectedWork.about_img,
                <>
                    {renderIfExists(
                        selectedWork.about_title || selectedWork.about_desc || selectedWork.about_img,
                        <>
                            <Divider className={`divider`}/>
                            {renderIfExists(
                                selectedWork.about_background_video,
                                <VideoSection
                                    videoSrc={selectedWork.about_background_video}
                                    backgroundGradient={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 30%, ${selectedWork.color} 50%)`}}/>
                            )}
                            <AboutResponsiveSection
                                selectedWork={selectedWork}
                                aboutElementsMap={selectedWork.about_desc ? new Map(Object.entries(selectedWork.about_desc)) : null}
                            />
                        </>
                    )}
                </>
            )}

            {renderIfExists(
                selectedWork.related_posts,
                <>
                    <Divider className={`divider`}/>
                    {renderRelatedProjectsSection(selectedWork.related_posts, id)}
                </>
            )}
        </>
    );
};

export default WorkDetails;
