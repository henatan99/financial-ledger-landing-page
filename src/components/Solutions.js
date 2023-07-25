import React from "react";
import SolutionImg from '../assets/images/solutionsImg.svg';
import ContentWithSideImage from "./ContentWithSideImage";

const Solutions = () => {
    const entryText = 'What you are looking for';
    const title = 'We provide bespoke solutions';
    const description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?';
    return (
        <ContentWithSideImage
            entryText={entryText}
            title={title}
            description={description}
            bgColor='rgba(40, 167, 69, 1)'
            image={SolutionImg}
        />
    )
}

export default Solutions