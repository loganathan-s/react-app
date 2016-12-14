//Import complete React
import React from 'react';
// Just import render method react-dom package
import {render} from 'react-dom';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
import { BrowserRouter, Match, Miss} from 'react-router';
//Import whole ReactDom package
//import ReactDom from 'react-dom';
import App from "./components/App"
import "./css/style.css";


const Root = () => {
	return(
	<BrowserRouter>
	   <div>
			<Match exactly pattern="/" component={StorePicker} />
			<Match exactly pattern="/store/:storeId" component={App} />
			<Miss component={NotFound}></Miss>
	 	</div>	 
	</BrowserRouter>)
}
render(<Root/>, document.querySelector('#main'));
