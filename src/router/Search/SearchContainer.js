import SearchPresenter from "./SearchPresenter";
import React from "react";
import SearchContainer from ".";
import { moviesApi } from "../../api";

export default class extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null
    }
    render(){
        const {movieResults,tvResults,searchTerm,loading,error} = this.state;
        return <SearchContainer 
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            loading={loading}
            error={error}
        />
    }
}