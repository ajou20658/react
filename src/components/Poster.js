import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom"

const Container = styled.div`
    font-size: 12px;

`;

const Image = styled.div`
    background-image: url(${props=>`https://image.tmdb.org/t/p/w300${props.bgUrl}`});
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position:center center;
    transition: opacity 0.1 linear;
`;

const Rating = styled.span`
    bottom: 5px;
    position: absolute;
    right: 5px;
    opacity: 0;
`;

const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover{
        ${Image}{
            opacity:0.3;
        }
    }
`;

const Title = styled.span`
    display: block;
    font-size:12px;
    margin-bottom: 3px;
`;

const Year  = styled.span`
    font-size: 10px;
    color: rgba(255,255,255,0.5);
`;

const Poster = ({id, imageurl,year,title,rating, isMovie=false}) =>  
(
    <Link to={isMovie ? `/movie/${id}`:`/tv/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageurl?`https://image.tmdb.org/t/p/w300${imageurl}`
                : require("../assets/noPosterSmall.png").default
                }/>
                <Rating>
                    <span role="img" aria-label="rating">
                        ⭐
                    </span>{" "}
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>
                {(title) ? `${title.substring(0, 18)}...` : title}
            </Title>
            <Year>{year}</Year>
        </Container>
    </Link>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageurl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
}

export default Poster;