import axios from "axios";

export default{
    getRandomUser: function(){
        return axios.get("https://randomuser.me/api/?results=25")
    },
    getSpecificUser: function(search){
        return axios.get("https://randomuser.me/api/?name="+ search);
    }
};