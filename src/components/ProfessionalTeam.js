import React from "react";
import TeamImg1 from '../assets/images/teamImg1.svg';
import TeamImg2 from '../assets/images/teamImg2.svg';
import TeamImg3 from '../assets/images/teamImg3.svg';
import ContentWithGridImages from "./ContentWithGridImages";

const ProfessionalTeam = () => {
    const bizImages = [
        {id: 1, src: TeamImg1, name: 'John Doe', role: 'President'},
        {id: 2, src: TeamImg2, name: 'Jane Doe', role: 'Vice President'},
        {id: 3, src: TeamImg3, name: 'Steve Smith', role: 'Marketing Head'},
    ]

    const entryText = 'Who we are';
    const title = 'Our Professional Team';
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

export default ProfessionalTeam;