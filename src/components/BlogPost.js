import React from "react";
import BlogPostImg from '../assets/images/blogPostImg.svg';
import ContentWithSideImage from "./ContentWithSideImage";

const BlogPost = () => {
    const entryText = 'April 16 2020';
    const title = 'Blog Post One';
    const description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?';
    return (
        <ContentWithSideImage
            entryText={entryText}
            title={title}
            description={description}
            bgColor='custom_blue'
            image={BlogPostImg}
            reverse={true}
        />
    )
}

export default BlogPost;