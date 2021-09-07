import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "components/Section";
import Error from "components/Error";
import Poster from "components/Poster";

const Container = styled.div`
    padding: 20px;
    padding-top: 20px;
`;

const HomePresenter = ({nowPlaying, upcoming,popular,error,loading}) => loading ? null: (
    <Container>
        {upcoming && upcoming.length >0 && (
            <Section title="Upcoming">
                {upcoming.map(movie=>(
                    <Poster
                        key={movie.id}
                        id={movie.id}
                        imageurl={movie.poster_path}
                        title={movie.original_title}
                        rating={movie.vote_average}
                        year={movie.release_date?movie.release_date.substring(0,4):""}
                        isMovie={true}
                    />  
                ))}
            </Section>
        )}
        {nowPlaying && nowPlaying.length >0 && (
            <Section title="Now Playing">
                {nowPlaying.map(movie=>(
                    <Poster
                        key={movie.id}
                        id={movie.id}
                        imageurl={movie.poster_path}
                        title={movie.original_title}
                        rating={movie.vote_average}
                        year={movie.release_date?movie.release_date.substring(0,4):""}                        isMovie={true}
                    />  
                ))}
            </Section>
        )}
        {popular && popular.length >0 && (
            <Section title="Popular Now">
                {popular.map(movie=>(
                    <Poster
                        key={movie.id}
                        id={movie.id}
                        imageurl={movie.poster_path}
                        title={movie.original_title}
                        rating={movie.vote_average}
                        year={movie.release_date?movie.release_date.substring(0,4):""}                        isMovie={true}
                    />  
                ))}
            </Section>
        )}
        
        {Error && <Error text = {error}/>}
    </Container>
);

HomePresenter.propTypes={
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;