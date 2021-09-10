import { Component } from "react";
import photo from "./place.png";

export class Round1 extends Component{
    render(){
        return(
            <div>
              <div>
<article className="panel white">
  <p className="panel-heading black red">
    Round 1
  </p>

  <p className="title">
    HOH:
  </p>
  <div className="item" >
  <img src={photo}></img>
  </div>
  <p className="black subtitle">
    POV:
  </p>
  <figure className="image item2 is-128x128">
    <img src={photo}/>
  </figure>

  <p className="black subtitle">
    Nominees:
  </p>
<div className="columns">
  <figure className="image column is-4 item2 is-128x128">
    <img src={photo}/>
  </figure>
  <figure className="image column item2 is-4 is-128x128">
    <img src={photo}/>
  </figure>
</div>
</article>
</div>
            </div>
        )
    }
};

export default Round1;