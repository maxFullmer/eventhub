import React from 'react';
import moment from 'moment';
import './List.scss';

export default function List(props){
   
    return(
        <div>
        <h1>EVENTS HAPPENING IN YOUR AREA</h1>
<div class="row">
  <div class="col">
    <div class="tabs">
      <div class="tab">
        <input type="checkbox" id="chck1" />
        <label class="tab-label" for="chck1">Item 1</label>
        <div class="tab-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck2" />
        <label class="tab-label" for="chck2">Item 2</label>
        <div class="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    )
}