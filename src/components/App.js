import React,{Component} from "react";
import Srouter from "./SRouter";
import GlobalStyles from "./GlobalStyles";

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
