import React from 'react';
import '../WorkDetails.scss'

const VideoSection = ({videoSrc, backgroundGradient}) => (
    <div className="video-section">
        <div data-radium="true" className={`video-box`}>
            <video
                src={videoSrc}
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
);

export default VideoSection;
