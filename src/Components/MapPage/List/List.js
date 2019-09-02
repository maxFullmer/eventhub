import React from 'react';
import './List.scss';

export default function List(props){
   const date = props.date
    return(

      <div class="tab">
        <input type="checkbox" id="chck1" />
        <label class="tab-label" for="chck1">{props.name}</label>
        <div class="tab-content">
          {props.address} <br/> {props.description}
        </div>
      </div>
    )
}