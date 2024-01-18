import '../WorkDetails.scss'
import LogoComponent from "./LogoComponent";
import TextSectionComponent from "./TextSectionComponent";

const TextSection = ({selectedWork}) => (
    <div className={`text-section`} data-radium="true">
        <LogoComponent selectedWork={selectedWork}/>
        <TextSectionComponent
            selectedWork={selectedWork}
            introDescMap={selectedWork.intro_desc ? new Map(Object.entries(selectedWork.intro_desc)) : null}
            involvementElementsMap={selectedWork.involvement_elements ? new Map(Object.entries(selectedWork.involvement_elements)) : null}
        />
    </div>
);

export default TextSection;
