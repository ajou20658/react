import React,{Component} from "react";
import Srouter from "components/SRouter";
import GlobalStyles from "components/GlobalStyles";
//import { moviesApi,tvApi } from "../api";

class App extends Component{
  render(){
    return(
      <>
        <Srouter />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
