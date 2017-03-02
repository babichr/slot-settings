import React from "react";
import ReactDOM from "react-dom";
import "./Body.styl";
import Picker from "../Picker/Picker";
import Result from "../Result/Result";
import { coinValue } from "../../data/data";
import { betValue } from "../../data/data";


class Body extends React.Component{
	render(){
		return(
			<div className="body">
				<div className="body__inner">
					<div className="body__row">
						<div className="body__col body__col_left">
							<Picker pickerData= { coinValue } />
							<Picker pickerData= { betValue } />
						</div>
						<div className="body__col body__col_right">
							<Result />
						</div>
					</div>
					<hr />
					<div className="body__row">
						<div className="body__col"></div>
						<div className="body__col"></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Body;