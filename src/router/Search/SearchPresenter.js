import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "components/Section";
import Error from "components/Error";
import Poster from "components/Poster";

const Container = styled.div`
    padding: 0px 20px;
`;

const Form = styled.form`
    margin-bottom:50px;
    width:100%;
`;

const Input = styled.input`
    all:unset;
    font-size:28px;
    width:100%;
`;

const SearchPresenter =({
    movieResults,
    tvResults,
    loading,
    searchTerm,
    handleSubmit,
    updateTerm,
    error
})=>(<Container>
    <Form onSubmit={handleSubmit}>
        <Input
            placeholder="Search Movies or TV Shows..."
            value ={searchTerm}
            onChange={updateTerm}   
        />
    </Form>
    {loading? null:<>
        {movieResults&&movieResults.length>0&&
            <Section title="Movie Results">
                {movieResults.map(movie=>
                    <Poster
                        key={movie.id}
                        id={movie.id}
                        imageUrl={movie.poster_path}
                        title={movie.original_title}
                        rating={movie.vote_average}
                        year={movie.release_date.substring(0,4)}
                        isMovie={true}
                    />
                )}
            </Section>
        }
    </>}
    {Error&& <Error text={error}/>}
</Container>);

SearchPresenter.propTypes={
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;