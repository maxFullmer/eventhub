import React from 'react';
import Gmap from './Gmap/Gmap'
import List from './List/List';
import moment from "moment";
import axios from "axios";

export default class MapPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            events: [],
            latLng: {},
            loading:true
        }
        this.populateResults = this.populateResults.bind(this);
        this.getCityLoc = this.getCityLoc.bind(this);
    }
    componentDidMount(){
        this.populateResults();
        this.getCityLoc();
        this.setState({
            loading:false
        })
    }

    populateResults(){
        const city = localStorage.getItem("city");
        const dateBegin = new Date(localStorage.getItem("dateBegin"));
        const dateEnd = new Date(localStorage.getItem("dateEnd"));
        console.log(dateBegin)
        axios.post('/api/search', {city: city, dateBegin: dateBegin, dateEnd: dateEnd})
        .then( res => {
            this.setState({
                events: res.data,
            })
        })
   }

   
   getCityLoc() {
       axios.post('/api/get-city-loc', {city: localStorage.getItem("city")})
       .then(res => {
           this.setState({latLng: res.data})
       })
   }
   
   render(){
       if(this.state.loading){
           return(
               <div>
                   We're loading it up fer yeh
               </div>
           )
       } else{

    return(
        <div>
        <Gmap events={this.state.events} latLng={this.state.latLng}/>
       <List/>
        </div>
    )}
   
}
}