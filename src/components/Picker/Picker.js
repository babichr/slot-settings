import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "./Picker.styl";

class Picker extends React.Component{

	constructor( props ){
		super( props );
	};


	render(){

	const { title, list, name } = this.props.pickerData;
	const { getValue, checkedCoin, action, checkedValue, activeValue } = this.props;

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
								<input onChange={ e => { getValue(e, action) } } checked={ item.value === activeValue } type="radio" name={ name } value={ item.value } />
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
	getValue: (e, action) => { dispatch(action(e)) }
});

Picker = connect(mapStateToProps, mapDispatchToProps)(Picker);


export default Picker;