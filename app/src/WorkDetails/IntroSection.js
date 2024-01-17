import React from 'react';

const IntroSection = ({selectedWork, introDescMap}) => {
    return (
        <>
            {selectedWork.intro && (
                <p className="main-p" data-radium="true">
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
        </>
    );
};

export default IntroSection;
