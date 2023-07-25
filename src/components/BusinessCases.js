import React from "react";
import BizImg1 from '../assets/images/bizImg1.svg';
import BizImg2 from '../assets/images/bizImg2.svg';
import BizImg3 from '../assets/images/bizImg3.svg';
import BizImg4 from '../assets/images/bizImg4.svg';
import BizImg5 from '../assets/images/bizImg5.svg';
import BizImg6 from '../assets/images/bizImg6.svg';
import ContentWithGridImages from "./ContentWithGridImages";

const BusinessCases = () => {
    const bizImages = [
        {id: 1, src: BizImg1},
        {id: 2, src: BizImg2},
        {id: 3, src: BizImg3},
        {id: 4, src: BizImg4},
        {id: 5, src: BizImg5},
        {id: 6, src: BizImg6}
    ]

    const entryText = 'This is what we do';
    const title = 'Business Cases';
    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!';

    return (
        <ContentWithGridImages 
            entryText={entryText}
            title={title}
            description={description}
            bizImages={bizImages}
        />
    )
}

export default BusinessCases;