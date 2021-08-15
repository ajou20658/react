import React from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import HomePresenter from "./HomePresenter";


export default class extends React.Component{
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error : null,
        loading: true
    };
    render() {
        const {nowPlaying,upcoming,popular,error,loading} = this.state;
        return <HomePresenter
            nowPlaying={nowPlaying}
            upcoming ={upcoming}
            popular={popular}
            error={error}
            loading={loading}
        />;
    }
}