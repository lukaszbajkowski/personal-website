import React, {useMemo} from 'react';

const ProcessSection = (props) => {
    const {process} = props;

    const numberOfPhases = useMemo(() => Object.keys(process).length, [process]);

    return (
        <React.Fragment>
            {Object.keys(process).map((key) => {
                const {title, elements} = process[key];
                const elementWidth = `calc(${100 / numberOfPhases}% - 10px)`;

                return (
                    <div
                        key={key}
                        className="graph-element"
                        style={{width: elementWidth}}
                    >
                        <span className="graph-icon"/>
                        <span className="graph-connector"/>
                        <h3 className="graph-element-title">
                            {title}
                        </h3>
                        {Array.isArray(elements) ? (
                            elements.map((element, index) => (
                                <li
                                    key={index}
                                    className="graph-element-content"
                                >
                                    {element}
                                </li>
                            ))
                        ) : (
                            <li className="graph-element-content">
                                {Object.values(elements).map((value, index) => (
                                    <span key={index}>
                                        {value}
                                    </span>
                                ))}
                            </li>
                        )}
                    </div>
                );
            })}
        </React.Fragment>
    );
};

export default ProcessSection;
