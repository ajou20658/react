import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component{
    constructor(props){
        super(props);
        const {
            location:{pathname}
        }=props;
        this.state = {
            result: null,
            loading: true,
            error: null,
            isMovie: pathname.includes("/movie/")
        };
    }

    async componentDidMount(){
        const {
            match: {
                params: {id}
            },
            history:{push},
            
        }=this.props;
        const {isMovie} = this.state;
        const paramsID = parseInt(id);
        if(isNaN(paramsID)){
            return push("/");
        }

        let result=null;
        try{
            if(isMovie){
                ({data:result} = await moviesApi.movieDetail(paramsID))
                
            }else{
                ({data:result} = await tvApi.showDetail(paramsID))
            }
        }catch{
            this.setState({error:"Can't find anything."});
        }finally{
            this.setState({loading: false, result});
        }
    }

    render(){
        //console.log(this.props);
        const {result,loading,error}=this.state;
        console.log(result);
        return <DetailPresenter 
            result = {result}
            loading = {loading}
            error = {error}
        />
    }
}