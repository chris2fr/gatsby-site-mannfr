import React from "react";
import "./peekaboo.css"

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
    const { data } = this.props;
    return (
      <>
      <div className={"burger peekaboo-button"} 
        role="button"
        onClick={this.handleClick}
        ></div>
        <div id="peekaboo" style={{"visibility":this.state.showComponent?"visible":"hidden"}}>
<aside className={`peekaboo ${this.state.showComponent ?"open" : ""} off-canvas`} id='peekabooeaside' onClick={this.handleClick}>
<button onClick={this.handleClick} className="peekaboo-button">
  X
</button>
        {this.children}
      </aside>
</div>



        </>
    )
  }
}

export default PeekABoo