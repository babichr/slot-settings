import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "./Picker.styl";
import { onVelueChange } from "../../actions/actions";




class Picker extends React.Component{

	constructor( props ){
		super( props );
	};


	render(){

	const { title, list, name } = this.props.pickerData;
	const { getValue, checkedCoin } = this.props;

		return(
			<div className="picker">
				<h2 className="picker__title">
					{
						title
					}
				</h2>
				<div className="picker__list">
				{
					list.map((item, i)=> {
						return (
							<label key={i} className="picker__item">
								<input onChange={ e => { getValue(e) } } type="radio" checked={ item.checked } name={ name } value={ item.value } />
								<span>
									{
										item.value
									}
								</span>
							</label>
						)
					})
				}
				</div>
			</div>
		)
	}
}

const mapStateToProps = ( state ) =>({

});

const mapDispatchToProps = ( dispatch ) =>({
	getValue: (e) => { e.target.checked;  dispatch(onVelueChange(e)) }
});

Picker = connect(mapStateToProps, mapDispatchToProps)(Picker);


export default Picker;