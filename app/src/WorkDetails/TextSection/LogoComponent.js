import React from 'react';

const LogoComponent = ({selectedWork}) => {
    return (
        <>
            {selectedWork.project_logo && (
                <div className={`text-container svg-col`}
                     style={{marginInline: (selectedWork.intro || selectedWork.intro_desc || selectedWork.involvement || selectedWork.involvement_elements) ? "" : "auto"}}
                >
                    <div data-radium="true">
                        <span className="svg-display"
                              style={{paddingRight: (selectedWork.intro || selectedWork.intro_desc || selectedWork.involvement || selectedWork.involvement_elements) ? "" : "0px"}}
                        >
                          <img
                              src={selectedWork.project_logo}
                              alt="Project Logo"
                          />
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default LogoComponent;
