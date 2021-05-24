import React, {Component} from "react";
import API from "../utils/API";
import Table from "../components/Table"
import SearchBar from "../components/SearchBar";
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

    handleInputChange = event => {
        this.setState({  search: event.target.value.toLowerCase() });
    };

    dynamicSearch = (e) => {
        this.setState({...this.state, results: this.state.results.name.first.filter(name => name.toLowerCase().includes(this.state.search))})
        console.log("dynamicSearch", this.state.results);
    }


    sortName = () => {
        if(this.state){
        this.setState(this.state.results.sort((x,y) => x.name.first.localeCompare(y.name.first)))
        console.log("this.state.results:", this.state.results)
    
        }
    }

render(){
    console.log(this.state.search)
    let filteredArr = this.state.results.filter(
        person => 
        {
            console.log("person", person.name.first)
            console.log("state search", this.state.search)
            return person.name.first.toLowerCase().includes(this.state.search)
        });
    console.log("filtered array", filteredArr);

    return(
        <div>
            <SearchBar search={this.state.search} onChange={this.dynamicSearch} handleInputChange={this.handleInputChange}></SearchBar>
            <Table sortName={this.sortName} results={filteredArr}></Table>
        </div>
    )
};






}

export default Home;