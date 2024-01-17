import React from 'react';
import IntroSection from './IntroSection';
import InvolvementSection from './InvolvementSection';

const TextSectionComponent = ({selectedWork, introDescMap, involvementElementsMap}) => {
    return (
        <>
            {(selectedWork.intro || selectedWork.intro_desc || selectedWork.involvement || selectedWork.involvement_elements) && (
                <div className={`text-container ${!selectedWork.project_logo ? '' : 'text-col'}`} data-radium="true">
                    <IntroSection
                        selectedWork={selectedWork}
                        introDescMap={introDescMap}
                    />
                    <InvolvementSection
                        selectedWork={selectedWork}
                        involvementElementsMap={involvementElementsMap}
                    />
                </div>
            )}
        </>
    );
};

export default TextSectionComponent;
