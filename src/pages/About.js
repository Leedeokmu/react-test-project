import React from 'react';
import queryString from 'query-string';


const About = ({match, location}) => {
    const query = queryString.parse(location.search);
    const detail = query.detail === 'true';
    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && "detail: yeah!"}
        </div>
    )
}

export default About;