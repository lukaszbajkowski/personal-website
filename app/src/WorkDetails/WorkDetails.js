import React from 'react';
import {useParams} from 'react-router-dom';
import BackgroundStyle from "./BackgroundStyle";
import BackgroundContainer from "./BackgroundContainer";
import {workData} from "../Work/WorkData";
import RelatedPostsSection from "./RelatedPostsSection/RelatedPostsSection";
import AboutSection from "./AboutSection/AboutSection";
import ProcessSection from "./ProcessSection/ProcessSection";
import TextSection from "./TextSection/TextSection";

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

            {renderIfExists(selectedWork.project_logo || selectedWork.intro || selectedWork.intro_desc || selectedWork.involvement || selectedWork.involvement_elements,
                <TextSection selectedWork={selectedWork}/>
            )}

            {renderIfExists(selectedWork.process || selectedWork.process_title || selectedWork.process_desc || selectedWork.process_img,
                <ProcessSection selectedWork={selectedWork}/>
            )}

            {renderIfExists(selectedWork.about_background_video || selectedWork.about_title || selectedWork.about_desc || selectedWork.about_img,
                <AboutSection selectedWork={selectedWork}/>
            )}

            {renderIfExists(selectedWork.related_posts,
                <RelatedPostsSection selectedWork={selectedWork} id={id}/>
            )}
        </>
    );
};

export default WorkDetails;
