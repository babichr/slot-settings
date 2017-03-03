import React from "react";
import ReactDOM from "react-dom";
import "./Result.styl";


class Result extends React.Component{


	render(){

		const { coin, bet } = this.props
		console.log(this.props);
		return(
			<div className="result">
				<div className="result__title">
					Total bet
				</div>
				<div className="result__box">
					{
						coin * bet * 9
					}
				</div>
			</div>
		)
	}
}

export default Result;