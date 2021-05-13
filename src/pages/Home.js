import React, {Component} from "react";
import API from "../utils/API";
import Table from "../components/Table"
import TableRow from "../components/TableRow"
class Home extends Component {

    state = {
        search: "",
        results: [],
        error: ""
      };

    componentDidMount(){
        API.getRandomUser()
        .then(res => this.setState({...this.state, results: res.data.results}))
        .catch(err => console.log(err));
    };

    sortName = () => {
        if(this.state){
        this.state.results.sort((x,y) => x.name.first - y.name.first)
        console.log("this.state.results:", this.state.results)
        }
    }

render(){
    console.log(this.state)
    return(
        <div>
            <Table sortName={this.sortName} results={this.state.results}></Table>
        </div>
    )
};






}

export default Home;