import React, {Component} from "react";
import API from "../utils/API";

class Home extends Component {

    state = {
        search: "",
        results: [],
        error: ""
      };

    componentDidMount(){
        API.getRandomUser()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };
render(){
    return(
        <div>

        </div>
    )
};






}

export default Home;