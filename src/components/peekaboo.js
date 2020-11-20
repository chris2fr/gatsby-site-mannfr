import React from "react";
import "./peekaboo.css"
import "../css/burger.css"

class PeekABoo extends React.Component  {
  
  constructor({ children, ...props }) {
    super({ children, ...props });
    this.state = { showComponent: false };
    this.children = children;
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
        classNotName={"peekaboo-button"} 
        role="button"
        onClick={this.handleClick}
        style={{position:"relative",flexShrink:0,width:"34px",height:"34px",border:"2px solid var(--mid-gray-color)","background-color":"var(--white-color)",cursor:"pointer"}}
        >
        <div id="peekaboo" style={{"visibility":this.state.showComponent?"visible":"hidden"}}>
<aside className={`peekaboo ${this.state.showComponent ?"open" : ""} off-canvas`} id='peekabooeaside' onClick={this.handleClick}>
<div 
        role="button"
        onClick={this.handleClick}
        style={{position:"absolute",right:20,top:20,flexShrink:0,width:"34px",height:"34px",border:"2px solid var(--mid-gray-color)","background-color":"var(--white-color)",cursor:"pointer"}}
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