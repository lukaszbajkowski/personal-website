import {Divider} from "@mui/material";
import '../WorkDetails.scss'
import TextDescComponent from "./TextDescComponent";
import TextTitleComponent from "./TextTitleComponent";
import ProcessGraphComponent from "./ProcessGraphComponent";
import ImageRowComponent from "./ImageRowComponent";

const renderIfExists = (condition, element) => condition && element;

const ProcessSection = ({selectedWork}) => (
    <>
        {selectedWork && selectedWork.process &&
            <>
                <Divider className={`divider`}/>
                <div className="process-section" data-radium="true">
                    {renderIfExists(selectedWork.process,
                        <ProcessGraphComponent process={selectedWork.process}/>
                    )}
                    {renderIfExists(selectedWork.process_title,
                        <TextTitleComponent
                            title={selectedWork.process_title}
                            hasDescription={selectedWork.process_desc}/>
                    )}
                    {renderIfExists(selectedWork.process_desc,
                        <TextDescComponent
                            desc={selectedWork.process_desc}
                            processElementsMap={selectedWork.process_desc ? new Map(Object.entries(selectedWork.process_desc)) : null}
                        />
                    )}
                    {renderIfExists(selectedWork.process_img,
                        <ImageRowComponent
                            img={selectedWork.process_img}
                            alt={selectedWork.process_img_alt}/>
                    )}
                </div>
            </>
        }
    </>
);

export default ProcessSection;