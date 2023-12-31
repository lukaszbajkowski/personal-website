import React from 'react';
import {useParams} from 'react-router-dom';
import './WorkDetails.scss'
import {workData} from "../Work/WorkData";
import {Divider} from "@mui/material";
import img1 from './Img/devices.png';
import img2 from './Img/devices-responsive.png';
import video1 from './Video/background-video.mp4'

const WorkDetails = () => {
    const {id} = useParams();
    const selectedWork = workData[id - 1];

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 30%, ${selectedWork.color})`,
    };

    const backgroundGradient = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 30%, ${selectedWork.color} 50%)`,
    };

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

            <div
                className={`text-section`}
                data-radium="true"
            >
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
                            <span className="isvg loaded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                     viewBox="0 0 542 87">
                                    <g fill="#FFFFFF" fill-rule="evenodd">
                                        <path
                                            d="M541.574 1.544C539.3 1.958 537.026 2.578 534.75 2.578 532.27 2.578 529.994 1.75 527.926 1.544 529.374 14.152 528.754 51.766 528.548 59.206 513.866 39.572 485.538 1.544 485.538 1.544 485.538 1.544 484.71 1.75 483.47 1.75 482.022 1.958 477.886 1.75 472.924 1.75 474.992 12.704 474.578 75.12 472.924 85.248 476.026 84.834 477.68 85.042 481.194 85.042L486.364 85.042C485.124 75.328 485.33 45.772 485.744 26.138 496.084 39.572 522.344 75.534 528.96 85.248 532.476 84.628 537.852 84.628 541.574 85.248 541.574 85.248 541.368 83.802 541.368 83.594 538.886 71.606 539.714 17.458 541.574 1.544M89.142 74.914C89.142 66.026 89.142 54.452 89.348 46.806 101.134 45.98 116.644 47.426 116.644 47.426L116.644 35.646C112.508 35.852 102.582 37.506 89.348 36.472 89.142 31.306 89.348 11.878 89.348 11.878 96.792 11.672 109.82 12.498 118.09 13.324L118.09 1.544C108.372 2.37 85.832 2.578 74.046 1.544 75.288 23.244 75.908 65.406 74.046 85.868 86.866 84.214 110.44 84.834 118.298 85.868 118.298 85.868 118.918 83.182 118.918 74.088 118.918 74.088 98.034 75.328 89.142 74.914M26.074 1.13C23.178 1.13 16.148 1.13 13.46 1.338 10.978 1.338.226.924.226.924 2.5 11.878 1.674 73.674.226 85.248 6.016 84.008 10.772 84.214 16.562 85.248 15.528 75.74 14.908 37.092 14.908 10.432L23.592 10.432C34.344 10.432 41.79 17.044 41.79 26.138 41.79 36.886 34.758 43.292 21.318 44.326 21.318 47.426 21.524 50.32 21.524 53.212 39.1 53.212 56.056 42.88 56.056 25.518 56.056 7.538 40.548 1.13 26.074 1.13M158.826 50.32C158.826 50.32 166.89 26.552 169.578 18.284 169.578 18.284 177.85 41.846 180.952 50.32 171.854 51.146 167.304 51.146 158.826 50.32L158.826 50.32zM164.41 1.75C160.274 18.078 142.698 65.406 134.22 85.454 139.802 84.628 145.592 84.834 148.28 85.248 151.176 76.154 154.07 65.614 155.518 61.48 164.202 60.86 174.542 60.86 184.88 61.48 187.982 69.954 189.842 75.948 192.738 85.248 198.114 84.628 203.49 84.834 209.486 85.248 201.216 65.2 181.778 13.532 178.676 1.544 174.334 2.164 168.958 2.164 164.41 1.75L164.41 1.75zM339.138 37.712C332.934 33.786 328.798 30.892 325.696 28.618 322.802 25.932 321.354 23.658 321.354 21.592 321.354 15.392 325.49 11.672 332.108 11.672 339.138 11.672 344.1 16.424 347.408 20.764 348.856 16.424 351.544 11.672 353.612 8.778 345.548 3.198 338.724 1.13 331.694 1.13 317.84 1.13 307.294 10.018 307.294 21.798 307.294 30.686 311.43 35.232 318.252 40.812 320.32 42.466 328.798 48.046 332.314 50.94 336.862 54.866 340.584 58.586 340.378 63.754 340.378 70.574 335.83 74.708 328.178 74.708 322.596 74.708 314.118 70.368 308.74 64.374 307.294 69.54 305.432 73.26 303.572 76.774 308.534 80.7 319.08 85.868 329.006 85.868 341.206 85.868 355.266 79.46 355.266 61.48 355.266 49.08 348.236 43.5 339.138 37.712M413.578 75.948C394.554 75.948 387.73 56.106 387.73 42.88 387.73 30.686 394.762 11.672 413.372 11.672 431.154 11.672 439.218 29.652 439.218 42.466 439.218 59 430.534 75.948 413.578 75.948L413.578 75.948zM413.372 1.13C391.246 1.13 372.636 19.938 372.636 42.466 372.636 67.886 390.006 86.488 413.784 86.488 436.324 86.488 454.52 66.854 454.52 42.466 454.52 19.524 435.91 1.13 413.372 1.13L413.372 1.13zM279.792 23.658C279.792 3.61 259.32 1.544 250.636 1.544 246.5 1.544 243.398 1.75 239.884 1.958 236.162 2.164 227.27 1.544 227.27 1.544 228.924 10.844 229.13 72.02 227.27 85.454 231.612 85.042 237.816 84.834 243.398 85.454 242.778 67.06 241.538 27.792 242.158 11.672L249.188 11.672C257.252 11.672 265.318 16.424 265.318 25.312 265.318 32.132 262.216 41.432 247.948 41.226 247.948 44.532 248.154 47.012 248.154 50.32 252.91 55.9 265.318 73.674 272.554 85.248 276.896 84.628 285.374 84.628 291.164 85.454 291.164 85.454 268.212 54.866 261.802 46.6 270.694 44.946 279.792 37.092 279.792 23.658"></path>
                                    </g>
                                </svg>
                            </span>
                        </span>
                    </div>
                </div>
                <div
                    className={`text-container text-col`}
                    data-radium="true"
                >
                    <p
                        className="main-p"
                        data-radium="true"
                    >
                        Pearson wanted a new way to educate a workforce and increase their reach across a larger
                        audience.
                    </p>
                    <div>
                        <p
                            className={`p-desc`}
                        >
                            Current safety in the workplace courses consist of 800+ powerpoint slides shoved into two
                            full working days. Employees are often forced into the course and made to leave work for
                            these two days.
                        </p>
                        <p
                            className={`p-desc`}
                        >
                            Our aim was to bring some enjoyment back into learning and make the course more insightful
                            for both employers and employees – whilst still being IOSH accredited.
                        </p>
                    </div>
                    <div
                        className="involvement-container"
                        data-radium="true"
                    >
                        <h2
                            data-radium="true"
                            className={`involvement-title`}>
                            Involvement
                        </h2>
                        <p
                            data-radium="true"
                            className={`involvement-desc`}
                        >
                            My involvement consisted of being the sole designer, overseeing the art direction and
                            design. This included the creation of wireframes, product maps, prototypes including leading
                            the frontend development for production – whilst dealing with the client day-to-day using an
                            agile process.
                        </p>
                        <ul
                            data-radium="true"
                            className={`involvement-table`}
                        >
                            <li
                                className="involvement-item"
                                data-radium="true"
                            >
                                Workflows + product mapping
                            </li>
                            <li
                                className="involvement-item"
                                data-radium="true"
                            >
                                Wireframing
                            </li>
                            <li
                                className="involvement-item"
                                data-radium="true"
                            >
                                Art + film direction
                            </li>
                            <li
                                className="involvement-item"
                                data-radium="true"
                            >
                                Lead design
                            </li>
                            <li
                                className="involvement-item"
                                data-radium="true"
                            >
                                Illustration
                            </li>
                            <li
                                className="involvement-item"
                                data-radium="true"
                            >
                                Lead frontend development
                            </li>
                            <li
                                className="involvement-item"
                                data-radium="true"
                            >
                                Responsive webapp design
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

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
                        <div
                            className="graph-element"
                            data-radium="true"
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
                                Discover
                            </h3>
                            <li
                                className={`graph-element-content`}
                                data-radium="true"
                            >
                                Client workshops
                            </li>
                            <li
                                className={`graph-element-content`}
                                data-radium="true"
                            >
                                Current
                                market alternatives
                            </li>
                        </div>
                        <div
                            className="graph-element"
                            data-radium="true"
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
                                Discover
                            </h3>
                            <li
                                className={`graph-element-content`}
                                data-radium="true"
                            >
                                Client workshops
                            </li>
                            <li
                                className={`graph-element-content`}
                                data-radium="true"
                            >
                                Current
                                market alternatives
                            </li>
                        </div>
                        <div
                            className="graph-element"
                            data-radium="true"
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
                                Discover
                            </h3>
                            <li
                                className={`graph-element-content`}
                                data-radium="true"
                            >
                                Client workshops
                            </li>
                            <li
                                className={`graph-element-content`}
                                data-radium="true"
                            >
                                Current
                                market alternatives
                            </li>
                        </div>
                        <div
                            className="graph-element"
                            data-radium="true"
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
                                Discover
                            </h3>
                            <li
                                className={`graph-element-content`}
                                data-radium="true"
                            >
                                Client workshops
                            </li>
                            <li
                                className={`graph-element-content`}
                                data-radium="true"
                            >
                                Current
                                market alternatives
                            </li>
                        </div>
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

        </>
    );
};

export default WorkDetails;
