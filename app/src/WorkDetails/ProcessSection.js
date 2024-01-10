import React from 'react';

const ProcessSection = (props) => {
    const {process} = props;

    return (
        <>
            {Object.keys(process).map((key) => {
                const phase = process[key];
                const numberOfPhases = Object.keys(process).length;
                const elementWidth = `calc(${100 / numberOfPhases}% - 10px)`;

                return (
                    <div
                        key={key}
                        className="graph-element"
                        data-radium="true"
                        style={{width: elementWidth}}
                    >
                        <span
                            className={`graph-icon`}
                            data-radium="true"
                        />
                        <span
                            className={`graph-connector`}
                            data-radium="true"
                        />
                        <h3
                            className={`graph-element-title`}
                            data-radium="true"
                        >
                            {phase.title}
                        </h3>
                        {Object.values(phase.elements).map((element, index) => (
                            <li key={index} className={`graph-element-content`}>
                                {element}
                            </li>
                        ))}
                    </div>
                );
            })}
        </>
    );
};

export default ProcessSection;
