import React, { Component } from "react";
import photo from "./place.png"
import "./style.css"

export class Players extends Component {
    render(){
        return(
            <div>
                <div class="columns back">
  <div class="column">
    <img src={photo} />
  </div>
  <div class="column">
  <img src={photo} />
  </div>
  <div class="column">
  <img src={photo} />
  </div>
  <div class="column">
  <img src={photo} />
  </div>
</div>

<div class="columns">
  <div class="column">
    <img src={photo} />
  </div>
  <div class="column">
  <img src={photo} />
  </div>
  <div class="column">
  <img src={photo} />
  </div>
  <div class="column">
  <img src={photo} />
  </div>
</div>

<div class="columns">
  <div class="column">
    <img src={photo} />
  </div>
  <div class="column">
  <img src={photo} />
  </div>
  <div class="column">
  <img src={photo} />
  </div>
  <div class="column">
  <img src={photo} />
  </div>
</div>
            </div>
        )
    }
};

export default Players;