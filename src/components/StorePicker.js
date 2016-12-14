import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	render (){
		// You can return only one element
		return (
			<form  className="store-selecter">
 			  {/* REACT COMMENT */}
 			  <h2> PLEASE ENTER STORE NAME</h2>
 			  <input type="text" placeholder="Store Name" defaultValue={ getFunName() } required />
 			  <button type="submit"> Visit Store -></button>
			</form>
			)
	}
}
export default StorePicker;

