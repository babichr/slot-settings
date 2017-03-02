import React from "react";
import ReactDOM from "react-dom";

class Thumbler extends React.Component{
	render(){
		return(
			<div className="thumbler">
				<div className="thumbler__info">
					<div className="thumbler__title"></div>
					<div className="thumbler__desc"></div>
				</div>
				<div className="thumbler__box"></div>
				<div className="thumbler__switch">
					<span></span>
					<input type="radio" />
				</div>
			</div>
		)
	}
}