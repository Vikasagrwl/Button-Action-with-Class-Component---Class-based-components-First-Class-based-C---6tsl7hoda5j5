import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor() {
		super();
		this.state={
			msg:""
		}
	};
	handleclick(){
		this.setState({
			msg:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
		})
	}
    render() {
    	return(
    		<div id="main">
			<button onClick={()=>this.handleclick()}>
				click here
			</button>
			<p>{this.state.msg}</p>
    		</div>
    	);
    }
}


export default App;

