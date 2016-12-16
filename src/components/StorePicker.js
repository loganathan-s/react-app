import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	// super(); -> Calls React.Component and then creates StorePicker 
	// this.goToStore = this.goToStore.bind(this);  -> Looks for goToStore inside the component and binds that to itself
	//

	//constructor(){
	//	super();
	//	this.goToStore = this.goToStore.bind(this);
	//}
	//  OTHERWAYS IS 
	//  onSubmit={this.goToStore.bind(this);)

	//	OTHERWAYS
	//(e) => this.goToStore.bind(e)

	goToStore(event){
		event.preventDefault();
		const storeId = this.storeInput.value;
		this.context.router.transitionTo(`/store/${storeId}`);
	}

	render (){
		// You can return only one element
		return (

			<form  className="store-selecter" onSubmit={(e) => this.goToStore(e)}>
 			  {/* REACT COMMENT */}
 			  <h2> PLEASE ENTER STORE NAME</h2>
 			  <input type="text" placeholder="Store Name" defaultValue={ getFunName() } required ref={(input) => {this.storeInput = input}}/>
 			  <button type="submit"> Visit Store -></button>
			</form>
			)
	}
}

StorePicker.contextTypes = {router: React.PropTypes.object}
export default StorePicker;

