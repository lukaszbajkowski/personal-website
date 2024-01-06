import React from 'react';
import {useParams} from 'react-router-dom';
import './WorkDetails.scss'
import {workData} from "../Work/WorkData";

const WorkDetails = () => {
    const {id} = useParams();
    const selectedWork = workData[id - 1];

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 30%, ${selectedWork.color})`,
    };

    return (

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
    );
};

export default WorkDetails;
