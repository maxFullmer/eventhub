import React from 'react';
import Calendar from 'react-calendar'

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <div>
                <Calendar />
            </div>
        )
    }
}
