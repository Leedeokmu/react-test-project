import React from 'react';
import {Query} from 'react-apollo'
import {MOVIE_DETAILS} from "./queries";
import styled from 'styled-components'
import Movie from "./Movie";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    margin-bottom: 50px;
`;

const Card = styled.div`
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-color: white;
    border-radius: 7px;
`
const Image = Card.withComponent('img')

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 10px;
`

const Paragraph = styled.span`
    margin-bottom: 10px;
    display: block;
    font-weight: ${props => (props.bold ? "500" : "400")}
`
const MovieContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    flex-wrap: wrap;
    justify-item: center;
    margin-top: 50px;
`;

const Detail = ({
                    match: {
                        params: {movieId}
                    }
                }) => {
    return <Query query={MOVIE_DETAILS} variables={{movieId}}>
        {({loading, error, data}) => {
        if (loading) return "loading";
        if (error) return "error";
        return <React.Fragment>
            <Container>
                <Image src={data.movie.medium_cover_image}/>
                <span>
                    <Title>{data.movie.title}</Title>
                    <Paragraph bold>Rating: {data.movie.rating}</Paragraph>
                    <Paragraph>{data.movie.description_intro}</Paragraph>
                </span>
                <Title>Suggestions</Title>
                <MovieContainer>
                    {data.suggestions.map(movie => (
                        <Movie
                            rating={movie.rating}
                            poster={movie.medium_cover_image}
                            id={movie.id}
                            title={movie.title}
                            key={movie.id}/>
                    ))}
                </MovieContainer>
            </Container>
        </React.Fragment>
    }}</Query>;
};

export default Detail;