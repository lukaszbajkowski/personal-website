import VideoSection from "./VideoSection";
import {Divider} from "@mui/material";
import AboutResponsiveSection from "./AboutResponsiveSection";
import '../WorkDetails.scss'

const renderIfExists = (condition, element) => condition && element;

const AboutSection = ({selectedWork}) => (
    <>
        {renderIfExists(selectedWork.about_title || selectedWork.about_desc || selectedWork.about_img,
            <>
                <Divider className={`divider`}/>
                {renderIfExists(selectedWork.about_background_video,
                    <VideoSection
                        videoSrc={selectedWork.about_background_video}
                        backgroundGradient={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 30%, ${selectedWork.color} 50%)`}}
                    />
                )}
                <AboutResponsiveSection
                    selectedWork={selectedWork}
                    aboutElementsMap={selectedWork.about_desc ? new Map(Object.entries(selectedWork.about_desc)) : null}
                />
            </>
        )}
    </>
);

export default AboutSection;

