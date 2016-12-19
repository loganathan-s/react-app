import React from "react";

// STateless function

const Header = (props) => {
	return(
	<header className="top">
				<h1>
					 Catch
					<span className="ofThe">
						<span className="of">of</span>
						<span className="the">the</span>
					</span>
					Day
				</h1>
				<h3 className="tagline"><span>{props.tagline}</span></h3>
			</header>)		

}

//OR
//var Header = function(props){

//}

//OR

//function Header(props){

//}

export default Header;