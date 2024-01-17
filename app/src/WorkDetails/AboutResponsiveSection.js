import React from 'react';
import './WorkDetails.scss'

const AboutResponsiveSection = ({selectedWork, aboutElementsMap}) => (
    <div className="about-responsive-section" data-radium="true">
        {selectedWork.about_title && (
            <div
                className={`text-col-title`}
                data-radium="true"
                style={{width: selectedWork.about_desc ? "" : "100%"}}
            >
                <h2
                    className={`text-title`}
                    data-radium="true"
                >
                    {selectedWork.about_title}
                </h2>
            </div>
        )}

        {selectedWork.about_desc && aboutElementsMap && aboutElementsMap.size > 0 && (
            <div
                className="text-col-desc"
                data-radium="true"
                style={{width: selectedWork.about_title ? "" : "100%"}}
            >
                {selectedWork.about_desc && (
                    <div>
                        {Object.values(selectedWork.about_desc).map((element, index) => (
                            <p className={`desc-content`} key={index}>
                                {element}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        )}

        {selectedWork.about_img && (
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
                            src={selectedWork.about_img}
                            alt={selectedWork.about_img_alt}
                            data-radium="true"
                            className={`responsive-design-img`}
                        />
                    </div>
                </div>
            </div>
        )}
    </div>
);

export default AboutResponsiveSection;
