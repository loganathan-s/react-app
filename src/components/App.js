import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
	constructor(){
		super();
		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
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

	loadSamples(){
		this.setState({ fishes: sampleFishes })
	}

	render(){
		return(
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh SeaFood Market"/> 
					<ul className="list-of-fishes">
					 {
					 	 //* {key} -> This is uniq identifier for each fish in the list you can give an uniq value here */}
					 	Object
					 		.keys(this.state.fishes)
					 	.map(key => <Fish key={key} details={this.state.fishes[key]}/>) 
					 }
					</ul>
				</div>
				<Order/>
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
			</div>	
			) 
	}
}


export default App;