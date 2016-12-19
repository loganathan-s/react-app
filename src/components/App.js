import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
	constructor(){
		super();
		this.addFish = this.addFish.bind(this);
		// getInitialState
		this.state = {
			fishes: {},
			order: {}
		};
	}

	addFish(fish){

		// Update our state, we should touch initial state this.state in constructior, we should always copy that and update
		const fishes = {...this.state.fishes};//... -> is called 'spread' in ES6
		const timestamp = Date.now();
		// Add Fish
		fishes[`fish-${timestamp}`] = fish;
		//Update existing state initialized in constructor
		this.setState({ fishes: fishes })
	}

	render(){
		return(
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh SeaFood Market"/>
				</div>
				<Order/>
				<Inventory addFish={this.addFish}/>
			</div>	
			) 
	}
}


export default App;