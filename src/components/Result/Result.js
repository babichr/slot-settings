import React from "react";
import ReactDOM from "react-dom";
import "./Result.styl";


class Result extends React.Component{
	render(){
		return(
			<div className="result">
				<div className="result__title">
					Total bet
				</div>
				<div className="result__box">
					50000
				</div>
			</div>
		)
	}
}

export default Result;