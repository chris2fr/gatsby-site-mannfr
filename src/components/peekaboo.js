import React from "react";
import "./peekaboo.css"
// import { Trans } from '@lingui/macro'


import "../css/screen.css"
// import "../css/burger.css"

class PeekABoo extends React.Component  {
  
  constructor(props) {
    super(props);
    this.state = { showComponent: false };
    this.children = props.children;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showComponent: !this.state.showComponent });
  }

  render() {
    return (
      <>
      <div 
        className={"burger"}
        role="button"
        onClick={this.handleClick}
        style={{position:"relative",flexShrink:0,width:"34px",height:"34px",border:"2px solid var(--mid-gray-color)","backgroundColor":"var(--white-color)",cursor:"pointer"}}
        >
        <div id="peekaboo" style={{"visibility":this.state.showComponent?"visible":"hidden"}}>
<aside className={`peekaboo ${this.state.showComponent ?"open" : ""} was-off-canvas`} id='peekabooeaside' onClick={this.handleClick}>
<div 
        role="button"
        onClick={this.handleClick}
        style={{position:"absolute",right:20,top:20,flexShrink:0,width:"34px",height:"34px",border:"2px solid var(--mid-gray-color)","backgroundColor":"var(--white-color)",cursor:"pointer"}}
        >[ X ]</div>
        {this.children}
      </aside>
</div>
</div>


        </>
    )
  }
}

export default PeekABoo