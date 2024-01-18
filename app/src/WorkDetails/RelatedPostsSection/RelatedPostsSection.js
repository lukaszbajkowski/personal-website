import {Divider} from "@mui/material";
import renderRelatedProjectsSection from "./RelatedPosts";
import '../WorkDetails.scss'

const RelatedPostsSection = ({selectedWork, id}) => (
    <>
        <Divider className={`divider`}/>
        {renderRelatedProjectsSection(selectedWork.related_posts, id)}
    </>
);

export default RelatedPostsSection;