import React from 'react';
import moment from 'moment';

export default function List(props){
    const m = moment(props.date)
    const day = m.format('MMMM Do')
    const time = m.format('hh mm a A')
    
    return(
        <li class="accordion__item">
        <div class="accordion__itemTitleWrap">
          <h3 class="accordion__itemTitle">{props.name} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{day}</h3>
          <div class="accordion__itemIconWrap"><svg viewBox="0 0 24 24"><polyline fill="none" points="21,8.5 12,17.5 3,8.5 " stroke="#FFF" stroke-miterlimit="10" stroke-width="2"/></svg></div>
        </div>
        <div class="accordion__itemContent">
          <p>{time}</p>
          <p>{props.address.street}<br>{props.address.city}, {props.address.state} {props.address.zip}</br></p>
          <p>{props.description}</p>
        </div>
      </li>
    )
}