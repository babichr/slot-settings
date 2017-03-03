import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "./Body.styl";
import Picker from "../Picker/Picker";
import Result from "../Result/Result";
import Thumbler from "../Thumbler/Thumbler";
import { thumblerSound, coinValue, betValue, thumblerMusic } from "../../data/data";
import { coinValueChange, betValueChange, soundValueChange, musicValueChange } from "../../actions/actions";


class Body extends React.Component{

	constructor( props ){
		super( props );
	};

	render(){

		const { activeCoin, activeBet, activeSound, activeMusic } = this.props;

		return(
			<div className="body">
				<div className="body__inner">
					<div className="body__row">
						<div className="body__col body__col_left">
							<Picker activeValue={ activeCoin } action={ coinValueChange } pickerData= { coinValue } />
							<Picker activeValue={ activeBet } action={ betValueChange } pickerData= { betValue } />
						</div>
						<div className="body__col body__col_right">
							<Result coin={ activeCoin } bet={ activeBet } />
						</div>
					</div>
					<hr />
					<div className="body__row">
						<div  className="body__col">
							<Thumbler activeSwitch={ activeSound } action={soundValueChange}  thumblerData={ thumblerSound } />
						</div>
						<div  className="body__col">
							<Thumbler activeSwitch={ activeMusic } action={musicValueChange} thumblerData={ thumblerMusic } />
						</div>
					</div>
				</div>
			</div>
		)
	}
}


const mapStateToProps = ( state ) =>({
	activeCoin: state.values.coin,
	activeBet: state.values.bet,
	activeMusic: state.values.music,
	activeSound: state.values.sound
});

const mapDispatchToProps = ( dispatch ) =>({
	
});

Body = connect(mapStateToProps, mapDispatchToProps)(Body);

export default Body;