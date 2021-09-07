import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "components/Section";
import Error from "components/Error";
import Poster from "components/Poster";

const Container = styled.div`
    padding:0px 20px;
`;
const TVPresenter = ({topRated,popular,airingToday,loading,error}) => loading ? null : (
    <Container>
        {topRated && topRated.length >0 && (
            <Section title ="Top Rated Shows">
                {topRated.map(tv=>(
                    <Poster
                    key={tv.id}
                    id={tv.id}
                    imageurl={tv.poster_path}
                    title={tv.original_name}
                    rating={tv.vote_average}
                    year={tv.first_air_date?tv.first_air_date.substring(0,4):""}
                />  
                ))}
            </Section>
        )}
        {popular && popular.length >0 && (
            <Section title ="popular Shows">
                {topRated.map(tv=>(
                    <Poster
                    key={tv.id}
                    id={tv.id}
                    imageurl={tv.poster_path}
                    title={tv.original_name}
                    rating={tv.vote_average}
                    year={tv.first_air_date?tv.first_air_date.substring(0,4):""}
                />  
                ))}
            </Section>
        )}
        {airingToday && airingToday.length>0 && (
            <Section title ="airing today Shows">
                {topRated.map(tv=>(
                    <Poster
                    key={tv.id}
                    id={tv.id}
                    imageurl={tv.poster_path}
                    title={tv.original_name}
                    rating={tv.vote_average}
                    year={tv.first_air_date?tv.first_air_date.substring(0,4):""}
                />  
                ))}
            </Section>
        )}
        {Error&& <Error text={error}/>}
    </Container>
);


TVPresenter.propTypes={
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default TVPresenter;