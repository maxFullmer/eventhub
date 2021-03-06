import React from 'react';
import './EventsList.scss';

export default function List(props) {
  //  const date = props.date;
  return (

    <div className="tab">
      <input className="checkbox" type="checkbox" id={`chck${props.i}`} />
      <label className="tab-label" for={`chck${props.i}`}>{props.name}</label>
      <div className="tab-content">
        {props.address} <br /><br /> {props.description}
      </div>
    </div>
  )
}