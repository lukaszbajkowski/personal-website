import React from 'react';
import {useParams} from 'react-router-dom';
import './WorkDetails.scss'
import {workData} from "../Work/WorkData";
import {Divider, ThemeProvider} from "@mui/material";
import img1 from './Img/devices.png';
import img2 from './Img/devices-responsive.png';
import video1 from './Video/background-video.mp4'
import WorkGrid from "../Work/WorkGrid";
import theme from "../Style/Theme";
import ProcessSection from "./ProcessSection";

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

            {(selectedWork.project_logo && selectedWork.intro && selectedWork.intro_desc && selectedWork.involvement && selectedWork.involvement_elements) && (
                <div
                    className={`text-section`}
                    data-radium="true"
                >
                    {selectedWork.project_logo && (
                        <div
                            className={`text-container svg-col`}
                            data-radium="true"
                        >
                            <div
                                data-radium="true"
                            >
                        <span
                            className="svg-display"
                            data-radium="true"
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

            <Divider className={`divider`}/>

            <div
                className="process-section"
                data-radium="true"
            >
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
                        <ProcessSection process={selectedWork.process} />
                    </div>
                </div>
                <div
                    className="text-col-title"
                    data-radium="true"
                >
                    <h2
                        data-radium="true"
                        className={`text-title`}
                    >
                        Brief: Transformation from an 800+
                        powerpoint to an energetic and educational product.
                    </h2>
                </div>
                <div
                    className="text-col-desc"
                    data-radium="true"
                >
                    <div>
                        <p
                            className={`desc-content`}
                        >
                            The initial brief was to create an engaging educational course that didn’t shackle employees
                            into a room for two days. The key features for the new course were; to reduce text based
                            content, make the course accessible from any device and to make it interactive and
                            enjoyable.
                        </p>
                        <p
                            className={`desc-content`}
                        >
                            By making the course responsive and work on every device, employees could
                            spread the course out over a month – digesting the content at their own pace.
                        </p>
                    </div>
                </div>
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
                                src={img1}
                                alt="Pearson Education Course shown on multiple devices"
                                className={`image`}
                                data-radium="true"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Divider className={`divider`}/>

            <div className="video-section">
                <div
                    data-radium="true"
                    className={`video-box`}
                >
                    <video
                        src={video1}
                        loop
                        autoPlay
                        muted
                        className="video-display"
                        data-radium="true"
                    />
                    <div
                        data-radium="true"
                        className={`position-gradient`}
                        style={backgroundGradient}
                    />
                </div>
            </div>

            <div
                className="about-responsive-section"
                data-radium="true"
            >
                <div
                    className="text-col-title"
                    data-radium="true"
                >
                    <h2
                        className={`text-title`}
                        data-radium="true"
                    >
                        Through gamification users were challenged to want to learn.
                    </h2>
                </div>
                <div
                    className="text-col-desc"
                    data-radium="true"
                >
                    <div>
                        <p
                            className={`desc-content`}
                        >
                            Through gamification quick quiz called Fasttrack was created which concludes each module.
                            Fasttrack helped break up heavy amounts of content with fun and varied games, but also
                            ensured students were learning the content.
                        </p>
                        <p
                            className={`desc-content`}
                        >
                            The course had to meet standards set by IOSH (safety regulation board) for accreditation.
                            Fasttrack was made up of multiple games, ranging from drag and drop into the missing fields,
                            fruit ninja style slashing of incorrect answers or stack the answers in the correct order.
                        </p>
                        <p
                            className={`desc-content`}
                        >
                            Each game had their own brand, including targeted voiceovers encouraging the students to
                            fully engage with the course.
                        </p>
                    </div>
                </div>
                <div
                    className="device-responsive-section"
                    data-radium="true"
                >
                    <div>
                        <div
                            className={`image-position`}
                            data-radium="true"
                        >
                            <img
                                src={img2}
                                alt="Pearson Course shown on multiple devices"
                                data-radium="true"
                                className={`responsive-design-img`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Divider className={`divider`}/>

            <div
                className="related-projects-section"
                data-radium="true"
            >
                <div
                    className="related-projects-box"
                    data-radium="true"
                >
                    <h2
                        className={`related-projects-title`}
                        data-radium="true"
                    >
                        Related projects
                    </h2>
                </div>
                <ThemeProvider theme={theme}>
                    <WorkGrid/>
                </ThemeProvider>
            </div>

        </>
    );
};

export default WorkDetails;
